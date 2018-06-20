<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline mt-5">趋势报告</div>
        <v-divider class="my-3"></v-divider>
        <div class="subheader">全球演讲者阵容，分享国际柴油机行业现状和最热门领域的见解和实践案例。</div>
        <div class="headline mt-5">展示产品和技术</div>
        <v-divider class="my-3"></v-divider>
        <div class="subheader">中国未来柴油机峰会展览区将汇集多家国内外制造商，展示尖端技术，优良产品和设备，呼应大会。</div>
        <div class="headline mt-5">品牌</div>
        <v-divider class="my-3"></v-divider>
        <div class="subheader">近50家国内外媒体合作伙伴，其中多家主流媒体作为指定的新闻发布机构和社交媒体，SMS，EDM和其他自媒体将全面传播此次活动和客户。</div>
        <div class="headline mt-5">与活跃买家联系</div>
        <v-divider class="my-3"></v-divider>
        <div class="subheader">中国未来柴油机峰会每年将邀请来自发动机，汽车，商用车，工程机械，农机，特种车辆等应用行业的数百名采购副总，供应链管理总监，CTO和研发总监等行业专家和领袖。</div>
        <!-- <v-jumbotron :src="bg">
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
        </v-jumbotron> -->
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
.subheader {
  color: black;
  font-size: 20px;
}
</style>
