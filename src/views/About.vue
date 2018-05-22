<template>
    <section>
    <v-jumbotron :src="bg" height=900 :gradient="gradient">
        <v-container>
            <v-layout >
                <v-flex>
                    <h3 class="display-2 mt-5">{{$t("name")}}</h3>
                    <v-divider class="my-3"></v-divider>
                    <span class="subheading" >{{$t("fiveo.intro")}}</span>
                    <v-divider class="my-3"></v-divider>
                    <span class="subheading" >{{$t("fiveo.service")}}</span>
                    <v-divider class="my-3"></v-divider>
                    <span class="subheading" >{{$t("fiveo.hope")}}</span>
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

<style scoped>
h3, span {
    color: #E0E0E0
}
</style>

