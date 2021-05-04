<template>
  <div class="p-4">
    <section>
      <div class="grid w-full" :class="{
      'xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-9 sm:grid-cols-6': !$isMobile(),
      'grid-cols-6': $isMobile()}">
        <div class="col-span-1 w-24">
          <round-image :redirect="redirectLink" :user="user"/>
          <rate :editable="editable" v-bind:rateValue="review.rate"/>
        </div>
        <div class="col-span-1"/>
        <div class="text-left py-1"
             :class="{'col-span-3': $isMobile(), 'xl:col-span-10 lg:col-span-8 md:col-span-7 sm:col-span-4': !$isMobile()}">
          <router-link style="text-decoration: none" :to="businessRedirect">
            <h3 v-if="showBusinessName" class="">{{ business.name }} - {{ business.category }}</h3>
          </router-link>
          <p class="text-gray-700" style="white-space: pre;">{{ review.content }}</p>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import UsersService from "@/api/UsersService";
import BusinessService from "@/api/BusinessService";

export default {
  name: "ReviewComponent",
  components: {RoundImage, Rate},
  props: ['review'],
  data() {
    return {
      user: {
        id: 0,
        avatar: ''
      },
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
        .then(async res => {
          this.user = res.data
        }).catch(e => console.error(e))
    await BusinessService.getBusiness(this.review.businessId)
        .then(async res => {
          this.business = res.data
          if (this.business.category === null) this.business.category = "Not categorized"
        }).catch(e => console.error(e))
  }
}
</script>

<style scoped>

</style>