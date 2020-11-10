<template>
  <a-row>
    <a-col class="side-menu">
      <!-- <a-button
        type="primary"
        style="margin-bottom: 16px"
        @click="toggleCollapsed"
      >
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button> -->
      <div class="header-menu">
        <img :src="importImg('logo.png')" class="logo" />
        <img :src="importImg('avatar.png')" class="avatar" />
        <span class="username">John Doe</span>
      </div>
      <a-menu
        :default-selected-keys="[menuSelected]"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <a-menu-item v-for="menu of menus" :key="'/' + menu.name">
          <router-link :to="{ name: menu.name }">
            <a-icon :type="menu.iconType" />
            <span>{{ menu.name.toUpperCase() }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col class="content-page">
      <div class="header">
        <a-button type="primary" icon="menu" class="btn-side-menu"></a-button>
        <img :src="importImg('avatar.png')" class="avatar-log" />
      </div>
      <slot></slot>
    </a-col>
  </a-row>
</template>
<script>
import constants from "../../ultils//constants";
import { importImg } from "../../ultils/importImg";
export default {
  data() {
    return {
      collapsed: false,
      menus: constants.menus,
      menuSelected: this.$router.history.current.fullPath,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    importImg(img) {
      return importImg[img];
    },
  },
  computed: {
    getRouter() {
      const route = this.$router.history.current.fullPath;
      // console.log(route)
      return route;
    },
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>