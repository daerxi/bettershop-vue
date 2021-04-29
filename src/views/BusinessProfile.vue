<template>
  <div>
    <profile-component></profile-component>
    <search-bar></search-bar>
    <business v-bind:business="business"
              v-bind:rateValue=3>
    </business>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileComponent from "@/components/Profile";
import Business from "@/components/BusinessList";

export default {
  name: "BusinessProfile",
  components: {Business, ProfileComponent, SearchBar},
  data() {
    return {
      business: {
        id: 0,
        userId: 0,
        name: '',
        category: '',
        website: '',
        description: '',
        country: '',
        province: '',
        city: '',
        address: ''
      },
      rateValue: Number
    }
  }
}
</script>

<style scoped>

</style>