<template>
  <section>
    <v-carousel hide-controls transition="fade" >
      <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i" height="400px"></v-carousel-item>
    </v-carousel>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs8>
          <word-mask />
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
            <v-flex xs12 sm4>
              <v-card elevation-24>
                <v-card-media height="200px">
                  <v-progress-circular :size="200" :width="25" :rotate="-90" :value="timestart" color="primary">
                    {{ timetext }}
                  </v-progress-circular>
                </v-card-media>
                <v-card-title primary-title>
                  <h3 class="headline mb-3">赞助商</h3>
                  <vue-seamless-scroll :data="listData" class="seamless-warp">
                    <ul>
                      <li class="item" v-for="(item, index) in listData" :key="index">
                        <img class="center" :src="item.src" height="50px" />
                      </li>
                    </ul>
                  </vue-seamless-scroll>
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
  </section>
</template>
<script>
import VueSeamlessScroll from "vue-seamless-scroll";

import AppAside from '@/views/meetings/AppAside'
import WordMask from '@/views/meetings/WordMask'
export default {
  name: "home",
  components: {
    VueSeamlessScroll,
    AppAside,
    WordMask,
  },
  data() {
    return {
      items: [
        {
          src: require("@/assets/MAT_0592.jpg")
        },
        {
          src: require("@/assets/0921.jpg")
        },
        {
          src: require("@/assets/b8367.jpg")
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
      beiying3: require("@/assets/w640.jpg"),
      timestart: 0,
      timetext: "倒计时",
      listData: [
        {
          title: "无缝滚动第一行无缝滚动第一行",
          src: require("@/assets/logo/360che.jpg")
        },
        {
          title: "无缝滚动第二行无缝滚动第二行",
          src: require("@/assets/logo/cehome.png")
        },
        {
          title: "无缝滚动第三行无缝滚动第三行",
          src: require("@/assets/logo/chinatruck.jpg")
        },
        {
          title: "无缝滚动第四行无缝滚动第四行",
          src: require("@/assets/logo/cmsino.jpg")
        },
        {
          title: "无缝滚动第五行无缝滚动第五行",
          src: require("@/assets/logo/cmtoday.png")
        },
        {
          title: "无缝滚动第六行无缝滚动第六行",
          src: require("@/assets/logo/cn357.png")
        },
        {
          title: "无缝滚动第七行无缝滚动第七行",
          src: require("@/assets/logo/cvnews.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/dieselprogress.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/fuelsmarketnews.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/hc360.jpg")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/lmjx.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/cvworld.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/lubecn.gif")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/nongji360.jpg")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/nongji1688.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/nongjitong.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/nongjx.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/oemoffhighway.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/oosyoo.jpg")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/qq.jpg")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/sinofarm.gif")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/sohu.png")
        },
        {
          title: "无缝滚动第九行无缝滚动第九行",
          src: require("@/assets/logo/wangyi.jpg")
        }
      ]
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.timestart >= 100) {
        return (this.timestart = 0);
      }
      this.timestart += 1.67;
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.headline {
  margin-top: 20px;
}
.list {
  background: none;
  border-right: 3px solid grey;
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
.progress-circular {
  margin: auto;
}
.card {
  background: none;
  box-shadow: none;
}
.seamless-warp {
  height: 700px;
  overflow: hidden;
}
.center {
  width: 80%;
}
.item {
  width: 100%;
  margin: 10px;
  border-bottom: 1px solid grey;
  text-align: center;
}

</style>
