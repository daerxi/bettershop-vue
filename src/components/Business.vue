<template>
  <div class="flex flex-wrap p-8">
    <round-image v-bind:photo="photo" v-bind:redirect-link="redirectLink"></round-image>
    <div class="block">Business Name</div>
    <br>
    <div class="block">
      <rate v-bind:rateValue=3></rate>
    </div>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
export default {
  name: "Business",
  components: {RoundImage, Rate},
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