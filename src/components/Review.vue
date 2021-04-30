<template>
  <div class="p-8">
    <rate v-bind:rateValue=4>
    </rate>
    <round-image :user="user"></round-image>
    <p class="inline">This is the most awesome product I have ever used.</p>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import { userAvatar } from "@/utils/validation";

export default {
  name: "ReviewComponent",
  components: {RoundImage, Rate},
  data() {
    return {
      user: {
        avatar: userAvatar()
      }
    }
  }
}
</script>

<style scoped>

</style>