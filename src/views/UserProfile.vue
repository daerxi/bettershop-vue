<template>
  <div>
    <profile-component/>
    <div class="grid grid-cols-1 p-10">
      <div class="flex flex-wrap content-start px-12">
        <h2 v-if="isMe" class="p-4">Hi, {{ user.userName }}!</h2>
      </div>
      <div class="flex flex-wrap content-start px-12">
        <h3 v-if="isMe" class="p-4">My Review</h3>
      </div>
      <review-list :reviews="reviews"></review-list>
    </div>
  </div>
</template>

<script>
import ProfileComponent from "@/components/Profile";
import UsersService from "@/api/UsersService";
import ReviewList from "@/components/ReviewList";

export default {
  name: "UserProfile",
  components: {ReviewList, ProfileComponent},
  data() {
    return {
      reviews: [],
      user: {},
      isMe: false
    }
  },
  async created() {
    this.reviews = await UsersService.getReviewsByUserId(this.user.id)
  },
  methods: {}
}
</script>

<style scoped>

</style>