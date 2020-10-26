import api from "../../../api/apiUrl";
import { baseData } from "../../../api/baseApi";
//import qs from "qs";
const { USERS } = api;
const getListUsers = (thisObj, params) => {
  //console.log(params);
  //let listUsers;
  return baseData
    .get(USERS, { params })
    .then((res) => {
      console.log(res.data);
      thisObj.listUsers = res.data.listUsers;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export { getListUsers };
