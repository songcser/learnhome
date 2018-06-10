<template>
  <v-container>
    <div class="headline mt-5">关于全球云计算大会</div>
    <v-divider class="my-3"></v-divider>
    <v-card>
      <v-card-media :src="img" height="300px">
      </v-card-media>
      <v-card-title>
        <h3 class="headline mb-0">全球云计算大会 Cloud Connect</h3>
        <div>由UBM Tech于2008年创办于美国硅谷，是“全球十佳云计算活动”之一。大会以专业会议与展览相结合的模式，集结企业IT专业人士、开发者、基础结构及服务器供应商和云计算创新专家，共同构建云计算发展蓝图。随后大会扩张至世界各地，相继在美国芝加哥、美国纽约、印度、中国上海举办。</div>
      </v-card-title>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "fdes",
  data () {
    return {
      img: require('@/assets/8335.jpg')
    }
  }
};
</script>
