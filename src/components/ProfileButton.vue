<template>
  <div class="flex flex-wrap object-right-top">
    <div class="w-16 px-4 absolute top-0 right-0 px-12 py-12">
      <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="..."
           class="shadow-lg rounded max-w-full h-auto align-middle border-none"/>
      <div class="inline-flex py-4">
        <button v-on:click="navigateToLogin" class="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-1 rounded-l">
          Login
        </button>
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
      authenticated: localStorage.getItem('authenticated') || false
    }
  },
  methods: {
    navigateToLogin() {

    }
  }
}
</script>

<style scoped>

</style>