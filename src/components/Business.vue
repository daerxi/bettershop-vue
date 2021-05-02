<template>
  <div class="flex flex-wrap py-4">
    <div>
      <round-image :redirect="redirectLink" :user="user"/>
    </div>
    <div class="block">{{ business.name }}</div>
    <div class="block">
      <rate :editable="editable" v-bind:rateValue="rateValue"/>
    </div>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import UsersService from "@/api/UsersService";

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
    },
    rateValue: Number
  },
  data() {
    return {
      redirectLink: "/",
      user: {},
      editable: false
    }
  },
  async created() {
    await this.getBusinessUser()
    this.redirectLink = "/businesses/" + this.business.id
  },
  methods: {
    async getBusinessUser() {
      if (this.business.userId > 0)
        await UsersService.getUser(this.business.userId)
            .then(res => this.user = res.data)
            .catch(e => console.error(e))
    }
  }
}
</script>

<style scoped>

</style>