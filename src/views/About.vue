<template>
    <section>
    <v-jumbotron :src="bg" height=900 :gradient="gradient">
        <v-container color="grey lighten-2">
            <v-layout >
                <v-flex>
                    <h3 class="display-2 mt-5 white--text">{{$t("name")}}</h3>
                    <span class="subheading white--text" >{{$t("fiveo.intro")}}</span>
                    <v-divider class="my-3"></v-divider>
                    <span class="subheading white--text" >{{$t("fiveo.service")}}</span>
                    <v-divider class="my-3"></v-divider>
                    <span class="subheading white--text" >{{$t("fiveo.hope")}}</span>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
    </section>
</template>

<script>
import bg from "@/assets/2154.jpg"
export default {
  name: "about",
  data () {
      return {
          bg: bg,
          gradient: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
      }
  }
};
</script>


