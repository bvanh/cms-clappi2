<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { redirectPage } from "./ultils/checkToken";
export default {
  created() {
    redirectPage(this, "login");
  },
};
</script>
<style src='./style.scss' lang='scss' scoped>
</style>
