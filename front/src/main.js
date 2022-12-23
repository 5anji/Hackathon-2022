import { createApp } from "vue";
import "normalize.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/HomeComponent.vue";
import Menu from "./components/Menu.vue"
import "./style.css";
import {setDomain} from "./api/request";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path:"/Menu",
      name: "Menu",
      component: Menu,
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    return to.hash ? { el: to.hash } : { top: 0 };
  },
});
setDomain("/api")
createApp(App).use(router).mount("#app");
