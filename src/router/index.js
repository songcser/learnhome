import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index";
import Home from "@/views/Home";
import About from "@/views/About"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: "home",
          component: Home
        },
        {
            path: "about",
            component: About
        }
      ]
    }
  ]
});

export default router;
