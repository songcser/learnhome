<template>
    <v-footer height="auto">
        <v-card flat tile class="flex">
            <!-- <v-card-title class="teal white--text">
                <strong class="subheading">{{$t("connection")}}</strong>
                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon" icon dark class="mx-3">
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title> -->
            <v-card-text class="light-blue accent-3">
                <v-container fluid grid-list-md>
                <v-layout  row wrap>
                    <v-flex xs12  md4>
                        <span class="body-2" v-text="$t('name')"></span>
                        <!-- <div>{{$t("fiveo.hope")}}</div> -->
                    </v-flex>
                    <v-flex xs12 md4>
                        <span class="body-2">CONTACT</span>
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
                    <v-flex xs12 md4>
                        <span class="body-2">CONTACT</span>
                        <div>
                            <v-icon size="18px" class="mr-3">fab fa-facebook</v-icon>
                            facebook
                        </div>
                        <div>
                            <v-icon size="18px" class="mr-3">fab fa-twitter</v-icon>
                            twitter
                        </div>
                        <div>
                            <v-icon size="18px" class="mr-3">fab fa-linkedin</v-icon>
                            linkedin
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
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
  })
};
</script>
<style scoped>
</style>


