<template>
  <div>
    <profile-component></profile-component>
    <div class="grid grid-cols-1 p-10">
      <div class="flex flex-wrap content-start px-12">
        <h3 class="p-4">My Review</h3>
      </div>
      <div class="flex flex-wrap content-start px-4">
        <review></review>
      </div>
      <div class="flex flex-wrap content-start px-4">
        <review></review>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileComponent from "@/components/Profile";
import Review from "@/components/Review";
export default {
  name: "ProfilePage",
  components: {Review, ProfileComponent},
  data() {
    return {
      reviews: []
    }
  },
  async created() {
    // get reviews
  }
}
</script>

<style scoped>

</style>