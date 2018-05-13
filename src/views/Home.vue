<template>
    <v-app>
        <section>
            <v-parallax :src="bg" height="600">
                <v-jumbotron>
                    <v-container fill-height>
                        <v-layout align-start>
                            <v-flex align-end>
                                <h3 class="display-1">{{$t("vision.text")}}</h3>
                                <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
                                <v-divider class="my-3"></v-divider>
                                <div class="title mb-3">Check out our newest features!</div>
                                <v-btn large color="primary" class="mx-0">See more</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-jumbotron>
            </v-parallax>
        </section>
        <section>
            <v-layout row wrap>
                <v-flex d-flex xs12 sm4 md4>
                    <v-card color="indigo" dark>
                            <v-card-title primary class="title">Lorem</v-card-title>
                            <v-card-text>{{ lorem }}</v-card-text>
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
                        <v-card color="purple" dark>
                            <v-card-media :src="timg1" height="200px" />
                            <v-card-title primary class="title">Lorem</v-card-title>
                            <v-card-text>{{ lorem }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3>
                        <v-card color="purple" dark>
                            <v-card-media :src="timg" height="200px" />
                            <v-card-title primary class="title">Lorem</v-card-title>
                            <v-card-text>{{ lorem }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3 child-flex>
                        <v-card color="purple" dark>
                            <v-card-media :src="timg2" height="200px" />
                            <v-card-title primary class="title">Lorem</v-card-title>
                            <v-card-text>{{ lorem }}</v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md3 child-flex>
                        <v-card color="purple" dark>
                            <v-card-media :src="timg2" height="200px" />
                            <v-card-title primary class="title">Lorem</v-card-title>
                            <v-card-text>{{ lorem }}</v-card-text>
                        </v-card>
                    </v-flex>

                </v-layout>
            </v-container>
        </section>
        <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
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
import bg from "@/assets/hero.jpg";
import timg from "@/assets/timg.jpg";
export default {
  name: "home",
  data() {
    return {
      bg: bg,
      timg: require("@/assets/timg.jpg"),
      timg1: require("@/assets/timg1.jpg"),
      timg2: require("@/assets/timg2.jpg"),
      timg3: require("@/assets/timg3.jpg"),
      items: [
        {
          src: "https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg"
        },
        {
          src: "https://vuetifyjs.com/static/doc-images/carousel/sky.jpg"
        },
        {
          src: "https://vuetifyjs.com/static/doc-images/carousel/bird.jpg"
        },
        {
          src: "https://vuetifyjs.com/static/doc-images/carousel/planet.jpg"
        }
      ],
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    };
  }
};
</script>