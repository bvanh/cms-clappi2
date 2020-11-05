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
        </a-tabs>
        <ListImages :listImages="listImages" />
      </a-col>
      <Upload />
    </a-row>
  </div>
</template>
<script>
import ListImages from "./ListImages";
import Upload from "./Upload";
import { getListImages } from "../../ultils/requests/media/getImages";
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
    };
  },
  methods: {
    switchMenu(key) {
      console.log(key);
    },
  },
  created() {
    getListImages(this, this.params);
  },
  components: {
    ListImages,
    Upload,
  },
};
</script>

<style src="./style.scss" lang="scss"></style>
