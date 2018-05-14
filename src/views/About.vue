<template>
    <section>
    <v-jumbotron :src="bg" height=600>
        <v-container color="grey lighten-2">
            <v-layout >
                <v-flex>
                    <h3 class="display-3 mt-5">{{$t("name")}}</h3>
                    <span class="subheading">{{$t("fiveo.intro")}}</span>
                  <v-divider class="my-3"></v-divider>
                   <span class="subheading">{{$t("fiveo.service")}}</span>
                </v-flex>
            </v-layout>
        </v-container>
    </v-jumbotron>
    </section>
</template>

<script>
import bg from "@/assets/o.jpeg"
export default {
  name: "about",
  data () {
      return {
          bg: bg
      }
  }
};
</script>


