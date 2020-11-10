import api from "../../../api/apiUrl";
import { baseData } from "../../../api/baseApi";
//import qs from "qs";
const { USERS, USER_DETAIL } = api;
const getListUsers = (thisObj, params) => {
  //console.log(params);
  //let listUsers;
  return baseData
    .get(USERS, { params })
    .then((res) => {
      //console.log(res.data);
      const { listUsers, totalItems, currentPage } = res.data;
      thisObj.listUsers = listUsers;
      thisObj.totalItems = totalItems;
      thisObj.currentPage = currentPage;
      //baseData.get(USERS)
    })
    .catch((err) => {
      console.log(err.response);
    });
};
const getDetailUser = (thisObj, userId) => {
  return baseData
    .get(USER_DETAIL, { userId: userId })
    .then((res) => {
      console.log(res.data);
      //baseData.get(USERS)
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export { getListUsers, getDetailUser };
