function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const importImg = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);
// const importImgBanner = importAll(
//   require.context("../assets/banner", false, /\.(png|jpe?g|svg)$/)
// );
// const importImgBestSeller = importAll(
//   require.context("../assets/bestseller", false, /\.(png|jpe?g|svg)$/)
// );
// const importImgCategory = importAll(
//   require.context("../assets/category", false, /\.(png|jpe?g|svg)$/)
// );
// const importImgFooter = importAll(
//   require.context("../assets/footer", false, /\.(png|jpe?g|svg)$/)
// );
export {
  importImg,
  //   importImgBanner,
  //   importImgBestSeller,
  //   importImgCategory,
  //   importImgFooter,
};
