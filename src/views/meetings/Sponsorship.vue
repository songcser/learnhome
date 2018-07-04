<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 md8>
        <div class="headline mt-5">{{$t('meeting.trendReport.name')}}</div>
        <v-divider class="my-3"></v-divider>
        <div class="text">{{$t('meeting.trendReport.text')}}</div>
        <div class="headline mt-5">{{$t('meeting.dpat.name')}}</div>
        <v-divider class="my-3"></v-divider>
        <div class="text">{{$t('meeting.dpat.text')}}</div>
        <div class="headline mt-5">{{$t('meeting.branding.name')}}</div>
        <v-divider class="my-3"></v-divider>
        <div class="text">{{$t('meeting.branding.text')}}</div>
        <div class="headline mt-5">{{$t('meeting.activeBuyers.name')}}</div>
        <v-divider class="my-3"></v-divider>
        <div class="text">{{$t('meeting.activeBuyers.text')}}</div>
      </v-flex>
      <v-flex xs12 md4 hidden-xs-only>
        <app-aside />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AppAside from "@/views/meetings/AppAside";
export default {
  name: "sponsorship",
  components: {
    AppAside
  },
  data() {
    return {
      bg: require("@/assets/1512.jpg")
    };
  }
};
</script>
<style scoped>
.list {
  background: none;
}
.text {
  color: black;
  font-size: 20px;
}
</style>
