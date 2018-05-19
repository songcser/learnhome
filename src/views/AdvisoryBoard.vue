<template>
    <section>
        <v-container grid-list-xl >
            <h1>{{$t("advisoryBoard")}}</h1>
            <v-layout row wrap>
                <v-flex xs12 sm4 md3>
                    <v-card >
                        <v-card-text class="center">
                            <v-avatar :size="150">
                                <img src="@/assets/MAT_0587.jpg" alt="avatar">
                            </v-avatar>
                        </v-card-text>
                        <v-card-title primary-title>
                                <h3 class="headline">Kangaroo Valley Safari</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange" @click="showMore">{{$t('more')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md3>
                    <v-card >
                        <v-card-text class="center">
                            <v-avatar :size="150">
                                <img src="@/assets/MAT_0587.jpg" alt="avatar">
                            </v-avatar>
                        </v-card-text>
                        <v-card-title primary-title>
                                <h3 class="headline">Kangaroo Valley Safari</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange">{{$t('more')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md3>
                    <v-card >
                        <v-card-text class="center">
                            <v-avatar :size="150">
                                <img src="@/assets/MAT_0587.jpg" alt="avatar">
                            </v-avatar>
                        </v-card-text>
                        <v-card-title primary-title>
                                <h3 class="headline">Kangaroo Valley Safari</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange">{{$t('more')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md3>
                    <v-card >
                        <v-card-text class="center">
                            <v-avatar :size="150">
                                <img src="@/assets/MAT_0587.jpg" alt="avatar">
                            </v-avatar>
                        </v-card-text>
                        <v-card-title primary-title>
                                <h3 class="headline">Kangaroo Valley Safari</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange">{{$t('more')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md3>
                    <v-card >
                        <v-card-text class="center">
                            <v-avatar :size="150">
                                <img src="@/assets/MAT_0587.jpg" alt="avatar">
                            </v-avatar>
                        </v-card-text>
                        <v-card-title primary-title>
                                <h3 class="headline">Kangaroo Valley Safari</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange">{{$t('more')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md3>
                    <v-card >
                        <v-card-text class="center">
                            <v-avatar :size="150">
                                <img src="@/assets/MAT_0587.jpg" alt="avatar">
                            </v-avatar>
                        </v-card-text>
                        <v-card-title primary-title>
                                <h3 class="headline">Kangaroo Valley Safari</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange">{{$t('more')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md3>
                    <v-card >
                        <v-card-text class="center">
                            <v-avatar :size="150">
                                <img src="@/assets/MAT_0587.jpg" alt="avatar">
                            </v-avatar>
                        </v-card-text>
                        <v-card-title primary-title>
                                <h3 class="headline">Kangaroo Valley Safari</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange">{{$t('more')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 md3>
                    <v-card >
                        <v-card-text class="center">
                            <v-avatar :size="150">
                                <img src="@/assets/MAT_0587.jpg" alt="avatar">
                            </v-avatar>
                        </v-card-text>
                        <v-card-title primary-title>
                                <h3 class="headline">Kangaroo Valley Safari</h3>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat color="orange">{{$t('more')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title>
              {{advisoryName}}
          </v-card-title>
          <v-card-text>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </section>
</template>
<script>
export default {
  name: "advisory-board",
  data () {
      return {
        dialog2: false,
        advisoryName: 'Kangaroo Valley Safari'
      }
  },
  methods: {
      showMore () {
      }
  }
};
</script>
<style scoped>
.center {
    text-align: center;
}
</style>


