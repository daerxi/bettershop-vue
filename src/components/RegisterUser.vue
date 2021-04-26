<template>
  <div class="p-24 container mx-auto">
    <div class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h1 class="block text-grey-darker text-lg font-bold mb-2">Sign Up</h1>
      <br>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="firstName">
          First Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="firstName"
               type="text" v-model="firstName" placeholder="First Name">
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="firstName">
          Last Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="lastName" type="text"
               v-model="lastName" placeholder="Last Name">
      </div>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text"
               v-model="email" placeholder="Email">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
               id="password" type="password" placeholder="******************">
        <p class="text-red text-xs italic">Make sure your password is long and crazy</p>
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" v-on:click="createUser"
                class="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
    <hr>
    <p class="error text-red-800" v-if="error">{{ error }}</p>
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
      password: ''
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
        this.user = await UsersService.createUser(this.firstName, this.lastName, this.email, this.password)
      } catch (err) {
        this.error = err
      }
      this.users = await UsersService.getUsers()
    }
  }
}
</script>