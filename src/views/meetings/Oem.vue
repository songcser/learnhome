<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 md8>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">{{$t("oemDes")}}</div>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-card class="elevation-12" height="280px">
               <v-card-title primary-title>
                <a class="headline" href='http://www.xinhuanet.com/auto/2018-06/08/c_1122955610.htm' target='_blank'>印度收集柴油机尾气制墨水</a>
                <div class="subheader">2018-06-08</div>
                <div class="text">印度多名工程师开发一款设备，能够收集部分柴油机尾气，用于墨水生产，不仅减少污染，还创造经济效益。</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-12" height="280px">
               <v-card-title primary-title>
                <a class="headline" href="http://www.sohu.com/a/234014172_372603" target='_blank'>市场导向驱动柴油机发展 这四点不能忽视</a>
                <div class="subheader">2018-06-04</div>
                <div class="text">近两个月来，部分地区为打好“蓝天保卫战”，相继宣布将提前实施国六排放标准。</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-12" height="280px">
               <v-card-title primary-title>
                <a class="headline" href='http://mil.news.sina.com.cn/china/2018-06-04/doc-ihcmurvh2988319.shtml' target='_blank'>中国高压共轨市场几乎被美日垄断 国产柴油机很受伤 </a>
                <div class="subheader">2018-06-04</div>
                <div class="text">据科技日报6月3日报道，发动机是汽车最重要的零件之一，犹如人的心脏。而电控柴油高压共轨系统则相当于柴油发动机的“心脏”和“大脑”，其品质的好坏，严重影响发动机的使用。</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-12" height="280px">
               <v-card-title primary-title>
                <a class="headline" href='http://auto.qq.com/a/20180611/004089.htm' target='_blank'>通用高管：柴油机前景并不黯淡 氮氧化物排放可降至最低</a>
                <div class="subheader">2018-06-04</div>
                <div class="text">据外媒报道，当地时间6月6日，在欧洲汽车新闻大会的一场题为“柴油机的未来是什么”的小组讨论中，通用汽车公司动力总成总监Pierpaolo Antonioli称，欧洲柴油车销量暴跌并不预示着柴油发动机技术前景黯淡，包括柴油机在内的内燃机，在未来几年里仍能发挥作用。并引用新的证据表明氮氧化物的排放量可以降到绝对最低限度。</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-12" height="280px">
               <v-card-title primary-title>
                <a class="headline" href='http://www.sohu.com/a/234014174_372603' target='_blank'>国六、轻量化，2018年各家柴油机新品你必须知道</a>
                <div class="subheader">2018-06-04</div>
                <div class="text">市场决定导向，用户决定需求。这句话用在商用车领域再合适不过了。随着新法规的实施和排放升级脚步的加快，商用车市场发生了巨大变化。在最近行业提及最多的几个关键词如国六、大马力和轻量化等方面，各发动机企业已经做好相关产品和技术储备以满足市场需求。</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-12" height="280px">
               <v-card-title primary-title>
                <a class="title" href='https://www.enginetechnologyinternational.com/opinion/mark-gostick-ic-future.html' target='_blank'>Mark Gostick, COO of Camcon Automotive, on the future of the IC engine</a>
                <div class="subheader">2018-06-04</div>
                <div class="text">Whether it’s from the government or the mainstream press, attacks on the internal combustion engine are coming thick and fast. Believe the noise and you could be forgiven for thinking we’ll all be driving electric cars by 2020, with fossil fuel power consigned to history</div>
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
import AppAside from '@/views/meetings/AppAside'
export default {
  name: "oem",
  components: {
    AppAside
  }
};
</script>

<style scoped>
a {
  text-decoration:none
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>

