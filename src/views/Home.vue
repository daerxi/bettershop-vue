<template>
  <div>
    <profile-component />
    <div class="h-5"/>
    <form @submit.prevent="onSubmit">
      <search-bar v-model.trim="keyword"/>
    </form>
    <categories :fn="getBusiness" :key="$route.fullPath"/>
    <business-list v-bind:businesses="businesses"/>

    <footer-component>Hey! You are reaching the end!</footer-component>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileComponent from "@/components/Profile";
import Categories from "@/components/Categories";
import BusinessService from "@/api/BusinessService";
import BusinessList from "@/components/BusinessList";
import FooterComponent from "@/components/Footer";
import { router } from "@/router";

export default {
  name: "Home",
  components: {
    BusinessList,
    Categories,
    SearchBar,
    ProfileComponent,
    FooterComponent
  },
  data() {
    return {
      business: false,
      authenticated: false,
      user: {},
      businesses: [],
      keyword: '',
      toProfile: ''
    }
  },
  async created() {
    if (this.$route.query.keyword)
      await this.search()
    await this.getBusiness()
  },
  methods: {
    async search() {
      this.businesses = await BusinessService.searchKeyword(this.$route.query.keyword)
    },
    async onSubmit() {
      await router.push('/?keyword=' + this.keyword)
          .then(async () => await this.search())
          .catch(e => console.warn(e))
    },
    async getBusiness() {
      if (this.$route.query.type) {
        this.businesses = await BusinessService.getBusinessByType(this.$route.query.type)
      } else {
        localStorage.setItem("open-tab", "-1")
        this.businesses = await BusinessService.getBusinesses()
      }
    }
  }
}
</script>

<style scoped>

</style>