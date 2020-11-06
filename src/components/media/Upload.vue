<template>
  <a-upload
    name="file"
    :multiple="true"
    :action="apiUpload"
    :headers="headers"
    @change="handleChange"
    :showUploadList="false"
  >
    <a-button icon="upload" style="border: 0" :loading="isLoading">
      Upload
    </a-button>
  </a-upload>
</template>

<script>
import api from "../../api/apiUrl";
import localServices from "../../ultils/localServices";
import constants from "../../ultils/constants";
const { getToken } = localServices;
const { nameAccessLocal } = constants;
export default {
  props: {
    getListImages: Function,
  },
  data() {
    return {
      isLoading: false,
      apiUpload: api.ROOT_API + api.UPLOAD,
      headers: {
        Authorization: `Bearer ${getToken(nameAccessLocal)}`,
      },
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.isLoading = true;
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
        this.isLoading = false;
        this.getListImages();
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>

<style>
</style>