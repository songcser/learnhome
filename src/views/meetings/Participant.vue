<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline mt-5">{{$t('meeting.delegates')}}</div>
        <v-divider class="my-3"></v-divider>
          <v-list>
            <template  v-for="(item, index) in hangye">
            <v-list-tile :key="index" class="progress-list">
              <div class="progress-text">{{$t("hangye.text"+(index+1))}}</div>
               <v-progress-linear :value="item.value" height="15" :color="item.color"></v-progress-linear>
            </v-list-tile>
            </template>
          </v-list>
        <div class="headline mt-5">{{$t('meeting.ga.name')}}</div>
        <v-divider class="my-3"></v-divider>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-list subheader two-line>
              <template v-for="(item, index) in zhengfuxiehui">
                <v-list-tile v-if="index%2 == 0" :key="index">
                  <v-list-tile-action>
                    <v-icon>send</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content class="hotlight">
                    {{$t('meeting.ga.l' + index)}}
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-flex>
          <v-flex xs12 sm6>
            <v-list subheader two-line>
              <template v-for="(item, index) in zhengfuxiehui">
                <v-list-tile v-if="index%2 == 1" :key="index">
                  <v-list-tile-action>
                    <v-icon>send</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content class="hotlight">
                    {{$t('meeting.ga.l' + index)}}
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
  name: "participant",
  components: {
    AppAside,
  },
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
      ],
      hangye: [
        {
          text: '政府以及行业规则制定者',
          value: 10,
          color: 'success'
        },
        {
          text: '发动机制造商',
          value: 50,
          color: 'warning'
        },
        {
          text: '发动机零部件供应商',
          value: 85,
          color: 'error'
        },
        {
          text: '汽车制造商',
          value: 30,
          color: 'info'
        },
        {
          text: '商用车制造商',
          value: 70,
          color: 'error'
        },
        {
          text: '非公路移动机械制造商',
          value: 65,
          color: 'error'
        },
        {
          text: '后处理系统&部件供应商',
          value: 40,
          color: 'info'
        },
        {
          text: '车用尿素供应商',
          value: 10,
          color: 'success'
        },
        {
          text: '柴油供应商',
          value: 20,
          color: 'info'
        },
        {
          text: '润滑油供应商',
          value: 20,
          color: 'info'
        },
        {
          text: '动力总成制造商',
          value: 62,
          color: 'warning'
        },
        {
          text: '技术系统方案供应商',
          value: 45,
          color: 'info'
        },
        {
          text: '发动机技术供应商',
          value: 58,
          color: 'warning'
        },
        {
          text: '催化剂供应商',
          value: 10,
          color: 'success'
        },
        {
          text: '咨询机构',
          value: 5,
          color: 'secondary'
        },
        {
          text: '科研院所',
          value: 5,
          color: 'secondary'
        },
      ]
    };
  }
};
</script>
<style scoped>
.list {
  background: none;
  line-height:18px;
}
.hotlight {
  height: 75px;
  font-size: 20px;
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
.progress-list {
  height: 45px;
}
.progress-text {
  width: 300px;
  color: black;
  font-size: 18px;
  text-align: right;
  margin-right: 20px;
  transition: transform 0.4s linear;
}
.progress-text:hover {
  color: #ea1d5d;
  transform: translateX(10px);
  -moz－transform: translateX(10px);
  -webkit-transform: translateX(10px);
  -o-transform: translateX(10px);
  -ms-transform: translateX(10px);
}
</style>
