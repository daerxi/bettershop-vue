<template>
  <div>
    <profile-component></profile-component>
    <search-bar></search-bar>
    <business v-bind:business="business">
    </business>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileComponent from "@/components/Profile";
import Business from "@/components/Business";
import { userToken } from "@/utils/validation";
import BusinessService from "@/api/BusinessService";

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
  },
  async created() {
    await this.getBusinessById()
  },
  methods: {
    async getBusinessById() {
      if (this.$route.params.id) {
        await BusinessService.getBusiness(userToken(), this.$route.params.id).then(async res => {
          this.business = res.data
        })
      } else {
        await BusinessService.getInfo(userToken()).then(async res => {
          this.business = res.data
        })
      }
    }
  }
}
</script>

<style scoped>

</style>