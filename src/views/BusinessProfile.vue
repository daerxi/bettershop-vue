<template>
  <div>
    <profile-component></profile-component>
    <search-bar></search-bar>
    <business-list v-bind:businesses="businesses" v-bind:redirect-link="redirectLink"
                   v-bind:rateValue=3>
    </business-list>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileComponent from "@/components/Profile";
import BusinessList from "@/components/BusinessList";

export default {
  name: "BusinessProfile",
  components: {BusinessList, ProfileComponent, SearchBar},
  data() {
    return {
      businesses: [],
      redirectLink: '/'
    }
  }
}
</script>

<style scoped>

</style>