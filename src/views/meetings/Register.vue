<template>
  <v-container>
    <div class="headline mt-5">注册报名</div>
    <v-divider class="my-3"></v-divider>

    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field v-model="name" :counter="10" label="Name" required></v-text-field>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      name: "",
      email: ""
    };
  }
};
</script>
