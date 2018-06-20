<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline mt-5">大会新闻</div>
        <v-divider class="my-3"></v-divider>
        <div class="title mb-3">我们将邀请超过总参会嘉宾40%的OEM和发动机厂商与会共襄盛举，畅谈未来!</div>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-card class="elevation-12">
               <v-card-title primary-title>
                <a class="headline" href='http://www.xinhuanet.com/auto/2018-06/08/c_1122955610.htm' target='_blank'>印度收集柴油机尾气制墨水</a>
                <div class="subheader">2018-06-08</div>
                <div>印度多名工程师开发一款设备，能够收集部分柴油机尾气，用于墨水生产，不仅减少污染，还创造经济效益。</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-12">
               <v-card-title primary-title>
                <a class="headline" href="http://www.sohu.com/a/234014172_372603" target='_blank'>市场导向驱动柴油机发展 这四点不能忽视</a>
                <div class="subheader">2018-06-04</div>
                <div>近两个月来，部分地区为打好“蓝天保卫战”，相继宣布将提前实施国六排放标准。</div>
                <div>深圳是最先响应的城市。3月29日，《深圳市人居环境委员会深圳市公安局交通警察局关于轻型汽车执行第六阶段国家机动车大气污染物排放标准的通告（征求意见稿）》发布，提出从2018年7月1日起，深圳市销售、注册和转入的轻型柴油车应当符合国六标准；2019年1月1日起，销售、注册和转入的轻型汽油车应当符合国六标准。</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="elevation-12">
               <v-card-title primary-title>
                <a class="headline" href='http://mil.news.sina.com.cn/china/2018-06-04/doc-ihcmurvh2988319.shtml' target='_blank'>中国高压共轨市场几乎被美日垄断 国产柴油机很受伤 </a>
                <div class="subheader">2018-06-04</div>
                <div>据科技日报6月3日报道，发动机是汽车最重要的零件之一，犹如人的心脏。而电控柴油高压共轨系统则相当于柴油发动机的“心脏”和“大脑”，其品质的好坏，严重影响发动机的使用。</div>
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
</style>

