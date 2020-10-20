//import VueRouter from "vue-router";
import localServices from "./localServices";
import constants from "./constants";
//const { isNavigationFailure} = VueRouter;
const { nameAccessLocal, nameTokenLocal } = constants;
const { getToken } = localServices;
function checkToken() {
  const currentTime = new Date().getTime();
  const accessToken = getToken(nameAccessLocal);
  const tokenClappi = getToken(nameTokenLocal);
  const checkExpriedToken = currentTime - tokenClappi?.timestamp > 75168000000;
  if (accessToken === null || tokenClappi === false || checkExpriedToken) {
    return true;
  } else {
    return false;
  }
}
const redirectPage = (thisObj, page) => {
  if (checkToken()) {
    thisObj.$router.push(page).catch((failure) => {
      return Promise.resolve(failure);
    });
  }
};
export { checkToken, redirectPage };
