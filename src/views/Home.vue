<template>
  <div>
    <profile-button></profile-button>
    <search-bar></search-bar>
    <categories></categories>
    <business></business>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileButton from "@/components/Profile";
import Categories from "@/components/Categories";
import BusinessService from "@/APIs/BusinessService";
import {router} from "@/router";
import Business from "@/components/Business";

export default {
  name: "Home.vue",
  components: {
    Business,
    Categories,
    SearchBar,
    ProfileButton
  },
  data() {
    return {
      business: false,
      authenticated: false,
      user: {},
      wholeLists: [],
      lists: []
    }
  },
  async created() {
    try {
      await this.getLists()
      console.log("***", this.lists, this.wholeLists)
      // verify user token
      // const token = localStorage.getItem('user-token')
      // if authenticated, get user -> profile photo
    } catch (err) {
      this.error = err
    }
  },
  methods: {
    async getWholeLists() {
      return await BusinessService.getBusinesses()
    },
    async getLists() {
      if (router.params.type)
        this.lists = await BusinessService.getBusinessByType(router.params.type)
      else this.list = this.getWholeLists()
    }
  }
}
</script>

<style scoped>

</style>