<template>
  <form-component title="Login">
    <input-component
        type="email"
        name="Email"
        v-model="email"/>

    <input-component
        type="password"
        name="Password"
        v-model="password"/>

    <p class="error text-red-800 mb-4" v-if="error">{{ error }}</p>

    <button
        type="submit" v-on:click="login"
        class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >Login
    </button>
    <div class="text-right text-sm text-gray-800 mt-4">
      <a class="no-underline border-b border-grey-dark text-gray-800" href="../forgotPassword">
        Forgot Password?
      </a>
    </div>

    <div class="text-gray-800 mt-6">
      Doesn't have an account?
      <a class="no-underline border-b border-grey-dark text-gray-800" href="../signup">
        Sign up today!
      </a>.
    </div>
  </form-component>
</template>

<script>
import UsersService from '../APIs/UsersService'
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";
import {router} from "@/router";

export default {
  name: 'LoginUser',
  components: {InputComponent, FormComponent},
  data() {
    return {
      users: [],
      userToken: {
        id: Number,
        userId: Number,
        token: String
      },
      error: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      await UsersService.loginUser(this.email, this.password).then(res => {
        this.userToken = res.data;
        localStorage.setItem('user-token', this.userToken.token)
        localStorage.setItem('user-id', this.userToken.userId)
        router.push('/')
      }).catch(e => {
        this.error = e.response.data.error
      });
    }
  }
}
</script>