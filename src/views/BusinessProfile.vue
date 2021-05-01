<template>
  <div>
    <profile-component></profile-component>
    <search-bar></search-bar>
    <business :business="business">
    </business>
    <rate editable=true></rate>
    <text-area v-model.trim="content"></text-area>
    <div class="py-2"></div>
    <div class="flex flex-wrap w-20">
      <submit-button title="Submit" :fn="onSubmit"></submit-button>
    </div>

    <review-list :reviews="reviews"></review-list>

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
import ReviewList from "@/components/ReviewList";
import Rate from "@/components/Rate"
import { isNullOrEmpty } from "@/utils/helper";

export default {
  name: "BusinessProfile",
  components: {ReviewList, SubmitButton, TextArea, Business, ProfileComponent, SearchBar, Rate},
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
      if (this.$route.params.businessId) {
        await BusinessService.getBusiness(userToken(), this.$route.params.businessId).then(async res => {
          this.business = res.data
          console.log("*****", this.$route.params.businessId, res.data, this.business)
        })
      } else {
        await BusinessService.getInfo(userToken()).then(async res => {
          this.business = res.data
          console.log("me")
        })
      }
    },
    async onSubmit() {
      if (this.business.id) {
        this.rate = localStorage.getItem("rate-value")
        if (isNullOrEmpty(this.content)) {
          // alert
        } else {
          await BusinessService.postReview(this.content, parseInt(this.rate), this.business.id).then(async review => {
            console.log(review)
            window.location.reload()
          })
        }
      }
    }
  }
}
</script>
