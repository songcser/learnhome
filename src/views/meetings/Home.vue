<template>
  <section>
    <v-carousel lazy hide-controls transition="fade" style="height:400px">
      <v-carousel-item style="height:500px" v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 md8>
          <!-- <word-mask /> -->
          <v-layout row wrap class="mt-3">
            <v-flex xs6 md3>
              <div class="icon-list">
                <div>
                  <img :src="require('@/assets/list01.png')" width="160px" height="160px"/>
                </div>
                <div>
                  <p>300</p>
                  <p>{{$t('meeting.idm')}}</p>
                </div>
              </div>
            </v-flex>
            <v-flex xs6 md3>
              <div class="icon-list">
                <div>
                  <img :src="require('@/assets/list02.png')" width="160px" height="160px"/>
                </div>
                <div>
                  <p>150</p>
                  <p>{{$t('meeting.premiumPlayers')}}</p>
                </div>
              </div>
            </v-flex>
            <v-flex xs6 md3>
              <div class="icon-list">
                <div>
                  <img :src="require('@/assets/list03.png')" width="160px" height="160px"/>
                </div>
                <div>
                  <p>100</p>
                  <p style="font-size: 14px; ">{{$t('meeting.oem')}}</p>
                </div>
              </div>
            </v-flex>
            <v-flex xs6 md3>
               <div class="icon-list">
                <div>
                  <img :src="require('@/assets/list04.png')" width="160px" height="160px"/>
                </div>
                <div>
                  <p>40</p>
                  <p>{{$t('meeting.mediaPartners')}}</p>
                </div>
              </div>
            </v-flex>
          </v-layout>
          <div mt-5 class="headline">{{$t('meeting.summitHighlights')}}</div>
          <v-divider class="my-3"></v-divider>
          <v-layout row wrap>
            <v-flex xs12 sm8>
              <v-list two-line>
                <template v-for="(item, index) in liangdians">
                  <v-list-tile class="list-tile" :key="index">
                    <v-list-tile-action>
                      <v-icon>send</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content class="listcontent">
                      {{$t("liangdians.l"+(index+1))}}
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card elevation-24>
                <v-card-media height="200px">
                  <v-progress-circular style="text-align: center" :size="200" :width="25" :rotate="-90" :value="timestart" color="primary">
                    {{ $t('meeting.countdown') + ' ' + timetext + ' ' + $t('meeting.day') }}
                  </v-progress-circular>
                </v-card-media>
                <v-card-title primary-title>
                  <h3 class="headline mb-3">{{$t('meeting.photoGallery')}}</h3>
                  <vue-seamless-scroll :data="listData" class="seamless-warp">
                    <ul>
                      <li class="item" v-for="(item, index) in listData" :key="index">
                        <img class="center" :src="item.src" height="120px" />
                      </li>
                    </ul>
                  </vue-seamless-scroll>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md4 hidden-xs-only>
          <app-aside />
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
import VueSeamlessScroll from "vue-seamless-scroll";

import AppAside from "@/views/meetings/AppAside";
import WordMask from "@/views/meetings/WordMask";
export default {
  name: "home",
  components: {
    VueSeamlessScroll,
    AppAside,
    WordMask
  },
  data() {
    return {
      items: [
        {
          src: require("@/assets/0921.jpg")
        },
        {
          src: require("@/assets/jingxuan/fadongji5.png")
        },
        {
          src: require("@/assets/jingxuan/huosai1.png")
        },
        {
          src: require("@/assets/jingxuan/huoche3.png")
        },
        {
          src: require("@/assets/jingxuan/zhangzaiji.png")
        },
        {
          src: require("@/assets/86694.jpg")
        }
      ],
      liangdians: [
        this.$t("liangdians.l1"),
        this.$t("liangdians.l2"),
        this.$t("liangdians.l3"),
        this.$t("liangdians.l4"),
        this.$t("liangdians.l5"),
        this.$t("liangdians.l6"),
        this.$t("liangdians.l7"),
        this.$t("liangdians.l8"),
        this.$t("liangdians.l9"),
        this.$t("liangdians.l10"),
        this.$t("liangdians.l11"),
        this.$t("liangdians.l12"),
        this.$t("liangdians.l13"),
        this.$t("liangdians.l14"),
        this.$t("liangdians.l15"),
        this.$t("liangdians.l16"),
        this.$t("liangdians.l17"),
        this.$t("liangdians.l18"),
        this.$t("liangdians.l19"),
        this.$t("liangdians.l20"),
        this.$t("liangdians.l21"),
      ],
      beiying1: require("@/assets/5a02.jpg"),
      beiying2: require("@/assets/a75d.jpg"),
      beiying3: require("@/assets/w640.jpg"),
      timestart: 0,
      listData: [
        {
          src: require("@/assets/xianchang/1.jpg")
        },
        {
          src: require("@/assets/xianchang/2.jpg")
        },
        {
          src: require("@/assets/xianchang/3.jpg")
        },
        {
          src: require("@/assets/xianchang/4.jpg")
        },
        {
          src: require("@/assets/xianchang/5.jpg")
        },
        {
          src: require("@/assets/xianchang/6.jpg")
        },
        {
          src: require("@/assets/xianchang/7.jpg")
        },
        {
          src: require("@/assets/xianchang/8.jpg")
        },
        {
          src: require("@/assets/xianchang/9.jpg")
        },
        {
          src: require("@/assets/xianchang/10.jpg")
        },
        {
          src: require("@/assets/xianchang/11.jpg")
        },
        {
          src: require("@/assets/xianchang/12.jpg")
        },
        {
          src: require("@/assets/xianchang/13.jpg")
        },
        {
          src: require("@/assets/xianchang/14.jpg")
        }
      ]
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  computed: {
    timetext () {
      let now = new Date()
      let dt = new Date(2019, 4, 10)
      let intervalMsec = dt - Date.now()
      let day = parseInt(intervalMsec / 1000 / 3600 / 24)
      return day
    }
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
  line-height: 25px;
}
.listcontent {
  height: 65px;
  font-size: 18px;
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
  height: 900px;
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
.icon-list {
  position: relative;
  width: 160px;
  text-align: center;
  line-height: 20px;
}
.icon-list div:nth-child(2) {
  position: absolute;
  top: 50px;
  left: 45px;
  width: 100px;
}
.icon-list p {
  font-size: 18px;
  margin: 0;
  padding: 0;
  font-weight: bold;
  height: 30px;
  text-align: center;
}
.list-tile {
  margin: 0 !important;
}
</style>
