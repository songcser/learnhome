<template>
  <v-app>
    <app-header />
    <div>ddddd</div>
    <v-content>
      <router-view />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppHeader from "@/views/meetings/AppHeader";
import AppFooter from "@/views/meetings/AppFooter";
console.log("ffff");
export default {
  name: "layout",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
