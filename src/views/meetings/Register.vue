<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs8>
        <div class="headline mt-5">注册报名</div>
        <v-divider class="my-3"></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-card-title>
                <div class="headline">2019中国未来柴油机峰会</div>
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-layout row wrap>
                    <v-flex xs2>
                      <div>我想要成为：</div>
                    </v-flex>
                    <v-flex xs2>
                      <v-checkbox v-model="zhiwei" label="与会代表" value="daibiao"></v-checkbox>
                    </v-flex>
                    <v-flex xs2>
                      <v-checkbox v-model="zhiwei" label="赞助商" value="zanzhushang"></v-checkbox>
                    </v-flex>
                    <v-flex xs2>
                      <v-checkbox v-model="zhiwei" label="演讲嘉宾" value="yanjiangjiabin"></v-checkbox>
                    </v-flex>
                    <v-flex xs2>
                      <v-checkbox v-model="zhiwei" label="购买资料" value="goumaiziliao"></v-checkbox>
                    </v-flex>
                  </v-layout>
                  <v-text-field v-model="company" label="公司" required></v-text-field>
                  <v-text-field v-model="name" label="姓名" required></v-text-field>
                  <v-text-field v-model="job" label="职位" required></v-text-field>
                  <v-text-field v-model="phone" label="办公电话"></v-text-field>
                  <v-text-field v-model="mobile" label="手机号码"></v-text-field>
                  <v-text-field v-model="email" label="邮箱"></v-text-field>
                  <v-layout row wrap>
                    <v-flex xs6 sm3>
                      <div>你如何找到我们会议的：</div>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" label="网络搜索" value="network"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" label="网站链接" value="link"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" label="邮箱" value="email2"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" label="公司手册" value="companybook"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm3>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" label="同事" value="colleague"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" label="出版刊物" value="publication"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm2>
                      <v-checkbox v-model="lookfor" label="销售员" value="salesperson"></v-checkbox>
                    </v-flex>
                    <v-flex xs6 sm3>
                      <v-checkbox v-model="lookfor" label="以前的与会代表" value="delegates"></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-form>

              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.stop="onSubmit">提交</v-btn>
                <v-btn color="primary" @click.stop="cancle">取消</v-btn>
              </v-card-actions>
            </v-card>
            <div class="mt-3"> 请联系我们获取大会议程和赞助协议 </div>
            <div> 电话： +86-21-56500750 </div>
            <div> 邮箱： info@fiveoit.com </div>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs4>
        <app-aside />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AppAside from "@/views/meetings/AppAside";
export default {
  name: "register",
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
      window.open("")
    },
    cancel() {}
  }
};
</script>
