<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 md8>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{$t('meeting.attend1')}}</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
        <section>
          <v-parallax :src="require('@/assets/jingxuan/huoche2.png')" height="150">
          </v-parallax>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{$t('meeting.attend2')}}</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
        <section>
          <v-parallax :src="require('@/assets/jingxuan/huoche2.png')" height="150">
          </v-parallax>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{$t('meeting.attend3')}}</div>
              </v-card-title>
            </v-card>
          </v-container>
        </section>
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
.headline {
  font-size: 20px !important
}
</style>

