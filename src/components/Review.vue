<template>
  <div class="p-8">
    <rate v-bind:rateValue=review.rate>
    </rate>
    <round-image :user="user"></round-image>
    <p class="inline">{{ review.content }}</p>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import { emptyAvatar } from "@/utils/validation";

export default {
  name: "ReviewComponent",
  components: {RoundImage, Rate},
  props: ['review'],
  data() {
    return {
      user: {
        id: 0,
        avatar: ''
      }
    }
  },
  async created() {
    console.log(this.review)
  },
  async emptyAvatar() {
    if (this.user.avatar === null) this.user.avatar = emptyAvatar
  }
}
</script>

<style scoped>

</style>