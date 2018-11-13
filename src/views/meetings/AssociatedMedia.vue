<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 md8>
        <v-divider class="my-3"></v-divider>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 v-for="(item, index) in logos" :key="index">
            <v-card elevation-12>
              <v-card-media>
                <a :href="item.url" target="_blank">
                <img :src="item.src" height="130px" />
                </a>
              </v-card-media>
              <v-card-title>
                <div class="headline mb-0">
                  {{item.title}}
                </div>
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
</template>
<script>
import AppAside from "@/views/meetings/AppAside";
export default {
  name: "associated-media",
  components: {
    AppAside
  },
  data() {
    return {
      logos: [
        {
          title: "卡车之家",
          src: require("@/assets/logo/360che.jpg"),
          url: '',
        },
        {
          title: "DieselNet",
          src: require('@/assets/logo/dieselnet.jpg'),
          url: '',
        },
        {
          title: "Diesel Progress Magazine",
          src: require("@/assets/logo/dieselprogress.png"),
          url: '',
        },
        {
          title: "OEM Off-Highway",
          src: require("@/assets/logo/oemoffhighway.png"),
          url: '',
        },
        {
          title: "铁甲网",
          src: require("@/assets/logo/cehome.png"),
          url: '',
        },
        {
          title: "中国卡车网",
          src: require("@/assets/logo/chinatruck.jpg"),
          url: '',
        },
        {
          title: "工程机械中国网",
          src: require("@/assets/logo/cmsino.jpg"),
          url: '',
        },
        {
          title: "今日工程机械",
          src: require("@/assets/logo/cmtoday.png"),
          url: '',
        },
        {
          title: "商车网",
          src: require("@/assets/logo/cn357.png"),
          url: 'http://www.cn357.com/',
        },
        {
          title: "商用车新网",
          src: require("@/assets/logo/cvnews.png")
        },
        {
          title: "Fuel Market News",
          src: require("@/assets/logo/fuelsmarketnews.png"),
          url: '',
        },
        {
          title: "慧聪工程机械网",
          src: require("@/assets/logo/hc360.jpg"),
          url: 'https://www.hc360.com/',
        },
        {
          title: "第一商用车网",
          src: require("@/assets/logo/cvworld.png"),
          url: '',
        },
        {
          title: "中国润滑油网",
          src: require("@/assets/logo/lubecn.gif"),
          url: ''
        },
        {
          title: "农机360网",
          src: require("@/assets/logo/nongji360.jpg"),
          url: '',
        },
        {
          title: "农机1688网",
          src: require("@/assets/logo/nongji1688.png"),
          url: 'http://www.nongji1688.com/',
        },
        {
          title: "农机通",
          src: require("@/assets/logo/nongjitong.png"),
          url: 'https://www.nongjitong.com/',
        },
        {
          title: "中国农机网",
          src: require("@/assets/logo/nongjx.png"),
          url: 'http://www.nongjx.com/',
        },
        {
          title: "商用车在线",
          src: require("@/assets/logo/oosyoo.jpg"),
          url: '',
        },
        {
          title: "腾讯汽车",
          src: require("@/assets/logo/qq.jpg"),
          url: ''
        },
        {
          title: "中国农业机械网",
          src: require("@/assets/logo/sinofarm.gif"),
          url: '',
        },
        {
          title: "北垦农机网",
          src: require("@/assets/logo/bigam.jpg"),
          url: 'http://www.big-am.com/',
        },
        {
          title: "搜狐汽车",
          src: require("@/assets/logo/sohu.png"),
          url: '',
        },
        {
          title: "网易汽车",
          src: require("@/assets/logo/wangyi.jpg"),
          url: '',
        },
        {
          title: "中国卡车信息网",
          src: require("@/assets/logo/360trucks.jpg"),
          url: 'http://www.360trucks.cn/',
        },
        {
          title: "汽配工业网",
          src: require("@/assets/logo/zgqpgy.jpg"),
          url: 'http://www.zgqpgy.com/news/ex.aspx',
        },
        {
          title: "五湖工程机械网",
          src: require("@/assets/logo/wudahu.jpg"),
          url: 'http://www.91cm.com/',
        },
        {
          title: "盘古机械网",
          src: require("@/assets/logo/pgjxo.png"),
          url: 'http://www.pgjxo.com/',
        },
        {
          title: "工程机械在线",
          src: require("@/assets/logo/cmol.jpg"),
          url: 'http://www.cmol.com/',
        },
        {
          title: "中国润滑油机械网",
          src: require("@/assets/logo/sinolub.jpg"),
          url: 'https://www.sinolub.com/',
        },
        {
          title: "中国客车网",
          src: require("@/assets/logo/chinabuses.jpg"),
          url: 'http://www.chinabuses.com/',
        },
        {
          title: "提加商用车",
          src: require("@/assets/logo/tijia.png"),
          url: 'https://www.cntplus.com/',
        },
        {
          title: "汽车纵横",
          src: require("@/assets/logo/autoreview.jpg"),
          url: ''
        },
        {
          title: "中国皮卡网",
          src: require("@/assets/logo/cnpickups.jpg"),
          url: 'http://www.cnpickups.com/',
        },
        {
          title: "马斯客",
          src: require("@/assets/logo/cnmaiske.jpg"),
          url: 'https://www.cnmasike.com/',
        },
        {
          title: "方得网",
          src: require("@/assets/logo/find800.jpg"),
          url: 'http://www.find800.cn/',
        },
        {
          title: "工机商城",
          src: require("@/assets/logo/gj1688.jpg"),
          url: 'http://www.wjjw.cn'
        },
        {
          title: "中国装载机网",
          src: require("@/assets/logo/zzj168.jpg"),
          url: 'https://www.zzj168.com/news/',
        },
        {
          title: "中国挖掘机网",
          src: require("@/assets/logo/wjjw.jpg"),
          url: 'http://www.gj1688.com',
        },
        {
          title: "造车网",
          src: require("@/assets/logo/zaoche168.jpg"),
          url: 'http://www.zaoche168.com/',
        },
        {
          title: "车典网",
          src: require("@/assets/logo/autoworld.jpg"),
          url: 'http://www.autoworld.net.cn',
        },
        {
          title: "卡车之友",
          src: require("@/assets/logo/ecv360.jpg"),
          url: 'http://www.ecv360.com/',
        },
        {
          title: "客车联盟网",
          src: require("@/assets/logo/cnbuses.jpg"),
          url: 'http://www.cnbuses.com/',
        },
        {
          title: "中国汽车产业网",
          src: require("@/assets/logo/qccyw.jpg"),
          url: 'http://www.qccyw.com/',
        },
        {
          title: "商用车之家",
          src: require("@/assets/logo/cvchome.png"),
          url: 'http://www.cvchome.com/',
        },
        {
          title: "F + L",
          src: require("@/assets/logo/flasia.jpg"),
          url: 'https://www.fuelsandlubes.com/',
        }
      ]
    };
  }
};
</script>
<style scoped>
img {
  padding: 20px;
}
</style>
