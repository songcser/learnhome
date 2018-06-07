<template>
  <section>
    <v-carousel hide-controls transition="fade">
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
    <v-container grid-list-lg>
      <div class="headline">大会背景</div>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card color="cyan darken-2" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div>柴油机热效率高，动力性强，能减少高达45%的温室气体排放，但是其燃烧产生的氮氧化物(NOx)和颗粒物（PM)却是PM2.5最大来源。占汽车保有量仅7.8%的柴油货车，排放了57.3%的NOx和77.8%的PM，是机动车污染防治的重中之重。故2018年国家各部委相继把重型货车的污染治理当作污染防治攻坚战的重点。</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media :src="beiying1" height="125px" contain></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="teal darken-2" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div>按照最新政策，国六a排放限值方案将于2020年执行，国六b标准将于2023年实施——在这样严峻的形势下，无论是商用车、非道路移动机械、发动机生产企业，还是排放技术的专业提供商，都需要加大节能减排技术的研发更新，甚至提前在可替代能源和新能源的产品上进行布局，为更严格的排放法规做好准备。</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media :src="beiying2" height="125px" contain></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="green darken-2" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div>未来柴油机峰会系列2019，将立足于中国柴油发动机行业的实际情况，探讨业内人士比较关心的节能减排政策法规和最新的技术动向以及未来的发展；这里还将是一个您与政府高层、OEM制造商、行业领袖和专家进行国际项目交流的最佳平台。</div>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media :src="beiying3" height="125px" contain></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
      <div mt-5 class="headline">峰会亮点</div>
      <v-divider class="my-3"></v-divider>
      <v-layout row wrap>
        <v-flex xs12 sm8>
          <v-list subheader>
            <template v-for="(item, index) in liangdians">
              <v-list-tile :key="index">
                <v-list-tile-action>
                  <v-icon>send</v-icon>
                </v-list-tile-action>
                <v-list-tile-content class="listcontent">
                  {{item}}
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
console.log("dddd");
export default {
  name: "home",
  data() {
    return {
      items: [
        {
          src: require("@/assets/2611.jpg")
        },
        {
          src: require("@/assets/c427c.jpg")
        },
        {
          src: require("@/assets/69a4.jpg")
        }
      ],
      liangdians: [
        "道路柴油车“国六”标准剖析及最新进展",
        "非道路移动机械“国四”标准和技术路线解读",
        "国六柴油品质升级与匹配",
        "全球各主要柴油车辆消费国的市场现状及未来趋势",
        "NAFTA，欧盟，巴西，印度，东南亚等国家和地区的柴油市场聚焦及立法进程",
        "满足国六标准的清洁柴油机技术",
        "高效SCR系统",
        "车用尿素技术及其供应和配送的最佳方案",
        "EGR发动机的可靠性和耐久性研究",
        "DPF被动再生技术",
        "选择还是放弃—各种不同的后处理技术路线的比较与融合",
        "高效先进的缸内燃烧技术",
        "电控高压共轨燃油喷射系统的技术挑战",
        "中重型商用车用柴油机的高效涡轮增压技术",
        "国家标准的不断提高，发动机热管理未来的技术要求和发展趋势",
        "重卡柴油机未来技术升级",
        "商用车动力总成节能技术效果及趋势",
        "非道路欧五柴油机技术及未来工程机械的发展趋势",
        "非道路柴电混合动力系统设计与控制策略研究",
        "农机技术发展趋势及满足国四标准的柴油机技术研发",
        "关于未来，何去何从？——柴油机的明天"
      ],
      beiying1: require("@/assets/5a02.jpg"),
      beiying2: require("@/assets/a75d.jpg"),
      beiying3: require("@/assets/w640.jpg")
    };
  }
};
</script>
<style scoped>
.headline {
  margin-top: 20px;
}
.list {
  background: none;
}
.listcontent {
  transition: transform 0.4s linear;
}
.listcontent:hover {
  color: #ea1d5d;
  transform: translateX(10px);
  -moz－transform: translateX(10px);
  -webkit-transform: translateX(10px);
  -o-transform: translateX(10px);
  -ms-transform: translateX(10px);
}
</style>
