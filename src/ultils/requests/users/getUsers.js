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
export { getListUsers };
