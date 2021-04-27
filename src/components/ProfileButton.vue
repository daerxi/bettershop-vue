<template>
  <div class="flex flex-wrap object-right-top">
    <div class="w-16 px-4 absolute top-0 right-0 px-12 py-12">
      <router-link to="/profile">
        <img v-bind:src="photo" alt=""
             class="shadow-lg rounded max-w-full h-auto align-middle border-none"/>
      </router-link>
      <div class="inline-flex py-4">
        <router-link class="no-underline" to="/login">
          <button class="bg-gray-300 hover:bg-gray-500 text-blue-700 font-bold py-1 rounded">Login</button>
        </router-link>
<!--        <button class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 rounded-l">-->
<!--          Logout-->
<!--        </button>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileButton",
  data() {
    return {
      authenticated: localStorage.getItem('authenticated') || false,
      photo: this.authenticated ? "https://imgur.com/uF05hWw.png" : "https://imgur.com/uF05hWw.png"
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>