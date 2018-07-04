<template>
  <v-footer dark height="auto">
    <v-card flat tile class="flex">
      <v-card-text class="white--text">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm6 md6>
              <h3>The official website of {{$t('meetingName')}}</h3>
              <span>FIVEO Group reserves the right to alter the venue and content of the event should circumstances require.</span>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-home</v-icon>
                {{$t("meeting.huangpu")}}
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-envelope</v-icon>
                {{$t("email")}}
              </div>
              <div>
                <v-icon size="18px" class="mr-3">fas fa-phone</v-icon>
                {{$t("phone")}}
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions class="grey darken-4 justify-center">
        &copy;2018 —
        <strong>沪ICP备18025092号</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>


