<template>
  <div class="container">
    <h1>Sign up</h1>
    <div class="LoginUser">
      <div><input type="email" v-model="email" placeholder="Email"></div>
      <div><input type="password" v-model="password" placeholder="Password"></div>
      <button type="submit" v-on:click="login">Register today!</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import UsersService from '../APIs/UsersService';

export default {
  name: 'LoginUser',
  data() {
    return {
      users: [],
      userToken: {},
      error: '',
      email: '',
      password: ''
    }
  },
  async created() {
    try {
      this.users = await UsersService.getUsers();
      console.log(this.users);
    } catch (err) {
      this.error = err
    }
  },
  methods: {
    async login(id) {
      this.userToken = await UsersService.loginUser(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.LoginUser {
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  color: white;
  font-size: 13px;
}

</style>