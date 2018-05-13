<template>
    <v-app>
        <section>
            <v-parallax :src="bg" height="600">
                <v-jumbotron>
                <v-container fill-height>
                    <v-layout align-content-end=true>
                        <v-flex class="indigo--text">
                            <h3 class="display-2">{{$t("intro")}}</h3>
                            <span class="subheading grey--text">{{$t("mission.text1")}}</span>
                            <br/>
                            <span class="subheading grey--text">{{$t("mission.text2")}}</span>
                            <v-divider class="my-3"></v-divider>
                            <div class="title mb-3">{{$t("vision.text")}}</div>
                            <v-btn large color="primary" class="mx-0">{{$t("more")}}</v-btn>
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
                            <v-card-media :src="timg1" height="200px" />
                            <v-card-title primary class="title">{{$t("businessValues.dedication.title")}}</v-card-title>
                            <v-card-text>{{ $t("businessValues.dedication.text") }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3>
                        <v-card dark class="gradient">
                            <v-card-media :src="timg" height="200px" />
                            <v-card-title primary class="title">{{$t("businessValues.thanksgiving.title")}}</v-card-title>
                            <v-card-text>{{ $t("businessValues.thanksgiving.text") }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3 child-flex>
                        <v-card dark class="gradient">
                            <v-card-media :src="timg2" height="200px" />
                            <v-card-title primary class="title">{{$t("businessValues.excellence.title")}}</v-card-title>
                            <v-card-text >{{ $t("businessValues.excellence.text") }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3 child-flex>
                        <v-card dark class="gradient">
                            <v-card-media :src="timg3" height="200px" />
                            <v-card-title primary class="title">{{$t("businessValues.happyToShare.title")}}</v-card-title>
                            <v-card-text>{{ $t("businessValues.happyToShare.text") }}</v-card-text>
                        </v-card>
                    </v-flex>

                </v-layout>
            </v-container>
        </section>
        <section >
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
                                <v-card class="elevation-0 transparent card-height" height="300px" >
                                    <v-card-text class="text-xs-center" >
                                        <v-icon x-large class="blue--text text--lighten-2">fas fa-balance-scale</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">{{$t("businessPhilosophy.customerOriented.title")}}</div>
                                    </v-card-title>
                                    <v-card-text>{{$t("businessPhilosophy.customerOriented.text")}}</v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-card class="elevation-0 transparent card-height" height="300px" >
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
import bg from "@/assets/timg.jpg";
import timg from "@/assets/timg.jpg";
export default {
  name: "home",
  data() {
    return {
      bg: bg,
      timg: require("@/assets/MAT_0587.jpg"),
      timg1: require("@/assets/MAT_0601.jpg"),
      timg2: require("@/assets/MAT_1402.jpg"),
      timg3: require("@/assets/MAT_0945.jpg"),
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
      ],
    };
  }
};
</script>
<style scoped>
h3 {
    margin-bottom: 20px;
}
.gradient {
    background: linear-gradient(#e66465, #9198e5);
}
.card-height {
    height: 300px;
}
</style>
