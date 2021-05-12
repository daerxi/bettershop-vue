<template>
  <div class="p-4">
    <section>
      <div class="grid w-full" :class="{
      'xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-9 sm:grid-cols-6': !$isMobile(),
      'grid-cols-6': $isMobile()}">
        <div class="col-span-1 w-24">
          <large-round-image v-if="reviewer" :redirect="redirectLink" :user="reviewer"></large-round-image>
          <rate :editable="editable" v-bind:rateValue="review.rate"/>
        </div>
        <div class="col-span-1"/>
        <div class="text-left py-1"
             :class="{'col-span-3': $isMobile(), 'xl:col-span-10 lg:col-span-8 md:col-span-7 sm:col-span-4': !$isMobile()}">
          <a :href="businessRedirect" v-if="showBusinessName" class="font-semibold text-xl">{{ business.name }} -
            {{ business.category }}</a>
          <a :href="redirectLink" v-if="!showBusinessName" class="font-medium text-lg">Author: {{ reviewer.userName }}</a>
          <div class="p-2"></div>
          <read-more class="text-gray-700 whitespace-pre-line" more-str="Read more" :text="review.content" link="#"
                     less-str="Hide" :max-chars="350"></read-more>
        </div>
      </div>
    </section>
    <div class="p-2"></div>
    <hr>
    <div class="p-2"></div>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import UsersService from "@/api/UsersService";
import BusinessService from "@/api/BusinessService";
import LargeRoundImage from "@/components/LargeRoundImage";

export default {
  name: "ReviewComponent",
  components: {LargeRoundImage, Rate},
  props: ['review'],
  data() {
    return {
      reviewer: {},
      editable: false,
      redirectLink: '',
      business: {},
      businessRedirect: '',
      showBusinessName: false
    }
  },
  async created() {
    this.showBusinessName = this.$route.fullPath.includes('profile')
    this.businessRedirect = '/businesses/' + this.review.businessId
    this.redirectLink = "/profile/" + this.review.userId
    await UsersService.getUser(this.review.userId)
        .then(async res => this.reviewer = res.data)
        .catch(e => console.error(e))
    await BusinessService.getBusiness(this.review.businessId)
        .then(async res => {
          this.business = res.data
          if (this.business.category === null) this.business.category = "Not categorized"
        }).catch(e => console.error(e))
  }
}
</script>