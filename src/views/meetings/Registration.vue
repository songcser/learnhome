<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8>
        <v-divider class="my-3"></v-divider>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">柴油机热效率高，动力性强，能减少高达45%的温室气体排放，但是其燃烧产生的氮氧化物(NOx)和颗粒物（PM)却是PM2.5最大来源。占汽车保有量仅7.8%的柴油货车，排放了57.3%的NOx和77.8%的PM，是机动车污染防治的重中之重。故2018年国家各部委相继把重型货车的污染治理当作污染防治攻坚战的重点。</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
        <section>
          <v-parallax :src="require('@/assets/jingxuan/huoche2.png')" height="150">
          </v-parallax>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">按照最新政策，国六a排放限值方案将于2020年执行，国六b标准将于2023年实施——在这样严峻的形势下，无论是商用车、非道路移动机械、发动机生产企业，还是排放技术的专业提供商，都需要加大节能减排技术的研发更新，甚至提前在可替代能源和新能源的产品上进行布局，为更严格的排放法规做好准备。</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
        <section>
          <v-parallax :src="require('@/assets/jingxuan/huoche2.png')" height="150">
          </v-parallax>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">未来柴油机峰会系列2019，将立足于中国柴油发动机行业的实际情况，探讨业内人士比较关心的节能减排政策法规和最新的技术动向以及未来的发展；这里还将是一个您与政府高层、OEM制造商、行业领袖和专家进行国际项目交流的最佳平台。</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
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
  name: "registration",
  components: {
    AppAside
  },
  data() {
    return {
      bg: require("@/assets/a75d.jpg"),
      jihui: [
        "绝佳的培训机会，深度探索云技术",
        "聆听行业领袖的“干货”分享，掌握业界最新趋势",
        "与国际顶尖企业汇聚一堂，了解新一代云计算技术产品",
        "与同行沟通交流，建立并强化专业联系",
        "接触既存的云计算供应商，会见特定的企业或产"
      ]
    };
  }
};
</script>
<style scoped>
.content {
  margin: 0 auto;
  padding: 2em;
  background: hsla(0, 0%, 100%, 0.7) border-box;
  overflow: hidden;
  border-radius: 0.3em;
  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.3) inset,
    0 0.5em 1em rgba(0, 0, 0, 0.6);
  text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.3);
}
.content::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: -30px;
  z-index: -1;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}
.list {
  background: none;
}
.hotlight {
  transition: transform 0.4s linear;
}
.hotlight:hover {
  color: #ea1d5d;
  transform: translateX(10px);
  -moz－transform: translateX(10px);
  -webkit-transform: translateX(10px);
  -o-transform: translateX(10px);
  -ms-transform: translateX(10px);
}
.headline {
  font-size: 20px !important
}
</style>

