<template>
  <v-container>
    <div class="headline mt-5">政府&协会</div>
    <v-divider class="my-3"></v-divider>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-list subheader>
          <template v-for="(item, index) in zhengfuxiehui">
            <v-list-tile v-if="index%2 == 0" :key="index">
              <v-list-tile-action>
                <v-icon>send</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="hotlight">
                {{item}}
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
      <v-flex xs12 sm6>
        <v-list subheader>
          <template v-for="(item, index) in zhengfuxiehui">
            <v-list-tile v-if="index%2 == 1" :key="index">
              <v-list-tile-action>
                <v-icon>send</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="hotlight">
                {{item}}
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <div class="headline mt-5">行业领袖</div>
    <v-divider class="my-3"></v-divider>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-list subheader>
          <template v-for="(item, index) in hangyelingxiu">
            <v-list-tile v-if="index%2 == 0" :key="index">
              <v-list-tile-action>
                <v-icon>send</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="hotlight">
                {{item}}
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
      <v-flex xs12 sm6>
        <v-list subheader>
          <template v-for="(item, index) in hangyelingxiu">
            <v-list-tile v-if="index%2 == 1" :key="index">
              <v-list-tile-action>
                <v-icon>send</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="hotlight">
                {{item}}
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "participant",
  data() {
    return {
      zhengfuxiehui: [
        "生态环境部",
        "济南汽车检测中心",
        "中国环境科学研究院",
        "美国环境保护署(EPA)",
        "美国卡车和发动机制造商协会(EMA)",
        "欧洲内燃机制造商协会(EUROMOT)",
        "印度柴油机制造商协会",
        "印度尼西亚汽车工业协会"
      ],
      hangyelingxiu: [
        "康明斯",
        "菲亚特动力科技",
        "玉柴机器股份有限公司",
        "潍柴动力股份有限公司",
        "一汽锡柴",
        "一汽大众",
        "标致雪铁龙",
        "沃尔沃卡车",
        "东风商用车",
        "奔驰卡车",
        "曼恩卡车",
        "卡特彼勒",
        "三菱重工",
        "三一重工",
        "徐工",
        "约翰迪尔",
        "一拖",
        "中石油",
        "中石化",
        "霍尼韦尔交通系统集团",
        "西南研究院",
        "博世",
        "罗兰贝格"
        ]
    };
  }
};
</script>
<style scoped>
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
</style>
