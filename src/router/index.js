import Vue from "vue";
import VueRouter from "vue-router";
import PageInfo from '../views/PageInfo.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
    {path:'/', component:Home, name:'home-page'},
    {path:'/page-info', component:PageInfo, name:'page-info'},

    
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
