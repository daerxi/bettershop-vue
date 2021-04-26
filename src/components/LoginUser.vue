<template>
  <div class="p-24 container mx-auto">
    <div class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h1 class="block text-grey-darker text-lg font-bold mb-2">Log in</h1>
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="text"
               placeholder="Email" v-model="email">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
               id="password" type="password" placeholder="******************" v-model="password">
        <p class="text-red text-xs italic"></p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue hover:bg-blue-dark font-bold py-2 px-4 rounded"
                type="submit" v-on:click="login">
          Log In
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
      this.users = await UsersService.getUsers()
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