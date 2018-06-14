<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8>
    <div class="headline mt-5">合作媒体</div>
    <v-divider class="my-3"></v-divider>
    <v-layout row wrap >
      <v-flex xs12 sm6 md4 v-for="(item, index) in logos" :key="index">
        <v-card elevation-12>
          <v-card-media>
            <img :src="item.src" height="100px" />
          </v-card-media>
          <v-card-title>
            <div class="headline mb-0">{{item.title}}</div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
      </v-flex>
      <v-flex xs4>
        <app-aside />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AppAside from "@/views/meetings/AppAside";
export default {
  name: "associated-media",
  components: {
    AppAside,
  },
  data () {
    return {
      logos: [
        {
          title: "卡车之家",
          src: require("@/assets/logo/360che.jpg")
        },
        {
          title: "铁甲网",
          src: require("@/assets/logo/cehome.png")
        },
        {
          title: "中国卡车网",
          src: require("@/assets/logo/chinatruck.jpg")
        },
        {
          title: "工程机械中国网",
          src: require("@/assets/logo/cmsino.jpg")
        },
        {
          title: "今日工程机械",
          src: require("@/assets/logo/cmtoday.png")
        },
        {
          title: "商车网",
          src: require("@/assets/logo/cn357.png")
        },
        {
          title: "商用车新网",
          src: require("@/assets/logo/cvnews.png")
        },
        {
          title: "Diesel Progress Magazine",
          src: require("@/assets/logo/dieselprogress.png")
        },
        {
          title: "Fuel Market News",
          src: require("@/assets/logo/fuelsmarketnews.png")
        },
        {
          title: "慧聪工程机械网",
          src: require("@/assets/logo/hc360.jpg")
        },
        {
          title: "中国路面机械网",
          src: require("@/assets/logo/lmjx.png")
        },
        {
          title: "第一商用车网",
          src: require("@/assets/logo/cvworld.png")
        },
        {
          title: "中国润滑油网",
          src: require("@/assets/logo/lubecn.gif")
        },
        {
          title: "农机360网",
          src: require("@/assets/logo/nongji360.jpg")
        },
        {
          title: "农机1688网",
          src: require("@/assets/logo/nongji1688.png")
        },
        {
          title: "农机通",
          src: require("@/assets/logo/nongjitong.png")
        },
        {
          title: "中国农机网",
          src: require("@/assets/logo/nongjx.png")
        },
        {
          title: "OEM Off-Highway",
          src: require("@/assets/logo/oemoffhighway.png")
        },
        {
          title: "商用车在线",
          src: require("@/assets/logo/oosyoo.jpg")
        },
        {
          title: "腾讯汽车",
          src: require("@/assets/logo/qq.jpg")
        },
        {
          title: "中国路面机械网",
          src: require("@/assets/logo/sinofarm.gif")
        },
        {
          title: "搜狐汽车",
          src: require("@/assets/logo/sohu.png")
        },
        {
          title: "网易汽车",
          src: require("@/assets/logo/wangyi.jpg")
        },
      ]
    }
  }
};
</script>
<style scoped>
img {
  padding: 20px
}
</style>
