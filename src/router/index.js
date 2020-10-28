import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Users from "../views/Users.vue";
import News from "../views/News.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/users",
    name: "Home",
    component: Users,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
