<template>
  <a-col :span="6" class="preview">
    <p class="title">Preview</p>
    <div class="guide" v-if="!imgPreview">
      <a-icon type="eye" />
      <p>Select an item in the grid to preview it</p>
    </div>
    <div class="show-preview" v-if="imgPreview">
      <div class="preview-frame">
        <img :src="imgPreview.url" width="100%">
      </div>
      <p><span class="img-info">Name: </span>{{imgPreview.name}}</p>
      <p><span class="img-info">Size: </span>{{imgPreview.size}}</p>
      <p><span class="img-info">Type: </span>.{{imgPreview.type}}</p>
    </div>
  </a-col>
</template>

<script>
export default {
  props: {
    imgPreview: Object,
  },
};
</script>

<style src='./style.scss' lang='scss'>
</style>