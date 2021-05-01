<template>
  <form-component :alert-open="alertOpen" :type="type" :message="message" title="Sign up">

    <input-component
        type="text"
        name="User name"
        v-model="userName"/>

    <input-component
        type="email"
        name="Email"
        v-model="email"/>

    <input-component
        v-if="isBusiness"
        type="text"
        name="Company"
        v-model="company"/>

    <input-component
        type="password"
        name="Password"
        v-model="password"/>

    <input-component
        type="password"
        name="Confirm your password"
        v-model="password2"/>

    <checkbox v-bind:check="check" label="Are you signing up as a business?"></checkbox>

    <submit-button v-bind:fn="createUser" title="Create Account"></submit-button>

    <div class="text-gray-800 mt-6 text-sm">
      Already have an account?
      <a class="no-underline border-b border-grey-dark text-gray-700" href="../login">
        Login
      </a>
    </div>

    <t-c-p/>
  </form-component>
</template>

<script>
import UsersService from '../api/UsersService'
import TCP from "@/components/TCP";
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import SubmitButton from "@/components/SubmitButton";
import { isNullOrEmpty, openAlert, saveAuth } from "@/utils/helper";

export default {
  name: 'RegisterUser',
  components: {SubmitButton, Checkbox, InputComponent, FormComponent, TCP},
  data() {
    return {
      user: {},
      userName: '',
      email: '',
      password: '',
      password2: '',
      isBusiness: true,
      company: '',
      alertOpen: false,
      type: '',
      message: ''
    }
  },
  methods: {
    async check() {
      this.isBusiness = !this.isBusiness
    },
    async createUser() {
      try {
        if (isNullOrEmpty(this.userName) || isNullOrEmpty(this.email) || isNullOrEmpty(this.password) || isNullOrEmpty(this.password2)) {
          openAlert(this, "error", "Please fill out required fields.")
        } else if (this.password !== this.password2) {
          openAlert(this, "error", "The password is not same.")
          this.password = '';
          this.password2 = '';
        } else if (!this.email.includes("@")) {
          openAlert(this, "error", "The email is invalid.")
        } else {
          const body = {
            userName: this.userName,
            email: this.email,
            password: this.password,
            isBusiness: this.isBusiness,
            name: this.company
          }
          await UsersService.createUser(body).then(async res => {
            this.user = res.data
            await UsersService.loginUser(this.email, this.password).then(async res => {
              this.userToken = res.data
              saveAuth(this.userToken)
            })
          }).catch(e => {
            let error = e.response.data.error.toString()
            if (error === "email must be unique")
              error = "Account exists."
            openAlert(this, "error", error)
          })
        }
      } catch (err) {
        openAlert(this, "error", err.toString())
      }
    }
  }
}
</script>