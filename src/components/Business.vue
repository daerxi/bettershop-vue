<template>
  <div class="flex flex-wrap p-8">
    <round-image :user="businessUser"></round-image>
    <div class="block">{{ business.name }}</div>
    <br>
    <div class="block">
      <rate v-bind:rateValue="rateValue"></rate>
    </div>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import UsersService from "@/api/UsersService";
import { emptyAvatar } from "@/utils/validation";

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
      }
    }
  },
  async created() {
    await this.getBusinessUser();
  },
  methods: {
    async getBusinessUser() {
      if (this.business.userId > 0) {
        await UsersService.getUser(this.business.userId).then(res => {
          this.businessUser = res.data
          if (!this.businessUser.avatar) this.businessUser.avatar = emptyAvatar
          this.redirectLink = "/businesses/" + this.business.id
        })
      }
    }
  }
}
</script>

<style scoped>

</style>