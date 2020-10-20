<template>
  <a-row>
    <div class="side-menu">
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
        :default-selected-keys="[0]"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
        <a-menu-item v-for="(menu, index) of menus" :key="index">
          <a-icon :type="menu.iconType" />
          <span>{{ menu.name.toUpperCase() }}</span>
        </a-menu-item>
      </a-menu>
    </div>
    <slot></slot>
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
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>