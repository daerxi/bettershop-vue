<template>
  <div>
    <profile-button></profile-button>
    <search-bar></search-bar>
    <categories></categories>
    <business-list v-bind:businesses="businesses" v-bind:redirect-link="redirectLink"
                   v-bind:rateValue=3>
    </business-list>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileButton from "@/components/Profile";
import Categories from "@/components/Categories";
import BusinessService from "@/api/BusinessService";
import BusinessList from "@/components/BusinessList";

export default {
  name: "Home.vue",
  components: {
    BusinessList,
    Categories,
    SearchBar,
    ProfileButton
  },
  data() {
    return {
      business: false,
      authenticated: false,
      user: {},
      businesses: [],
      redirectLink: '/'
    }
  },
  async created() {
    this.businesses = await BusinessService.getBusinesses()
    if (this.$route.params.type)
      this.businesses = await BusinessService.getBusinessByType(this.$route.params.type)
  },
  methods: {}
}
</script>

<style scoped>

</style>