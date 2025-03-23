import secureLocalStorage from "react-secure-storage";
import api from "../../../services/api";
import store from "../../store";
import {
    getAccessToken,
    getRefreshToken,
    removeAccessToken,
    removeRefreshToken,
    removePythonToken,
    setAccessToken,
    setRefreshToken,
    setPythonToken,

} from "../../../utils/cookie";

import { login, logout, refreshTokenExpired } from "./authActionSync";

export const startLogin = (username, userPassword) => async (dispatch) => {
    //dispatch(setLoading(true));
    try {
        //console.log("User: ",username, " - ",userPassword)
        const response = await api.Auth.loginApp({
            username: username,
            userPassword: userPassword,
        });

        const responsePython = await api.PythonScraper.Authenticate({
            username: username,
            password: userPassword,
        });
        
        //console.log(response)
        if (response.isSuccess && responsePython.success) {
            const { data } = response;

            //console.log("Logged in: ", data);
            //console.log("Auth python: ", responsePython)
            const { token, refreshToken } = data;


            dispatch(login(data));
            setAccessToken(token);
            setRefreshToken(refreshToken);
            setPythonToken(responsePython.token);
            return response;
        } else {
            return Promise.reject(response.message);
        }
    } catch (error) {
        const errorMessage = error.message || 'Error';
        return Promise.reject(errorMessage);
    } finally {
        //dispatch(setLoading(false));
    }
};

export const startLogout = () => async (dispatch) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    const userId = store.getState().auth.user.userId;
    try {
        await api.Auth.logOutApp({
            userId: userId,
            expiredToken: accessToken,
            refreshToken: refreshToken,
        });
    } catch (error) {
    } finally {
        dispatch(logout());
        removeAccessToken();
        removeRefreshToken();
        removePythonToken();
        secureLocalStorage.clear();
    }
};

export const removeExpiredRefreshToken = () => async (dispatch) => {
    removeAccessToken();
    removeRefreshToken();
    removePythonToken();
    secureLocalStorage.clear();
    dispatch(refreshTokenExpired());
};



