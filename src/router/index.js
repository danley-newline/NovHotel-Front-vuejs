import Vue from "vue";
import VueRouter from "vue-router";
import DetailPage from '../views/DetailPage.vue'
import Home from '../views/Home.vue'
import ReservPage from '../views/ReservPage.vue'


Vue.use(VueRouter);

const routes = [
    {path:'/', component:Home, name:'home-page'},
    {path:'/details-chambre', component:DetailPage, name:'detail-page'},
    {path:'/reservation', component:ReservPage, name:'reserv-page'},

    
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
