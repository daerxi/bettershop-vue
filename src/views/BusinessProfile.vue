<template>
  <div>
    <profile-component></profile-component>
    <search-bar></search-bar>
    <business v-bind:business="business">
    </business>
    <text-area></text-area>
    <div class="py-2"></div>
    <div class="flex flex-wrap w-20">
      <submit-button title="Submit"></submit-button>
    </div>

  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileComponent from "@/components/Profile";
import Business from "@/components/Business";
import BusinessService from "@/api/BusinessService";
import TextArea from "@/components/TextArea";
import SubmitButton from "@/components/SubmitButton";
import { userToken } from "@/utils/validation";

export default {
  name: "BusinessProfile",
  components: {SubmitButton, TextArea, Business, ProfileComponent, SearchBar},
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
      rateValue: Number,
      content: '',
      rate: 0,
      reviews: []
    }
  },
  async created() {
    await this.getBusinessById()
    this.reviews = await BusinessService.getReviewsByBusinessId(this.business.id)
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
    },
    async onSubmit() {
      if (this.business.id) {
        await  BusinessService.postReview(this.content, this.rate, this.business.id)
      }
    }
  }
}
</script>
