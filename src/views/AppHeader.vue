<template>
    <div>
        <v-toolbar color="cyan" dark tabs>
            <v-toolbar-title>{{$t('name.name')}}</v-toolbar-title>
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
            <v-tabs slot="extension" v-model="tab" color="cyan" align-with-title>
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab to="home" ripple>
                    {{$t('home.name')}}
                </v-tab>
                <v-tab to="about" ripple>
                    {{$t('about.name')}}
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
      tab: null,
      lang: {
          name: "en",
          src: "https://countryflags.io/us/flat/32.png",
      },
      otherLang: {
          name: "zh",
          src: "https://countryflags.io/cn/flat/32.png"
      }
    };
  },
  computed: {
  },
  methods: {
    changeLang() {
        let l = this.lang;
        this.lang = this.otherLang;
        this.otherLang = l
        this.$i18n.locale = this.lang.name
    }
  }
};
</script>
<style scoped>
.v-list-tile {
    height: 28px;
}
</style>

