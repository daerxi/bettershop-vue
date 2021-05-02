<template>
  <div class="p-8">
    <rate :editable="editable" v-bind:rateValue="review.rate"/>
    <round-image :user="user" :redirect="redirectLink"/>
    <p class="inline">{{ review.content }}</p>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import UsersService from "@/api/UsersService";

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
      redirectLink: ''
    }
  },
  async created() {
    await UsersService.getUser(this.review.userId)
        .then(async res => {
          this.user = res.data
          this.redirectLink = "/profile/" + this.review.userId
        }).catch(e => console.error(e))
  }
}
</script>

<style scoped>

</style>