<template>
  <a-row :gutter="[24, 16]">
    <a-col
      :span="6"
      v-for="item of listImages"
      :key="item.id"
      class="images"
    >
      <div
        class="img-frame"
        :class="[
          imgPreview
            ? item.id === imgPreview.id
              ? 'img-frame images-checked'
              : 'img-frame'
            : 'img-frame',
        ]"
        :style="getBg(item.url)"
      >
        <div
          :class="[
            isImgChecked(item.id) ? 'img-controls-checked' : 'img-controls',
          ]"
        >
          <a-checkbox
            @change="onImgChecked"
            :value="item.id"
            class="img-check"
          ></a-checkbox>
          <a-icon
            type="download"
            class="img-download"
            @click.prevent="downloadImg(item.url, item.name)"
          />
        </div>
        <div class="images-mark" @click="setImgPreview(item)"></div>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import { getBg } from "../../ultils/services";
import axios from "axios";
export default {
  props: {
    listImages: Array,
    imgPreview: Object,
    setImgPreview: Function,
  },
  data() {
    return {
      imgChecked: [],
    };
  },
  methods: {
    onImgChecked(e) {
      const { checked, value } = e.target;
      switch (checked) {
        case true:
          this.imgChecked = [...this.imgChecked, value];
          break;
        default:
          this.imgChecked = this.imgChecked.filter((val) => val !== value);
          break;
      }
      console.log(this.imgChecked);
    },
    isImgChecked(imgId) {
      return this.imgChecked.includes(imgId);
    },
    getBg: (img) => getBg(img),
    downloadImg(url, name) {
      axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          let fileUrl = window.URL.createObjectURL(new Blob([response.data]));
          let fileLink = document.createElement("a");
          fileLink.href = fileUrl;
          fileLink.setAttribute("download", `${name}.jpg`);
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch(console.error);
    },
  },
};
</script>

<style src="./style.scss" lang="scss"></style>
