<template>
  <section :key="business.id" class="py-4">
    <div class="grid w-full" :class="{
      'xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-9 sm:grid-cols-6': !$isMobile(),
      'grid-cols-6': $isMobile()}">
      <div class="col-span-1 w-24">
        <round-image :redirect="redirectLink" :user="user"/>
        <rate :key="rateValue" :editable="editable" :rateValue="rateValue"/>
      </div>
      <div class="col-span-1"/>
      <div class="text-left py-1" :class="{'col-span-3': $isMobile(),
                                           'xl:col-span-10 lg:col-span-8 md:col-span-7 sm:col-span-4': !$isMobile()}">
        <h3 class="text-xl font-semibold">{{ business.name }}</h3>
        <p class="text-sm italic">{{ business.category }}</p>
        <p class="text-gray-600">{{ business.description }}</p>
        <a class="no-underline" :href="website"><p class="text-gray-600">{{ business.website }}</p></a>
        <p class="text-gray-600"
           v-if="business.address && business.city && business.province && business.country">
          {{business.address}}, {{business.city}}, {{business.province}}, {{ business.country }}
        </p>

      </div>
    </div>
  </section>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import UsersService from "@/api/UsersService";
import BusinessService from "@/api/BusinessService";

export default {
  name: "Business",
  components: {RoundImage, Rate},
  props: ['business'],
  data() {
    return {
      redirectLink: "/",
      user: {},
      editable: false,
      rateValue: 0,
      website: ''
    }
  },
  async mounted() {
    if (this.business !== {}) {
      await this.getBusinessUser()
      await this.getRate()
      if (this.business && this.business.website && !this.business.website.includes("http"))
        this.website = "https://" + this.website
      else this.website = this.business.website

      this.redirectLink = "/businesses/" + this.business.id
    }
  },
  methods: {
    async getBusinessUser() {
      await UsersService.getUser(this.business.userId)
          .then(async res => {
            this.user = res.data
            await this.getRate()
          })
          .catch(e => console.error(e))
    },
    async getRate() {
      await BusinessService.getReviewsByBusinessId(this.business.id)
          .then(async res => this.rateValue = res.data.rate)
          .catch(e => console.error(e))
    }
  }
}
</script>

<style scoped>

</style>