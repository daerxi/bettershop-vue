<template>
  <div class="bg-grey-lighter min-h-screen flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Login</h1>
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

        <p class="error text-red-800 mb-4" v-if="error">{{ error }}</p>

        <button
            type="submit" v-on:click="login"
            class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Login
        </button>
        <div class="text-center text-sm text-gray-800 mt-4">
          <a class="no-underline border-b border-grey-dark text-gray-800" href="../forgotPassword">
            Forgot Password?
          </a>
        </div>

        <div class="text-gray-800 mt-6">
          Doesn't have an account?
          <a class="no-underline border-b border-grey-dark text-gray-800" href="../signup/">
            Sign up today!
          </a>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '../APIs/UsersService'

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
  methods: {
    async login() {
      if (this.email.trim() === '' || this.password.trim() === '')
        this.error = "Please enter the required fields."
      else {
        this.userToken = await UsersService.loginUser(this.email, this.password)
        localStorage.setItem('user-token', this.userToken)
      }
    }
  }
}
</script>