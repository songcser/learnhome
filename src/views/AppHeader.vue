<template>
    <div>
        <v-toolbar color="cyan" dark tabs>
            <v-toolbar-title>Page title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
            <v-tabs slot="extension" v-model="tab" color="cyan" align-with-title>
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab to="home" ripple>
                    HOME
                </v-tab>
                <v-tab to="about" ripple>
                    ABOUT
                </v-tab>
            </v-tabs>
        </v-toolbar>
    </div>
</template>

<script>

export default {
  name: "app-header",
  data () {
      return {
          tab: null,
          items: ['HOME', 'ABOUT UBM', 'SECTORS', 'GLOBAL REACH', 'NEWS'],
      }
  },
  methods: {
      toHome () {
          this.$router.push('home')
      },
      toAbout () {
          this.$router.push('about')
      }
  }
};
</script>
