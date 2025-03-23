import axios from "axios";
import store from "../store/store";
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from "../utils/cookie";
import { removeExpiredRefreshToken, startLogout } from "../store/actions/auth/authActionAsync";

// API .NET
const axiosDotNet = axios.create({
  //baseURL: `https://psei-sie-api-gwdug2a4egf7bxe4.brazilsouth-01.azurewebsites.net/api`
  baseURL: `https://localhost:44359/api`
});



let isRefreshing = false;
const subscribers = [];

const onAccessTokenRefreshed = (newAccessToken) => {
  subscribers.forEach((callback) => callback(newAccessToken));
  subscribers.length = 0;
};
axiosDotNet.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuestas para la API en .NET
axiosDotNet.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.message === "Network Error" && !err.response) {
      return Promise.reject(err);
    }

    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        if (!isRefreshing) {
          isRefreshing = true;
          try {
            const rs = await axiosDotNet.post("/Auth/RefreshToken", {
              expiredToken: getAccessToken(),
              refreshToken: getRefreshToken(),
            });
            console.log('Refresh token response:', rs);
            const newAccessToken = rs.token;
            const refreshToken = rs.refreshToken;

            setAccessToken(newAccessToken);
            setRefreshToken(refreshToken);

            originalConfig.headers.authorization = `Bearer ${newAccessToken}`;
            onAccessTokenRefreshed(newAccessToken);
            return axiosDotNet(originalConfig);
          } catch (e) {
            if (e.response && e.response.status === 400) {
              store.dispatch(removeExpiredRefreshToken());
            }
            return Promise.reject(err);
          } finally {
            isRefreshing = false;
          }
        } else {
          return new Promise((resolve) => {
            subscribers.push((newAccessToken) => {
              originalConfig.headers.authorization = `Bearer ${newAccessToken}`;
              resolve(axiosDotNet(originalConfig));
            });
          });
        }
      }
      if (err.response.status === 403) {
        store.dispatch(startLogout()); // Desloguea al usuario
        window.location = '/403'; // Redirige a la página de error 403
      }
    }
    return Promise.reject(err);
  }
);


export { axiosDotNet };
