<template>
  <div>
    <profile-component></profile-component>
    <search-bar></search-bar>
    <div class="flex flex-wrap p-8">
      <round-image v-bind:photo="photo" v-bind:redirect-link="redirectLink"></round-image>
      <rate v-bind:rateValue=3></rate>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
import SearchBar from "@/components/SearchBar";
import ProfileComponent from "@/components/Profile";
import Rate from "@/components/Rate";
export default {
  name: "BusinessProfile",
  components: {ProfileComponent, SearchBar, RoundImage, Rate},
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