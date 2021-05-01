<template>
  <form-component :alert-open="alertOpen" type="error" :message="message" title="Login">
    <input-component
        type="email"
        name="Email"
        v-model="email"/>

    <input-component
        type="password"
        name="Password"
        v-model="password"/>
    <button
        type="submit" v-on:click="login"
        class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >Login
    </button>
    <div class="text-right text-sm text-gray-800 mt-4">
      <a class="no-underline border-b border-grey-dark text-gray-700" href="../forgotPassword">
        Forgot Password?
      </a>
    </div>

    <div class="text-gray-700 mt-6 text-sm">
      Doesn't have an account?
      <a class="no-underline border-b border-grey-dark text-gray-700" href="../signup">
        Sign up today!
      </a>.
    </div>
  </form-component>
</template>

<script>
import UsersService from '../api/UsersService'
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";
import { openAlert, saveAuth } from "@/utils/helper";

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
      message: '',
      email: '',
      password: '',
      alertOpen: false
    }
  },
  methods: {
    async login() {
      await UsersService.loginUser(this.email, this.password).then(res => {
        this.userToken = res.data;
        saveAuth(this.userToken)
      }).catch(e => {
        openAlert(this, "error", e.response.data.error)
      });
    }
  }
}
</script>