<template>
  <div>
    <h1>Register {{name}}.app</h1>
    <input type="email" placeholder="E-Mail" v-model="email" />
    <br />
    <input type="password" placeholder="Password" v-model="password" />
    <br />
    <input type="button" value="Register" @click="register" />
  </div>
</template>

<script>
import auth from "../services/AuthenticationService";
export default {
  data() {
    return {
      name: "Suneet",
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      await auth.register({
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
