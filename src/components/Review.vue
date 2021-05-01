<template>
  <div class="p-8">
    <rate :editable="editable" v-bind:rateValue="review.rate">
    </rate>
    <round-image :user="user" redirect=""></round-image>
    <p class="inline">{{ review.content }}</p>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";

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
      redirect: ''
    }
  },
  async created() {
    this.redirect = "/profile/" + this.user.id
  }
}
</script>

<style scoped>

</style>