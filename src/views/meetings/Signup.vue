<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 md8>
        <div class="headline mt-5">{{$t('meeting.attend_event')}}</div>
        <v-divider class="my-3"></v-divider>
        <section>
            <v-card class="elevation-0 transparent">
              <v-card-title >
                <div class="title">{{$t('meeting.below')}}</div>
              </v-card-title>
              <v-card-text>
                <div>{{$t('meeting.live1')}}</div>
              </v-card-text>
            </v-card>
        </section>
        <section>
            <v-card class="elevation-0 transparent">
              <v-card-title>
                <div class="title">{{$t('meeting.package')}}</div>
              </v-card-title>
              <v-card-text>
                <div>{{$t('meeting.live2')}}</div>
              </v-card-text>
            </v-card>
        </section>
        <section>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title>
              <div class="title">{{$t('meeting.media')}}</div><br/>
            </v-card-title>
            <v-card-text>
                <div>{{$t('meeting.live3')}}</div>
              </v-card-text>
          </v-card>
        </section>
        <section>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-titl>
                <div class="title">{{$t('meeting.purchase')}}</div>              </v-card-title>
              <v-card-text>
                <div>{{$t('meeting.live4')}}</div>
              </v-card-text>
            </v-card>
        </section>
        <div class="headline mt-5">{{$t('meeting.register')}}</div>
        <v-divider class="my-3"></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-text>
                <v-form>
                  <v-text-field v-model="company" :label="$t('meeting.company')"></v-text-field>
                  <v-text-field v-model="name" :label="$t('meeting.name')"></v-text-field>
                  <v-text-field v-model="job" :label="$t('meeting.title')"></v-text-field>
                  <v-text-field v-model="phone" :label="$t('meeting.tel')"></v-text-field>
                  <v-text-field v-model="mobile" :label="$t('meeting.mobile')"></v-text-field>
                  <v-text-field v-model="email" :label="$t('meeting.email')"></v-text-field>
                  <v-layout row wrap>
                    <v-flex xs6 sm2>
                      <div>{{$t('meeting.lookfor.text')}}</div>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" :label="$t('meeting.lookfor.search')" :value="$t('meeting.lookfor.search')"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" :label="$t('meeting.lookfor.link')" :value="$t('meeting.lookfor.link')"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" :label="$t('meeting.lookfor.email')" :value="$t('meeting.lookfor.email')"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm4>
                      <v-checkbox v-model="lookfor" :label="$t('meeting.lookfor.handbook')" :value="$t('meeting.lookfor.handbook')"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" :label="$t('meeting.lookfor.colleague')" :value="$t('meeting.lookfor.colleague')"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" :label="$t('meeting.lookfor.publication')" value="出版刊物"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" :label="$t('meeting.lookfor.salesperson')" value="销售员"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm4>
                      <v-checkbox v-model="lookfor" :label="$t('meeting.lookfor.delegates')" value="以前的与会代表"></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-form>

              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.stop="onSubmit">{{$t('meeting.lookfor.submit')}}</v-btn>
              </v-card-actions>
            </v-card>
            <div class="mt-3"> {{$t('meeting.lookfor.connect')}} </div>
            <div> {{$t('meeting.lookfor.phone')}}： +86-21-56500750 </div>
            <div> {{$t('meeting.lookfor.email')}}： info@fiveoit.com </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md4 hidden-xs-only>
        <app-aside />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AppAside from "@/views/meetings/AppAside";
export default {
  name: "signup",
  components: {
    AppAside
  },
  data() {
    return {
      name: "",
      job: "",
      company: "",
      address: "",
      zipcode: "",
      country: "",
      countryzipcode: "",
      phone: "",
      fax: "",
      email: "",
      mobile: "",
      zhiwei: [],
      lookfor: []
    };
  },
  methods: {
    onSubmit() {
      console.log(this.zhiwei)
      let subject = "注册报名";
      let body = `公司： ${this.company}, \r\n
      姓名：${this.name},
      职位：${this.job},
      办公电话：${this.phone},
      手机电话：${this.mobile},
      邮箱：${this.email},
      我想要成为：${this.zhiwei},
      你如何找到我们会议的：${this.lookfor},
      `;
      window.open("mailto:info@fiveoit.com?subject=" + subject + "&body=" + body);
    }
  },
  computed: {
    showrow() {
      let bp = this.$vuetify.breakpoint.name;
      if(bp == 'xs' || bp == 'sm'){
        return false
      }
      else{
        return true
      }
    }
  }
};
</script>
