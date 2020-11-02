<template>
  <div>
    <div class="header-component">
      <h3>MEDIA</h3>
    </div>
    <a-row class="media-content">
      <a-col :span="18" class="list-images">
        <a-tabs default-active-key="1" @change="switchMenu">
          <a-tab-pane key="1" tab="Images"></a-tab-pane>
          <a-tab-pane key="2" tab="Albums"> </a-tab-pane>
        </a-tabs>
        
      </a-col>
      <a-col :span="6">f</a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  methods: {
    switchMenu(key) {
      console.log(key);
    },
  },
};
</script>

<style src="./style.scss" lang="scss"></style>
