import constants from "./constants";
const { nameTokenLocal, nameAccessLocal } = constants;
const localServices = {
  saveToken: (token, accessToken) => {
    const timestamp = new Date().getTime();
    localStorage.setItem(
      nameTokenLocal,
      JSON.stringify({ refreshToken: token, timestamp: timestamp })
    );
    localStorage.setItem(nameAccessLocal, JSON.stringify(accessToken));
  },
  saveAccessToken: (accessToken) => {
    localStorage.setItem(nameAccessLocal, JSON.stringify(accessToken));
  },
  getToken: (token) => {
    return localStorage.getItem(token);
  },
};

export default localServices;
