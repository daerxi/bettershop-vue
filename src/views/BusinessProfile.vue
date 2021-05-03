<template>
  <div>
    <profile-component/>
    <div class="py-6 px-8">
      <business v-if="business.id" v-bind:business="business"/>
    </div>
    <div class="content-center lg:px-12 xl:px-24">
      <alert-component v-if="alertOpen" :type="type" :message="message"/>
      <rate class="text-right text-5xl" :rate-value="rateValue" :editable="editable"/>
      <text-area v-model.trim="content"/>
      <div class="py-2"/>
      <div class="flex flex-wrap w-20 content-right">
        <submit-button title="Submit" :fn="onSubmit"/>
      </div>
      <div class="py-4"></div>
    </div>
    <review-list :reviews="reviews"/>
  </div>
</template>

<script>
import ProfileComponent from "@/components/Profile";
import Business from "@/components/Business";
import BusinessService from "@/api/BusinessService";
import TextArea from "@/components/TextArea";
import SubmitButton from "@/components/SubmitButton";
import ReviewList from "@/components/ReviewList";
import Rate from "@/components/Rate"
import AlertComponent from "@/components/Alert";
import { isNullOrEmpty, openAlert } from "@/utils/helper";

export default {
  name: "BusinessProfile",
  components: {AlertComponent, ReviewList, SubmitButton, TextArea, Business, ProfileComponent, Rate},
  data() {
    return {
      business: {},
      content: '',
      rateValue: 0,
      reviews: [],
      alertOpen: false,
      message: '',
      type: '',
      editable: true,
      rate: 0
    }
  },
  async created() {
    await this.getBusinessById().then(async () => {
      await BusinessService.getReviewsByBusinessId(this.$route.params.businessId)
          .then(async res => this.reviews = res.data.reviews)
          .catch(e => console.error(e))
    })
  },
  methods: {
    async getBusinessById() {
      if (this.$route.params.businessId)
        await BusinessService.getBusiness(this.$route.params.businessId)
            .then(async res => this.business = res.data)
            .catch(e => console.error(e))
      else
        await BusinessService.getInfo()
            .then(async res => this.business = res.data)
            .catch(e => console.error(e))
    },
    async onSubmit() {
      this.rate = localStorage.getItem("rate-value")
      if (isNullOrEmpty(this.content)) {
        openAlert(this, "error", "The content of the review cannot be empty.")
      } else if (this.rate === 0) {
        openAlert(this, "error", "The rate cannot be empty.")
      } else {
        await BusinessService.postReview(this.content, parseInt(this.rate), this.business.id).then(async review => {
          console.log(review)
          window.location.reload()
        })
      }
    }
  }
}
</script>
