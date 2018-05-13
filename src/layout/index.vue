<template>
    <v-app>
        <app-header />
        <v-content>
            <router-view />
        </v-content>
        <app-footer />
    </v-app>
</template>

<script>
import AppHeader from "@/views/AppHeader";
import AppFooter from "@/views/AppFooter";
export default {
  name: "layout",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>