<template>
  <div>
    <div class="header-component">
      <h3>MEDIA</h3>
    </div>
    <a-row class="media-content">
      <a-col :span="18" class="list-images">
        <a-tabs default-active-key="1" @change="switchMenu">
          <a-tab-pane key="1" tab="Images"></a-tab-pane>
          <a-tab-pane key="2" tab="Albums"></a-tab-pane>
          <div slot="tabBarExtraContent">
            <Upload :getListImages="getListImages" />
          </div>
        </a-tabs>
        <ListImages
          :listImages="listImages"
          :setImgPreview="setImgPreview"
          :imgPreview="imgPreview"
        />
      </a-col>
      <Preview :imgPreview="imgPreview" />
    </a-row>
  </div>
</template>
<script>
import ListImages from "./ListImages";
import Preview from "./Preview";
import { getListImages } from "../../ultils/requests/media/getImages";
import Upload from "./Upload";
export default {
  data() {
    return {
      listImages: [],
      totalPage: null,
      totalItems: null,
      params: {
        page: 0,
        size: 10,
      },
      imgPreview: null,
    };
  },
  methods: {
    switchMenu(key) {
      console.log(key);
    },
    setImgPreview(img) {
      console.log(img);
      this.imgPreview = img;
    },
    getListImages() {
      //console.log('fsfs')
      getListImages(this, this.params);
    },
  },
  created() {
    getListImages(this, this.params);
  },
  components: {
    ListImages,
    Preview,
    Upload,
  },
};
</script>

<style src="./style.scss" lang="scss"></style>
