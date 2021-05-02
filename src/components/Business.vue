<template>
  <section class="p-3">
    <div class="grid grid-cols-11 p-2">
      <div class="col-span-2">
        <round-image class="w-48" :redirect="redirectLink" :user="user"/>
        <rate :editable="editable" v-bind:rateValue="rateValue"/>
      </div>
      <div class="col-span-2"/>
      <div class="text-left w-full py-1 w-72 col-span-7">
        <h3 class="text-xl font-semibold">{{ business.name }}</h3>
        <p class="text-sm italic">{{ business.category }}</p>
        <p class="text-gray-600">{{ business.description }}</p>
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
  props: {
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
    }
  },
  data() {
    return {
      redirectLink: "/",
      user: {},
      editable: false,
      rateValue: Number
    }
  },
  async created() {
    await this.getBusinessUser()
    this.redirectLink = "/businesses/" + this.business.id
    await this.getRate()
  },
  methods: {
    async getBusinessUser() {
      if (this.business.userId > 0)
        await UsersService.getUser(this.business.userId)
            .then(res => this.user = res.data)
            .catch(e => console.error(e))
    },
    async getRate() {
      await BusinessService.getReviewsByBusinessId(this.business.id)
          .then(async res => this.rateValue = res.data.rate).catch(e => console.error(e))
    }
  }
}
</script>

<style scoped>

</style>