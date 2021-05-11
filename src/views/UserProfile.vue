<template>
  <div>
    <div class="grid grid-cols-1 p-10">
      <div class="flex flex-wrap content-start px-12">
        <a class="bg-transparent" @click="showInput = true">
          <h2 class="py-4 font-bold text-3xl">
            <span v-if="isMe">Hi, </span>
            <span v-if="!isMe">User: </span>
            <span v-if="true">{{ user.userName }}!</span>
            <span v-if="false">
              <form @submit="showInput = false">
                <input-component class="inline-block" v-model="user.userName"/>
              </form>
            </span>
          </h2>
        </a>
      </div>
      <review-list v-if="!user.isBusiness" :reviews="reviews"/>
      <wishlist-items v-if="!user.isBusiness"/>
    </div>
  </div>
</template>

<script>
import UsersService from "@/api/UsersService";
import ReviewList from "@/components/ReviewList";
import InputComponent from "@/components/Input";
import WishlistItems from "@/components/WishlistItems";

export default {
  name: "UserProfile",
  components: {WishlistItems, InputComponent, ReviewList},
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