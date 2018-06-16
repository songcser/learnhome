<template>
  <section class="aside">
    <v-card class="aside-card">
      <v-card-title primary-title>
        <axis-view />
      </v-card-title>
    </v-card>
    <v-card class="aside-card">
      <v-card-media class="box-card-image">
        <img class="" :src="require('@/assets/1510913616286.jpg')" />
      </v-card-media>
      <v-card-title primary-title>
        <h3 class="headline">主办方</h3>
      </v-card-title>
    </v-card>
    <v-card class="aside-card">
      <v-card-media>
        <img class="logo" :src="require('@/assets/logo/360che.jpg')" />
      </v-card-media>
      <v-card-title primary-title>
        <h3 class="headline">展台赞助商</h3>
      </v-card-title>
    </v-card>
  </section>
</template>
<script>
import AxisView from "@/views/meetings/AxisView"

export default {
  name: "app-aside",
  components: {
    AxisView,
  }
};
</script>
<style lang="scss" scoped>
.aside {
  margin: 90px 10px 20px 10px;
}

.aside-card {
  background: #fff;
  box-shadow: -5px 5px 10px #888888;
  margin-top: 20px;
}

.box-card-image {
  position: relative;
  transition: all 0.2s linear;
  img {
    width: 100%;
    height: 200px;
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.1, 1.1);
      filter: contrast(130%);
    }
  }
}
.logo {
  padding: 30px 30px 0px 30px;
  height: 150px;
}
</style>

