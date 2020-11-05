<template>
  <a-row :gutter="[24, 16]">
    <a-col :span="6" v-for="item of listImages" :key="item.id">
      <div class="img-frame" :style="getBg(item.url)">
        <div class="img-controls">
          <a-checkbox
            @change="onChange"
            :value="item.id"
            class="img-check"
          ></a-checkbox>
          <a-icon type="download" class="img-download" />
        </div>
      </div>
      <!-- <a @click.prevent="downloadItem(item.url, item.name)"> down </a> -->
    </a-col>
  </a-row>
</template>
<script>
import { getBg } from "../../ultils/services";
import axios from "axios";
export default {
  props: {
    listImages: Array,
  },
  methods: {
    onChange(e) {
      console.log(e);
    },
    getBg: (img) => getBg(img),
    downloadItem(url, name) {
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
