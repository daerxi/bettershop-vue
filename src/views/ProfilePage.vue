<template>
  <div>
    <profile-button></profile-button>
    <review></review>
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