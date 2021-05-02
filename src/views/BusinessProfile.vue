<template>
  <div>
    <profile-component />
    <business :business="business">
    </business>
    <alert-component v-if="alertOpen" :type="type" :message="message"></alert-component>
    <rate :rate-value="rateValue" :editable="editable"></rate>
    <text-area v-model.trim="content"></text-area>
    <div class="py-2"></div>
    <div class="flex flex-wrap w-20">
      <submit-button title="Submit" :fn="onSubmit"></submit-button>
    </div>
    <review-list :reviews="reviews"></review-list>
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
import { userToken } from "@/utils/validation";

export default {
  name: "BusinessProfile",
  components: {AlertComponent, ReviewList, SubmitButton, TextArea, Business, ProfileComponent, Rate},
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
      content: '',
      rateValue: 0,
      reviews: [],
      alertOpen: false,
      message: '',
      type: '',
      editable: true
    }
  },
  async created() {
    await this.getBusinessById().then(async ()=> {
      await BusinessService.getReviewsByBusinessId(this.business.id)
          .then(async res => this.reviews = res.data.reviews)
          .catch(e => console.error(e))
    })
  },
  methods: {
    async getBusinessById() {
      if (this.$route.params.businessId)
        await BusinessService.getBusiness(userToken(), this.$route.params.businessId)
            .then(async res => this.business = res.data)
      else
        await BusinessService.getInfo(userToken()).then(async res => this.business = res.data)
    },
    async onSubmit() {
      if (this.business.id) {
        this.rate = localStorage.getItem("rate-value")
        if (isNullOrEmpty(this.content)) {
          openAlert(this, "error", "Content of review is required when submitting review.")
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
