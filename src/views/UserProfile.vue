<template>
  <div>
    <profile-component></profile-component>
    <div class="grid grid-cols-1 p-10">
      <div class="flex flex-wrap content-start px-12">
        <h2 v-if="isMe" class="p-4">Hi, {{user.userName}}!</h2>
      </div>
      <div class="flex flex-wrap content-start px-12">
        <h3 v-if="isMe" class="p-4">My Review</h3>
      </div>
      <div class="flex flex-wrap content-start px-4">
        <review-component></review-component>
      </div>
      <div class="flex flex-wrap content-start px-4">
        <review-component></review-component>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileComponent from "@/components/Profile";
import UsersService from "@/api/UsersService";
import ReviewComponent from "@/components/Review";

export default {
  name: "UserProfile",
  components: {ReviewComponent, ProfileComponent},
  data() {
    return {
      reviews: [],
      user: {},
      isMe: false
    }
  },
  async created() {
    // get user info
    await this.getUserById()
    // get reviews
  },
  methods: {
    async getUserById() {
      this.isMe = !this.$route.params.userId
      if (!this.isMe) {
        await UsersService.getUser(this.$route.params.userId).then(async res => {
          this.user = res.data
        })
      } else {
        await UsersService.getMe().then(async res => {
          this.user = res.data
          console.log(this.user);
        })
      }
    }
  }
}
</script>

<style scoped>

</style>