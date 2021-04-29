<template>
  <div>
    <profile-button></profile-button>
    <form @submit.prevent="onSubmit">
      <search-bar v-model="keyword"></search-bar>
    </form>
    <categories></categories>
    <business-list v-bind:businesses="businesses" v-bind:redirect-link="redirectLink"
                   v-bind:rateValue=3>
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
      redirectLink: '/',
      keyword: ''
    }
  },
  async created() {
    await this.getBusiness()
  },
  methods: {
    async onSubmit() {
      this.businesses = await BusinessService.searchKeyword(this.keyword)
      const query = '/?keyword=' + this.keyword
      await router.push(query)
    },
    async getBusiness() {
      if (!this.$route.query.keyword) {
        this.businesses = await BusinessService.getBusinesses()
        if (this.$route.params.type)
          this.businesses = await BusinessService.getBusinessByType(this.$route.query.type)
      } else {
        this.businesses = await BusinessService.searchKeyword(this.$route.query.keyword)
      }
    }
  }
}
</script>

<style scoped>

</style>