<template>
    <div>
        <v-toolbar class="gradient" dark tabs extended>
            <v-toolbar-title>{{$t('name')}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-y>
                <v-btn slot="activator" icon>
                    <img :src="lang.src">
                </v-btn>
                <v-list>
                    <v-list-tile :avatar=true @click="changeLang">
                        <img :src="otherLang.src">
                    </v-list-tile>
                </v-list>
            </v-menu>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-tabs slot="extension" class="gradient-back" color="light-blue accent-4" align-with-title>
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab to="home" ripple>
                    {{$t('home')}}
                </v-tab>
                <v-tab to="events" ripple>
                    {{$t('events')}}
                </v-tab>
                <v-tab to="advisory" ripple>
                    {{$t("advisoryBoard")}}
                    <!-- <v-menu nudge-left=13>
                        <span slot="activator" color='light-blue accent-4'>{{$t("conference")}} </span>
                        <v-list>
                            <v-list-tile to="events">
                                <v-list-tile-sub-title >{{$t("events")}}</v-list-tile-sub-title>
                            </v-list-tile>
                            <v-list-tile to="advisory">
                                <v-list-tile-sub-title >{{$t("advisoryBoard")}}</v-list-tile-sub-title>
                            </v-list-tile>
                        </v-list>
                    </v-menu> -->
                </v-tab>
                <v-tab to="about" ripple>
                    {{$t('about')}}
                </v-tab>
            </v-tabs>

        </v-toolbar>
    </div>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      lang: {
        name: "zh",
        src: "https://countryflags.io/cn/flat/32.png"
      },
      otherLang: {
        name: "en",
        src: "https://countryflags.io/us/flat/32.png"
      }
    };
  },
  computed: {},
  methods: {
    changeLang() {
      let l = this.lang;
      this.lang = this.otherLang;
      this.otherLang = l;
      this.$i18n.locale = this.lang.name;
    },
    toAdvisoryBoard () {

    }
  }
};
</script>
<style scoped>
.gradient {
  background: linear-gradient(#80d8ff, #00b0ff, #0091ea);
}
.gradient-back {
  background: linear-gradient(#f69d3c, #8bc34a) !important;
}
.list {
    padding: 0;
}
</style>

