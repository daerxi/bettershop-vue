<template>
  <div>
    <profile-button></profile-button>
    <div class="p-10">
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
import ProfileButton from "@/components/ProfileButton";
import Review from "@/components/Review";
export default {
  name: "ProfilePage",
  components: {Review, ProfileButton}
}
</script>

<style scoped>

</style>