import {createApp} from "vue";
import "normalize.css";
import App from "./App.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "./components/HomeComponent.vue";
import Menu from "./components/Menu.vue"
import "./style.css";
import {setDomain} from "./api/request";
import OrderComponent from "./components/OrderComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";
import {createPinia} from 'pinia';

const pinia = createPinia();
const app = createApp(App)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/Menu/:cookId",
            name: "Menu",
            component: Menu,
        },
        {
            path: "/MenuComponent",
            name: "MenuComponent",
            component: MenuComponent,
        },
        {
            path: "/OrderComponent",
            name: "OrderComponent",
            component: OrderComponent,
        }

    ],
    scrollBehavior(to, from, savedPosition) {
        return to.hash ? {el: to.hash} : {top: 0};
    },
});
setDomain("/api")
app.use(pinia)
app.use(router).mount("#app");
