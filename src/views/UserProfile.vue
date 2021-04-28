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
import {router} from "@/router";
import {userId, userToken} from "@/utils/validation";
import UsersService from "@/APIs/UsersService";

export default {
  name: "UserProfile",
  components: {Review, ProfileComponent},
  data() {
    return {
      reviews: [],
      user: {}
    }
  },
  async created() {
    // get user info
    await this.getUserById()
    // get reviews
  },
  methods: {
    async getUserById() {
      if (router.params.id) {
        await UsersService.getUser(userToken(), userId()).then(async res => {
          this.user = res.data
        })
      }
    }
  }
}
</script>

<style scoped>

</style>