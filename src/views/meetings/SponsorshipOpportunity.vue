<template>
  <v-container>
    <div>本次峰会是您寻找优质供应商和目标客户的最佳平台。</div>
    <div>选择赞助我们的会议能给您提供一系列的在目标决策者和现场的行业高管面前展示您的企业形象和品牌宣传的机会！</div>
    <div class="headline mt-5">您能选择的赞助机会和形式：</div>
    <v-divider class="my-3"></v-divider>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-list subheader>
          <template v-for="(item, index) in sponsorships">
            <v-list-tile :key="index">
              <v-list-tile-action>
                <v-icon>star</v-icon>
              </v-list-tile-action>
              <v-list-tile-content class="hotlight">
                {{item}}
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
      <v-flex xs12 sm6>
        <div class="title">如果您对赞助事宜有任何疑问，请直接发邮件到:</div>
        <div>draymond.ma@fiveoit.com</div>
      </v-flex>
    </v-layout>
    <div class="headline mt-5">成为我们的赞助商主要能给您带来什么利益呢？</div>
    <v-divider class="my-3"></v-divider>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-list subheader>
          <template v-for="(item, index) in liyi">
            <v-list-tile :key="index">
              <v-list-tile-action>
                <v-icon>star</v-icon>
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
  name: "sponsorship-opportunity",
  data () {
    return {
      sponsorships: [
        "金牌赞助商",
        "演讲赞助商",
        "展台赞助商",
        "宣传资料赞助商",
        "鸡尾酒会赞助商",
        "圆桌讨论赞助商",
        "大会礼物赞助商",
        "胸牌赞助商"
      ],
      liyi: [
        "增强品牌曝光和提高品牌认知度",
        "更多的与目标客户和优质供应商的商业洽谈的机会",
        "演讲和展览的机会",
        "300字左右的业务简介+您公司网站的超链接",
        "您的公司Logo放置于大会背景板和所有的相关宣传资料上"
      ]
    }
  }
};
</script>
<style scoped>
.list {
  background: none;
}
</style>
