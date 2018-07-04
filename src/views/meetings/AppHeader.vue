<template>
  <v-toolbar dark tabs extended height="120px" color='green'>
    <img class="logo" v-if="logoshow" :src="logo" />
    <v-toolbar-title :class="titleshow">
      {{$t('meetingName')}} <small v-if="logoshow">{{$t('meeting.subtitle')}}</small>
      <div class="subtitle">{{$t("meeting.address")}}</div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-menu offset-y>
      <v-btn slot="activator" icon>
        <img :src="lang.src">
      </v-btn>
      <v-list>
        <v-list-tile :avatar=true @click="changeLang">
          <img :src="otherLang.src">
        </v-list-tile>
      </v-list>
    </v-menu> -->
     <v-btn icon :avatar=true @click="changeLang('zh')">
      <img :src="lang.src">
    </v-btn>
    <v-btn icon :avatar=true @click="changeLang('en')">
      <img :src="otherLang.src">
    </v-btn>
    <v-btn  v-if="logoshow" icon>
      <v-icon></v-icon>
    </v-btn>
    <v-tabs slot="extension" dark align-with-title grow>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab to="home" ripple>
        <span class="title normal">{{$t('home')}}</span>
      </v-tab>
      <v-tab  to="participant" ripple>
        <span class="title normal">{{$t('participant')}}</span>
      </v-tab>
      <v-tab to="oem" ripple>
        <span class="title normal">{{$t("oem")}}</span>
      </v-tab>
      <v-tab to="registration" ripple>
        <v-menu offset-y :nudge-bottom="12" :nudge-left="12" open-on-hover>
          <div class="menu-btn" slot="activator" color='light-blue accent-4'>
            <span class="title normal">{{$t("registration")}}</span>
           </div>
          <v-list>
            <v-list-tile to="registration">
              <v-list-tile-sub-title>
                {{$t("whyRegistration")}}
              </v-list-tile-sub-title>
            </v-list-tile>
            <v-list-tile to="register">
              <v-list-tile-sub-title>{{$t("register")}}</v-list-tile-sub-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-tab>
      <v-tab  to="sponsorship" ripple>
         <v-menu offset-y :nudge-bottom="12" :nudge-left="12" open-on-hover>
          <div slot="activator" color='light-blue accent-4'>
            <span class="title normal">{{$t("sponsorship")}}</span>
          </div>
          <v-list>
            <v-list-tile to="sponsorship">
              <v-list-tile-sub-title>{{$t("whySponsorship")}}</v-list-tile-sub-title>
            </v-list-tile>
            <v-list-tile to="sponsorship-opportunity">
              <v-list-tile-sub-title>{{$t("sponsorshipOpportunity")}}</v-list-tile-sub-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-tab>
      <v-tab to="associated-media" ripple>
        <span class="title normal">{{$t('associatedMedia')}}</span>
        <!-- <v-menu offset-y :nudge-bottom="12" :nudge-left="12" open-on-hover>
          <div slot="activator" color='light-blue accent-4'>{{$t("about")}} </div>
          <v-list>
            <v-list-tile to="fdes">
              <v-list-tile-sub-title>{{$t("fdes")}}</v-list-tile-sub-title>
            </v-list-tile>
            <v-list-tile to="associated-media">
              <v-list-tile-sub-title>{{$t("associatedMedia")}}</v-list-tile-sub-title>
            </v-list-tile>
          </v-list>
        </v-menu> -->
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      logo: require('@/assets/meeting/logo6.png'),
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
  computed: {
    logoshow() {
      let bp = this.$vuetify.breakpoint.name;
      if(bp == 'xs' || bp == 'sm'){
        return false
      }
      else{
        return true
      }
    },
    titleshow() {
      let bp = this.$vuetify.breakpoint.name;
      if(bp == 'xs' || bp == 'sm'){
        return 'headline  black--text'
      }
      else{
        return 'display-1  black--text'
      }
    }
  },
  methods: {
    changeLang(lang) {
      // let l = this.lang;
      // this.lang = this.otherLang;
      // this.otherLang = l;
      console.log(lang)
      this.$i18n.locale = lang;
    },
    toAdvisoryBoard() {},

  }
};
</script>
<style scoped>
.gradient {
  background: linear-gradient(#80d8ff, purple);
}
.gradient-back {
  background: linear-gradient(#f69d3c, #8bc34a) !important;
}
.list {
  padding: 0;
}
.menu-btn {
  display: inline-block;
  position: relative;
  box-shadow: none;
  margin: 0;
  min-width: 0;
  height:100%;
}
.subtitle {
  font-size: 16px;
  margin: 5px 0 0 0;
}
.display-1 {
  text-align: center;
}
.tabsitem {
  font-size: 20px !important;
}
.logo {
  height: 85px;
}
.normal {
  text-transform: none
}
</style>

