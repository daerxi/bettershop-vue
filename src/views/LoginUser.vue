<template>
  <form-component :alert-open="alertOpen" type="error" :message="message" title="Login">
    <input-component
        type="email"
        name="Email"
         v-model.trim="email"/>

    <input-component
        type="password"
        name="Password"
         v-model.trim="password"/>
    <submit-button title="Login" :fn="login">Login</submit-button>

    <checkbox v-bind:check="()=>{}" label="Remember me"></checkbox>

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
import { openAlert } from "@/utils/helper";
import SubmitButton from "@/components/SubmitButton";
import Checkbox from "@/components/Checkbox";
import { saveAuth } from "@/utils/validation";

export default {
  name: 'LoginUser',
  components: {Checkbox, SubmitButton, InputComponent, FormComponent},
  data() {
    return {
      users: [],
      userToken: {
        id: Number,
        userId: Number,
        token: String
      },
      message: '',
      email: this.$cookies.get("user-email"),
      password: '',
      alertOpen: false,
      rememberMe: true
    }
  },
  methods: {
    async check() {
      this.rememberMe = !this.rememberMe
    },
    async login() {
      if (this.rememberMe)
        this.$cookies.set("user-email", this.email, Infinity)
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