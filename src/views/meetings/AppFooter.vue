<template>
  <v-footer height="auto">
    <v-card flat tile class="flex">
      <v-card-text class="light-blue accent-4 white--text">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <h3>The official website of 2014中国国际汽车发动机峰会</h3>
              <span>Borscon Group reserves the right to change the venue and content of the event should circumstances require (Best viewed at 1024 X 768,IE 7.0)</span>
            </v-flex>
            <v-flex xs12 md6>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                {{$t("address")}}
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                {{$t("email")}}
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                {{$t("phone")}}
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-print</v-icon>
                {{$t("phone")}}
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions class="light-blue lighten-4 justify-center">
        &copy;2018 —
        <strong>Fiveo</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "app-footer",
  data () {
    return {

    }
  }
};
</script>
<style scoped>
</style>


