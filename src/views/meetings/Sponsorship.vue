<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline mt-5">大会背景</div>
        <v-divider class="my-3"></v-divider>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div>柴油机热效率高，动力性强，能减少高达45%的温室气体排放，但是其燃烧产生的氮氧化物(NOx)和颗粒物（PM)却是PM2.5最大来源。占汽车保有量仅7.8%的柴油货车，排放了57.3%的NOx和77.8%的PM，是机动车污染防治的重中之重。故2018年国家各部委相继把重型货车的污染治理当作污染防治攻坚战的重点。</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
        <section>
          <v-parallax :src="require('@/assets/c427c.jpg')" height="150">
          </v-parallax>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div>按照最新政策，国六a排放限值方案将于2020年执行，国六b标准将于2023年实施——在这样严峻的形势下，无论是商用车、非道路移动机械、发动机生产企业，还是排放技术的专业提供商，都需要加大节能减排技术的研发更新，甚至提前在可替代能源和新能源的产品上进行布局，为更严格的排放法规做好准备。</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
        <section>
          <v-parallax :src="require('@/assets/c427c.jpg')" height="150">
          </v-parallax>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div>未来柴油机峰会系列2019，将立足于中国柴油发动机行业的实际情况，探讨业内人士比较关心的节能减排政策法规和最新的技术动向以及未来的发展；这里还将是一个您与政府高层、OEM制造商、行业领袖和专家进行国际项目交流的最佳平台。</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
        <div class="headline mt-5">云计算消费升级 为什么公有云巨头都在拓展MSP市场？</div>
        <v-divider class="my-3"></v-divider>
        <v-jumbotron :src="bg">
          <v-container fill-height>
            <v-layout align-center justify-space-between>
              <v-flex>
              </v-flex>
              <v-flex sm12 md10>
                <div class="headline mb-3 content">
                  数字经济的来袭，特别是云计算的深入发展，应用场景不断成熟，客户需求更是呈现井喷式爆发的态势。随着全新云端交付模式的形成，市场需求造就机遇，如此巨大的市场空间，属于MSP（云托管服务提供商）的时代已然到来。全球云计算大会聚集各大云服务提供商。
                </div>
              </v-flex>
              <v-flex>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>

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
</style>
