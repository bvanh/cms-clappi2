<template>
  <div>
    <div class="header-component">
      <h3>USER PROFILE</h3>
    </div>
    <a-row class="profile">
      <a-col :span="6" class="user-controls">
        <img :src="importImg('avatar1.png')" class="user-avatar" />
        <p>User Name</p>
        <p>C.coin: 0</p>
        <p>UserId: 0000111</p>
        <p>Email: abc@gmail.com</p>
        <a-menu
          :default-selected-keys="[menuSelected]"
          mode="inline"
          :inline-collapsed="collapsed"
        >
          <a-menu-item v-for="menu of menus" :key="menu.name">
            <a-icon :type="menu.iconType" />
            <span>{{ menu.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="18">
        <Profile />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { importImg } from "@/ultils/importImg.js";
import { getDetailUser } from "@/ultils/requests/users/getInfo";
import Profile from "./Profile";
const menus = [
  { name: "Profile", icon: "user" },
  { name: "History buy C.coin", icon: "transaction" },
  { name: "History buy Item", icon: "shopping-cart" },
  { name: "Activity", icon: "enviroment" },
  { name: "Feedback", icon: "inbox" },
];
export default {
  data() {
    return {
      collapsed: false,
      menus: menus,
      menuSelected: "Profile",
    };
  },
  methods: {
    importImg(img) {
      return importImg[img];
    },
  },
  components: {
    Profile,
  },
  created() {
    const { userId } = this.$route.query;
    console.log(userId);
    getDetailUser(this, userId);
  },
};
</script>

<style src='./style.scss' lang='scss' scoped>
</style>