<template>
  <div>
    <profile-button></profile-button>
    <div class="h-5"></div>
    <form @submit.prevent="onSubmit">
      <search-bar v-model="keyword"></search-bar>
    </form>
    <categories :selected="selected"></categories>
    <business-list v-bind:businesses="businesses">
    </business-list>

    <footer-component>Hey! You are reaching the end!</footer-component>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileButton from "@/components/Profile";
import Categories from "@/components/Categories";
import BusinessService from "@/api/BusinessService";
import BusinessList from "@/components/BusinessList";
import FooterComponent from "@/components/Footer";
import { router } from "@/router";

export default {
  name: "Home.vue",
  components: {
    BusinessList,
    Categories,
    SearchBar,
    ProfileButton,
    FooterComponent
  },
  data() {
    return {
      business: false,
      authenticated: false,
      user: {},
      businesses: [],
      keyword: '',
      selected: false
    }
  },
  async created() {
    await this.getBusiness()
  },
  methods: {
    async onSubmit() {
      this.businesses = await BusinessService.searchKeyword(this.keyword)
      const query = '/?keyword=' + this.keyword
      await router.push(query).catch(e => console.warn(e))
    },
    async getBusiness() {
      if (!this.$route.query.keyword) {
        this.businesses = await BusinessService.getBusinesses()
        if (this.$route.query.type) {
          this.selected = true
          this.businesses = await BusinessService.getBusinessByType(this.$route.query.type)
        }
      } else {
        localStorage.setItem("open-tab", "-1")
        this.businesses = await BusinessService.searchKeyword(this.$route.query.keyword)
      }
    }
  }
}
</script>

<style scoped>

</style>