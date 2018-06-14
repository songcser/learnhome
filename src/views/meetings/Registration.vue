<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline mt-5">为什么参加?</div>
        <v-divider class="my-3"></v-divider>
        <v-jumbotron :src="bg">
          <v-container fill-height>
            <v-layout align-center justify-space-between>
              <v-flex>
              </v-flex>
              <v-flex sm12 md10>
                <div class="headline mb-3 content">全球云计算大会·中国站（Cloud Connect China）聚焦云计算的实用性问题，专注于厂商、开发者和具体的商业行动，特别侧重案列分析及分享。通过专业会议与展览相结合的模式，力图以中立的态度聚集、展示行业内领先技术企业，设置高可信度的论坛及教育来探讨云计算的最新发展趋势，吸引决策者和思想领导者等战略层面的观众，从而打造成全球云计算产业顶端活动。</div>
              </v-flex>
              <v-flex>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
        <div class="headline mt-5">参加Cloud Connect China，您将可以：</div>
        <v-divider class="my-3"></v-divider>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-list subheader>
              <template v-for="(item, index) in jihui">
                <v-list-tile :key="index">
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
import AppAside from "@/views/meetings/AppAside";
export default {
  name: "registration",
  components: {
    AppAside
  },
  data() {
    return {
      bg: require("@/assets/a75d.jpg"),
      jihui: [
        "绝佳的培训机会，深度探索云技术",
        "聆听行业领袖的“干货”分享，掌握业界最新趋势",
        "与国际顶尖企业汇聚一堂，了解新一代云计算技术产品",
        "与同行沟通交流，建立并强化专业联系",
        "接触既存的云计算供应商，会见特定的企业或产"
      ]
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

