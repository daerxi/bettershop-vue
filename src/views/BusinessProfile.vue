<template>
  <div>
    <div class="py-6 px-8 flex flex-wrap">
      <business v-if="business.id" :business="business"/>
      <div v-if="!inWishlist" class="content-left">
        <a class="cursor-pointer underline text-gray-500 text-sm" @click="changeShowModel">Add to wishlist</a>
      </div>
    </div>
    <popup-modal :show="showModal" title="Do you want to add this business to your wishlist?">
      <action-button :fn="addWishlistItem" :block="false" title="Yes"></action-button>
      <action-button :fn="changeShowModel" :block="false" title="No"></action-button>
    </popup-modal>
    <div v-if="showTextArea" class="content-center lg:px-12 xl:px-24">
      <alert-component class="px-2" v-if="alertOpen" :type="type" :message="message"/>
      <rate class="text-right text-5xl" :rate-value="rateValue" :editable="editable"/>
      <text-area v-model.trim="content"/>
      <div class="inline-block">
        <submit-button :not-full="true" title="Submit" :fn="onSubmit"/>
      </div>
      <div class="py-4"></div>
    </div>
    <review-list :number="max" :reviews="business.reviews"/>
  </div>
</template>

<script>
import Business from "@/components/Business";
import BusinessService from "@/api/BusinessService";
import TextArea from "@/components/TextArea";
import SubmitButton from "@/components/SubmitButton";
import ReviewList from "@/components/ReviewList";
import Rate from "@/components/Rate"
import AlertComponent from "@/components/Alert";
import { isNullOrEmpty, openAlert } from "@/utils/helper";
import PopupModal from "@/components/PopupModal";
import ActionButton from "@/components/ActionButton";
import WishlistService from "@/api/WishlistService";

export default {
  name: "BusinessProfile",
  components: {ActionButton, PopupModal, AlertComponent, ReviewList, SubmitButton, TextArea, Business, Rate},
  data() {
    return {
      business: {},
      content: '',
      rateValue: 0,
      alertOpen: false,
      message: '',
      type: '',
      editable: true,
      max: 2,
      showTextArea: true,
      showModal: false,
      inWishlist: false
    }
  },
  async created() {
    if (this.$cookies.get('is-business') === 'true') this.showTextArea = false
    await this.getBusinessById().then(async () => {
      for (const review of this.business.reviews) {
        if (review.userId === parseInt(this.$cookies.get('user-id'))) this.showTextArea = false
      }
    })
    await this.checkInWishlist().catch(e => console.error(e))
  },
  methods: {
    async changeShowModel() {
      this.showModal = !this.showModal
    },
    async getBusinessById() {
      if (this.$route.params.businessId)
        await BusinessService.getBusiness(this.$route.params.businessId)
            .then(async res => {
              this.business = res.data
            })
            .catch(e => console.error(e))
      else
        await BusinessService.getInfo()
            .then(async res => this.business = res.data)
            .catch(e => console.error(e))
    },
    async addWishlistItem() {
      await WishlistService.addToWishList(this.business.id).then(async res => {
        console.log(res.data)
        this.showModal = false
        this.inWishlist = true
      }).catch(e => {
        console.log(e.response.data)
      })
    },
    async checkInWishlist() {
      await WishlistService.checkWishlist(this.$route.params.businessId).then(async res => this.inWishlist = res.data.success)
    },
    async onSubmit() {
      this.rateValue = localStorage.getItem('rate-value')
      if (isNullOrEmpty(this.content)) {
        openAlert(this, "error", "The content of the review cannot be empty.")
      } else if (parseInt(this.rateValue) === 0) {
        openAlert(this, "error", "The rate cannot be empty.")
      } else {
        await BusinessService.postReview(this.content, parseInt(this.rateValue), this.business.id).then(async review => {
          console.log(review)
          window.location.reload()
        })
      }
    }
  }
}
</script>
