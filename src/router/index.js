import Vue from 'vue'
import VueRouter from 'vue-router'
import pageHome from "@/page/page-home";
import pageDetail from "@/page/page-detail";
import pageAddShopping from "@/page/page-add-shopping";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: pageHome
  },{
    path:'/detail',
    component: pageDetail
  },{
    path: '/addShopping',
    component:pageAddShopping
  }
]

const router = new VueRouter({
  routes
})

export default router
