<template>
  <div class="bg-grey-lighter p-16 flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
        <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="firstName"
            placeholder="First Name"
            v-model="firstName"/>

        <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastName"
            placeholder="Last Name"
            v-model="lastName"/>

        <input
            type="email"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            v-model="email"/>

        <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            v-model="password"/>
        <input
            type="password"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
            v-model="password2"/>

        <p class="error text-red-800 mb-4" v-if="error">{{ error }}</p>

        <button
            type="submit" v-on:click="createUser"
            class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Create Account
        </button>

        <div class="text-center text-sm text-gray-800 mt-4">
          By signing up, you agree to the
          <a class="no-underline border-b border-grey-dark text-gray-800" href="#">
            Terms of Service
          </a> and
          <a class="no-underline border-b border-grey-dark text-gray-800" href="#">
            Privacy Policy
          </a>
        </div>
      </div>

      <div class="text-gray-800 mt-6">
        Already have an account?
        <a class="no-underline border-b border-grey-dark text-gray-800" href="../login">
          Login
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '../APIs/UsersService'

export default {
  name: 'RegisterUser',
  data() {
    return {
      users: [],
      user: {},
      error: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
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
    async createUser() {
      try {
        if (this.email.trim() === '' || this.firstName.trim() === '' || this.lastName.trim() === '' || this.password.trim() === '' || this.password2.trim() === '') {
          this.error = "Please enter the required fields."
        } else if (this.password !== this.password2) {
          this.error = "The password is not same."
          this.password = '';
          this.password2 = '';
        } else if (!this.email.includes("a")) {
          this.error = "The email is invalid."
        } else {
          this.user = await UsersService.createUser(this.firstName, this.lastName, this.email, this.password)
        }
      } catch (err) {
        this.error = err
      }
      this.users = await UsersService.getUsers()
    }
  }
}
</script>