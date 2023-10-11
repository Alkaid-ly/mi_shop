import Vue from 'vue'
import VueRouter from 'vue-router'
import pageHome from "@/page/page-home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: pageHome
  },
]

const router = new VueRouter({
  routes
})

export default router
