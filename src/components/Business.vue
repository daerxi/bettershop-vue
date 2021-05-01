<template>
  <div class="flex flex-wrap py-4">
    <round-image :redirect="redirectLink" :user="businessUser"></round-image>
    <div class="block">{{ business.name }}</div>
    <br>
    <div class="block">
      <rate :editable="editable" v-bind:rateValue="rateValue"></rate>
    </div>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import UsersService from "@/api/UsersService";
import { emptyAvatar, userId } from "@/utils/validation";

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
      businessUser: {
        avatar: ''
      },
      editable: false
    }
  },
  async created() {
    await this.getBusinessUser()
    if (userId() !== this.business.userId) {
      this.redirectLink = "/businesses/" + this.business.id
    } else {
      this.redirectLink = "/business/profile"
    }
  },
  methods: {
    async getBusinessUser() {
      if (this.business.userId > 0) {
        await UsersService.getUser(this.business.userId).then(res => {
          this.businessUser = res.data
          if (!this.businessUser.avatar) this.businessUser.avatar = emptyAvatar
        })
      }
    }
  }
}
</script>

<style scoped>

</style>