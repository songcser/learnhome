import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index";
import Home from "@/views/Home";
import About from "@/views/About";
import AdvisoryBoard from "@/views/AdvisoryBoard";
import Events from "@/views/Events";
import MeetingLayout from "@/layout/meeting/index";
import MeetingHome from "@/views/meetings/Home";
import MeetingParticipant from "@/views/meetings/Participant";
import MeetingRegistration from "@/views/meetings/Registration";
import MeetingRegister from "@/views/meetings/Register";
import MeetingSponsorship from "@/views/meetings/Sponsorship";
import MeetingSponsorshipOpportunity from "@/views/meetings/SponsorshipOpportunity";
import MeetingFdes from "@/views/meetings/Fdes";
import MeetingAssociatedMedia from "@/views/meetings/AssociatedMedia";
import MeetingOem from "@/views/meetings/Oem";
import MeetingSignup from "@/views/meetings/Signup";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/desc/home",
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
      ]
    },
    {
      path: "/desc",
      component: MeetingLayout,
      redirect: "/desc/home",
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
          path: "registration",
          component: MeetingRegistration
        },
        {
          path: "register",
          component: MeetingRegister
        },
        {
          path: "sponsorship",
          component: MeetingSponsorship
        },
        {
          path: "sponsorship-opportunity",
          component: MeetingSponsorshipOpportunity
        },
        {
          path: "fdes",
          component: MeetingFdes
        },
        {
          path: "associated-media",
          component: MeetingAssociatedMedia
        },
        {
          path: "oem",
          component: MeetingOem
        },
        {
          path: "signup",
          component: MeetingSignup
        }
      ]
    }
  ]
});

export default router;
