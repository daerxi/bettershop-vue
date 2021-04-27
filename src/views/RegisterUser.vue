<template>
  <form-component title="Sign up">
    <input-component
        type="text"
        name="firstName"
        placeholder="First Name"
        v-model="firstName"/>

    <input-component
        type="text"
        class="block border border-grey-light w-full p-3 rounded mb-4"
        name="lastName"
        placeholder="Last Name"
        v-model="lastName"/>

    <input-component
        type="email"
        name="email"
        placeholder="Email"
        v-model="email"/>

    <input-component
        v-if="showCompany"
        type="text"
        name="company"
        placeholder="Company Name"
        v-model="company"/>

    <input-component
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"/>

    <input-component
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
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

export default {
  name: 'RegisterUser',
  components: {SubmitButton, Checkbox, InputComponent, FormComponent, TCP},
  data() {
    return {
      users: [],
      user: {},
      error: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      showCompany: true,
      company: ''
    }
  },
  async created() {
    try {
      this.users = await UsersService.getUsers()
    } catch (err) {
      this.error = err
    }
  },
  methods: {
    async check() {
      this.showCompany = !this.showCompany
    },
    async createUser() {
      try {
        if (this.email.trim() === '' || this.firstName.trim() === '' || this.lastName.trim() === '' || this.password.trim() === '' || this.password2.trim() === '') {
          this.error = "Please enter the required fields."
        } else if (this.password !== this.password2) {
          this.error = "The password is not same."
          this.password = '';
          this.password2 = '';
        } else if (!this.email.includes("@")) {
          this.error = "The email is invalid."
        } else if (this.showCompany && this.company.trim() === '') {
          this.error = "Company name is required."
        } else {
          const body = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            isBusiness: this.showCompany
          }
          this.user = await UsersService.createUser(body)
        }
      } catch (err) {
        this.error = err
      }
      this.users = await UsersService.getUsers()
    }
  }
}
</script>