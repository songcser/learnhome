<template>
    <v-app>
        <section>
            <v-parallax :src="bg" height="600">
                <v-jumbotron>
                    <v-container fill-height>
                        <v-layout align-content-end=true>
                            <v-flex class="white--text">
                                <h3 :class="infroClass">{{$t("intro")}}</h3>
                                <span class="subheading grey-darken-2--text">{{$t("mission.text1")}}</span>
                                <br/>
                                <span class="subheading grey-darken-2--text">{{$t("mission.text2")}}</span>
                                <v-divider class="my-3"></v-divider>
                                <div class="title mb-3">{{$t("vision.text")}}</div>
                                <v-btn large color="primary" to="events" class="mx-0">{{$t("more")}}</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-jumbotron>
            </v-parallax>
        </section>
        <section>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm4 md4>
                    <v-card dark class="gradient">
                        <v-card-media class="box-card-image">
                                <img :src="time4" />
                            </v-card-media>
                        <v-card-title primary class="title mb-4">{{$t("businessValues.title")}}</v-card-title>
                        <v-card-text>
                            <h3 class="mb-2">{{$t("businessValues.honestyIntegrity.title")}}</h3>
                            {{ $t("businessValues.honestyIntegrity.text") }}
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm8 md8>
                    <v-carousel hide-controls>
                        <v-carousel-item lazy=true v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </section>
        <section>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex d-flex xs12 sm6 md3>
                        <v-card dark class="gradient">
                            <v-card-media class="box-card-image" height=200>
                                <img :src="timg1" />
                            </v-card-media>
                            <v-card-title primary class="title">{{$t("businessValues.dedication.title")}}</v-card-title>
                            <v-card-text>{{ $t("businessValues.dedication.text") }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3>
                        <v-card dark class="gradient">
                            <v-card-media class="box-card-image" height=200>
                                <img :src="timg" />
                            </v-card-media>
                            <v-card-title primary class="title">{{$t("businessValues.thanksgiving.title")}}</v-card-title>
                            <v-card-text>{{ $t("businessValues.thanksgiving.text") }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3 child-flex>
                        <v-card dark class="gradient">
                            <v-card-media class="box-card-image" height=200>
                                <img :src="timg2" />
                            </v-card-media>
                            <v-card-title primary class="title">{{$t("businessValues.excellence.title")}}</v-card-title>
                            <v-card-text>{{ $t("businessValues.excellence.text") }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3 child-flex>
                        <v-card dark class="gradient">
                            <v-card-media class="box-card-image" height=200>
                                <img :src="timg3" />
                            </v-card-media>
                            <v-card-title primary class="title">{{$t("businessValues.happyToShare.title")}}</v-card-title>
                            <v-card-text>{{ $t("businessValues.happyToShare.text") }}</v-card-text>
                        </v-card>
                    </v-flex>

                </v-layout>
            </v-container>
        </section>
        <section>
            <v-layout column wrap class="my-5 mb-2" align-center>
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">{{$t("businessPhilosophy.title")}}</h2>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 sm6 offset-sm3 md4 offset-md2>
                                <v-card class="elevation-0 transparent card-height" height="300px">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">fas fa-balance-scale</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">{{$t("businessPhilosophy.customerOriented.title")}}</div>
                                    </v-card-title>
                                    <v-card-text>{{$t("businessPhilosophy.customerOriented.text")}}</v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-card class="elevation-0 transparent card-height" height="300px">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">{{$t("businessPhilosophy.focus.title")}}</div>
                                    </v-card-title>
                                    <v-card-text>{{$t("businessPhilosophy.focus.text")}}</v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-card class="elevation-0 transparent" height="300px">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">{{$t("businessPhilosophy.innovation.title")}}</div>
                                    </v-card-title>
                                    <v-card-text>{{$t("businessPhilosophy.innovation.text")}}</v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-card class="elevation-0 transparent" height="300px">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">fas fa-handshake</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">{{$t("businessPhilosophy.winWinCooperation.title")}}</div>
                                    </v-card-title>
                                    <v-card-text>{{$t("businessPhilosophy.winWinCooperation.text")}}</v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-card class="elevation-0 transparent" height="300px">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">fas fa-users</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">{{$t("businessPhilosophy.outLookOnTalents.title")}}</div>
                                    </v-card-title>
                                    <v-card-text>{{$t("businessPhilosophy.outLookOnTalents.text")}}</v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

    </v-app>
</template>
<script>
import bg from "@/assets/234.jpg";
import timg from "@/assets/timg.jpg";
export default {
  name: "home",
  data() {
    return {
      bg: bg,
      timg: require("@/assets/MAT_0870.jpg"),
      timg1: require("@/assets/MAT_0878.jpg"),
      timg2: require("@/assets/MAT_0908.jpg"),
      timg3: require("@/assets/MAT_1264.jpg"),
      time4: require("@/assets/941.jpg"),
      items: [
        {
          src: require("@/assets/MAT_0592.jpg")
        },
        {
          src: require("@/assets/MAT_0599.jpg")
        },
        {
          src: require("@/assets/MAT_0603.jpg")
        },
        {
          src: require("@/assets/MAT_0615.jpg")
        }
      ]
    };
  },
  mounted () {
      console.log(this.$vuetify.breakpoint)
  },
  computed: {
      infroClass () {
       switch (this.$vuetify.breakpoint.name) {
         case 'xs': return 'display-1'
         case 'sm': return 'display-1'
         case 'md': return 'display-2'
         case 'lg': return 'display-2'
         case 'xl': return 'display-3'
       }
     }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
h3 {
  margin-bottom: 20px;
}
.gradient {
  background: linear-gradient(#E1F5FE, #0091EA);
}
.card-height {
  height: 300px;
}
.box-card-image {
  position: relative;
  transition: all 0.2s linear;
  img {
    width: 100%;
    height: 250px;
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.1, 1.1);
      filter: contrast(130%);
    }
  }
}
</style>
