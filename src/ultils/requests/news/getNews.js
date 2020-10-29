import api from "../../../api/apiUrl";
import { baseData } from "../../../api/baseApi";
//import qs from "qs";
const { NEWS } = api;
const getListNews = (thisObj, params) => {
  //console.log(params);
  //let listNews;
  return baseData
    .get(NEWS, { params })
    .then((res) => {
      //console.log(res.data);
      const { listNews, totalItems, currentPage } = res.data;
      thisObj.listNews = listNews;
      thisObj.totalItems = totalItems;
      thisObj.currentPage = currentPage;
      //baseData.get(USERS)
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export { getListNews };
