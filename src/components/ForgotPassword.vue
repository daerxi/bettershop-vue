<template>
  <div class="bg-grey-lighter p-16 flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Forgot Password</h1>
        <input
            type="email"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            v-model="email"/>

        <p class="error text-black mb-4" v-if="success">{{ success }}</p>
        <p class="error text-red-800 mb-4" v-if="error">{{ error }}</p>

        <button
            type="submit" v-on:click="forgot"
            class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Submit
        </button>
        <div class="text-gray-800 mt-6">
          Remember the password now?
          <a class="no-underline border-b border-grey-dark text-gray-800" href="../login">
            Login here
          </a>.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ForgotPassword',
  data() {
    return {
      error: '',
      email: '',
      success: ''
    }
  },
  methods: {
    async forgot() {
      //TODO
    }
  }
}
</script>