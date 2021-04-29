<template>
  <form-component title="Sign up">

    <input-component
        type="text"
        class="block border border-grey-light w-full p-3 rounded mb-4"
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

    <p class="error text-red-800 mb-4" v-if="error">{{ error }}</p>

    <submit-button v-bind:fn="createUser" title="Create Account"></submit-button>
    <t-c-p/>

    <div class="text-gray-800 p-5">
      Already have an account?
      <a class="no-underline border-b border-grey-dark text-gray-800" href="../login">
        Login
      </a>
    </div>
  </form-component>
</template>

<script>
import UsersService from '../APIs/UsersService'
import TCP from "@/components/TCP";
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import SubmitButton from "@/components/SubmitButton";
import { router } from "@/router";

export default {
  name: 'RegisterUser',
  components: {SubmitButton, Checkbox, InputComponent, FormComponent, TCP},
  data() {
    return {
      user: {},
      error: '',
      userName: '',
      email: '',
      password: '',
      password2: '',
      isBusiness: true,
      company: ''
    }
  },
  methods: {
    async check() {
      this.isBusiness = !this.isBusiness
    },
    async createUser() {
      try {
        if (this.password !== this.password2) {
          this.error = "The password is not same."
          this.password = '';
          this.password2 = '';
        } else if (!this.email.includes("@")) {
          this.error = "The email is invalid."
        } else {
          const body = {
            userName: this.userName,
            email: this.email,
            password: this.password,
            isBusiness: this.isBusiness,
            name: this.company
          }
          await UsersService.createUser(body).then(res => {
            this.user = res.data
            router.push('login')
          }).catch(e => {
            const error = e.response.data.error.toString()
            console.log(error);
            if (error === "email must be unique")
              this.error = "Account exists."
            else this.error = error
          })
        }
      } catch (err) {
        this.error = err
      }
    }
  }
}
</script>