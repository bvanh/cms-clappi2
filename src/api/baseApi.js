import api from "./apiUrl";
import axios from "axios";
import qs from "qs";
import localServices from "../ultils/localServices";
import constants from "../ultils/constants";
const { getToken, saveAccessToken } = localServices;
const { nameAccessLocal, nameTokenLocal } = constants;
const { ROOT_API, REFRESH_TOKEN } = api;
const baseLogin = axios.create({
  baseURL: ROOT_API,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
const baseData = axios.create({
  baseURL: ROOT_API,
});
baseData.interceptors.request.use(
  (config) => {
    const accessToken = getToken(nameAccessLocal);
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
      return config;
    }
  },
  (error) => {
    return error;
  }
);
baseData.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originRequest = error.response.config;
    const { status } = error.response;
    //console.log(error.response, status);
    const { refreshToken } = getToken(nameTokenLocal);
    // console.log(refreshToken);
    if (status !== 401) {
      return Promise.reject(error);
    }
    return baseLogin
      .post(REFRESH_TOKEN, qs.stringify({ refreshToken: refreshToken }))
      .then((response) => {
        //console.log(response);
        const { accessToken } = response.data;
        saveAccessToken(accessToken);
        originRequest.headers["Authorization"] = "Bearer " + accessToken;
        return axios(originRequest);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
);
export { baseLogin, baseData };
