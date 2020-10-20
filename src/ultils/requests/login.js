import api from "../../api/apiUrl";
import { baseLogin } from "../../api/baseApi";
import qs from "qs";
import localServices from "../localServices";
const { saveToken } = localServices;
const { LOGIN } = api;
const login = (thisObj, params) => {
  return baseLogin
    .post(LOGIN, qs.stringify({ ...params }))
    .then((res) => {
      const { accessToken, refreshToken } = res.data;
      saveToken(refreshToken, accessToken);
      thisObj.$router.push("/users");
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export { login };
