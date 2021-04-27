<template>
  <div>
    <search-bar></search-bar>
    <div class="flex flex-wrap p-8">
      <round-image v-bind:photo="photo" v-bind:redirect-link="redirectLink"></round-image>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
import SearchBar from "@/components/SearchBar";
export default {
  name: "BusinessProfile",
  components: {SearchBar, RoundImage},
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