<template>
  <div class="flex flex-wrap">
    <round-image v-bind:photo="photo" v-bind:redirect-link="redirectLink"></round-image>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
export default {
  name: "BusinessProfile",
  components: {RoundImage},
  data() {
    return {
      redirectLink: '/',
      photo: "https://media.londolozi.com/wp-content/uploads/2018/03/20125221/ntsevu-Lioness-bw-JT-1398x932.jpg"
    }
  }
}
</script>

<style scoped>

</style>