<template>
  <v-container>
    <div class="headline mt-5">云计算消费升级 为什么公有云巨头都在拓展MSP市场？</div>
    <v-divider class="my-3"></v-divider>
    <v-jumbotron :src="bg">
       <v-container fill-height>
        <v-layout align-center justify-space-between>
          <v-flex>
          </v-flex>
          <v-flex sm12 md10>
            <div class="headline mb-3 content">
              数字经济的来袭，特别是云计算的深入发展，应用场景不断成熟，客户需求更是呈现井喷式爆发的态势。随着全新云端交付模式的形成，市场需求造就机遇，如此巨大的市场空间，属于MSP（云托管服务提供商）的时代已然到来。全球云计算大会聚集各大云服务提供商。
              </div>
            </v-flex>
          <v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-container>
</template>
<script>
export default {
  name: "",
  data () {
    return {
      bg: require('@/assets/1512.jpg')
    }
  }
}
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
</style>
