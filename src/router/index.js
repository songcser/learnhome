import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index";
import Home from "@/views/Home";
import About from "@/views/About";
import AdvisoryBoard from "@/views/AdvisoryBoard";
import Events from "@/views/Events";
import MeetingLayout from "@/layout/meeting/index";
import MeetingHome from "@/views/meetings/Home";
import MeetingParticipant from "@/views/meetings/Participant"
import MeetingRegistration from "@/views/meetings/Registration"
import MeetingRegister from "@/views/meetings/Register"

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "home",
      children: [
        {
          path: "home",
          component: Home
        },
        {
          path: "about",
          component: About
        },
        {
          path: "advisory",
          component: AdvisoryBoard
        },
        {
          path: "events",
          component: Events
        }
      ],
    },{
        path: "/meeting",
        component: MeetingLayout,
        children: [
            {
                path: "home",
                component: MeetingHome
            },
            {
              path: "participant",
              component: MeetingParticipant
            },
            {
              path: 'registration',
              component: MeetingRegistration
            },
            {
              path: 'register',
              component: MeetingRegister
            }
        ]
    }
  ]
});

export default router;
