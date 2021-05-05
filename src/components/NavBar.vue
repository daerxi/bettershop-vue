<template>
  <div class="">
    <nav class="relative select-none bg-bs-blue p-3 lg:flex lg:items-stretch w-full">
      <div class="flex flex-no-shrink items-stretch h-12">
        <a href="/"
           class="font-semibold text-xl flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center">BetterShop</a>
        <button class="block lg:hidden cursor-pointer ml-auto relative w-14 h-14 p-4">
          <font-awesome-icon class="text-xl text-gray-300" :icon="['fas', 'times']"></font-awesome-icon>
        </button>
      </div>
      <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
          <a href="/login" v-if="!authenticated"
             class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Login</a>
          <a @click="logout" v-if="authenticated"
             class="cursor-pointer flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Logout</a>
          <a href="/business/edit" v-if="authenticated && isBusiness"
             class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Edit
            Profile</a>
        </div>
        <profile-component></profile-component>
      </div>
    </nav>
  </div>
</template>

<script>
import ProfileComponent from "@/components/Profile";
import UsersService from "@/api/UsersService";
import { clearCookies } from "@/utils/validation";

export default {
  name: "NavBar",
  components: {ProfileComponent},
  data() {
    return {
      authenticated: false,
      isBusiness: false
    }
  },
  async beforeMount() {
    this.authenticated = this.$cookies.get('authenticated') === 'true'
    this.isBusiness = this.$cookies.get('is-business') === 'true'
  },
  methods: {
    async logout() {
      await UsersService.logoutUser().then(async () => {
        await clearCookies()
        window.location.reload()
      }).catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>