<template>
  <div class="p-4">
    <section class="p-2">
      <div class="grid grid-cols-11 p-2">
        <div class="col-span-2">
          <round-image class="w-48" :redirect="redirectLink" :user="user"/>
          <rate :editable="editable" v-bind:rateValue="review.rate"/>
        </div>
        <div class="col-span-2"/>
        <div class="text-left w-full py-1 w-72 col-span-7">
<!--          <h3 class="text-xl font-semibold">{{ review }}</h3>-->
          <p class="text-gray-600">{{ review.content }}</p>
        </div>
      </div>
    </section>
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