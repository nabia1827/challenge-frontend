import Cookies from "js-cookie";

const tokenName = "token-app";
const refreshTokenName = "refreshToken-app";
const pythonTokenName = "token-python";

// Set the access token as an HTTP-only cookie
export const setAccessToken = (token) => {
  Cookies.set(tokenName, token, {
    path: "/",
    //secure: true, // Solo se enviará a través de HTTPS
    //sameSite: 'strict' // Contra ataques CSRF
  });
};

// Set the refresh token as a regular cookie
export const setRefreshToken = (refreshToken) => {
  Cookies.set(refreshTokenName, refreshToken, { 
    path: "/",
    //secure: true, // Solo se enviará a través de HTTPS
    //sameSite: 'strict' // Contra ataques CSRF
  });
};

// Set the python token as an HTTP-only cookie
export const setPythonToken = (token) => {
  Cookies.set(pythonTokenName, token, {
    path: "/",
    //secure: true, // Solo se enviará a través de HTTPS
    //sameSite: 'strict' // Contra ataques CSRF
  });
};

// Get the access token
export const getAccessToken = () => {
  return Cookies.get(tokenName);
};

// Get the refresh token
export const getRefreshToken = () => {
  return Cookies.get(refreshTokenName);
};

// Get the python token
export const getPythonToken = () => {
  return Cookies.get(pythonTokenName);
};


// Remove the access token
export const removeAccessToken = () => {
  Cookies.remove(tokenName, { path: "/" });
};

// Remove the refresh token
export const removeRefreshToken = () => {
  Cookies.remove(refreshTokenName, { path: "/" });
};

// Remove the refresh token
export const removePythonToken = () => {
  Cookies.remove(pythonTokenName, { path: "/" });
};
