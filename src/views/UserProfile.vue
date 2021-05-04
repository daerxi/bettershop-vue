<template>
  <div>
    <profile-component/>
    <div class="grid grid-cols-1 p-10">
      <div class="flex flex-wrap content-start px-12">
        <button class="bg-transparent" @click="showInput = true">
          <h2 class="py-4 text-3xl">
            <span v-if="isMe">Hi, </span>
            <span v-if="!isMe">User: </span>
            <span v-if="true">{{ user.userName }}!</span>
            <span v-if="false">
              <form @submit="showInput = false">
                <input-component class="inline-block" v-model="user.userName"/>
              </form>
            </span>
          </h2>
        </button>
      </div>
      <review-list :reviews="reviews"></review-list>
    </div>
  </div>
</template>

<script>
import ProfileComponent from "@/components/Profile";
import UsersService from "@/api/UsersService";
import ReviewList from "@/components/ReviewList";
import InputComponent from "@/components/Input";

export default {
  name: "UserProfile",
  components: {InputComponent, ReviewList, ProfileComponent},
  data() {
    return {
      reviews: [],
      user: {},
      isMe: false,
      showInput: false
    }
  },
  async created() {
    const id = parseInt(this.$route.params.userId)
    this.isMe = id === parseInt(this.$cookies.get('user-id'))
    await UsersService.getUser(id).then(async res => this.user = res.data)
    this.reviews = await UsersService.getReviewsByUserId(id)
  },
  methods: {}
}
</script>

<style scoped>

</style>