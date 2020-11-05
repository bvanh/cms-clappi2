import api from "../../../api/apiUrl";
import { baseData } from "../../../api/baseApi";
//import qs from "qs";
const { IMAGES } = api;
const getListImages = (thisObj, params) => {
  //console.log(params);
  //let listNews;
  return baseData
    .get(IMAGES, { params })
    .then((res) => {
      console.log(res.data);
      const { listItems, totalItems, currentPage } = res.data;
      thisObj.listImages = listItems;
      thisObj.totalItems = totalItems;
      thisObj.currentPage = currentPage;
      //baseData.get(USERS)
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export { getListImages };
