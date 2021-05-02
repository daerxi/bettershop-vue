<template>
  <div class="p-4">
    <section>
      <div class="grid w-full" :class="{
      'xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-9 sm:grid-cols-6': !$isMobile(),
      'grid-cols-6': $isMobile()}">
        <div class="col-span-1 w-24">
          <round-image :redirect="redirectLink" :user="user"/>
          <rate :editable="editable" v-bind:rateValue="review.rate"/>
        </div>
        <div class="col-span-1"/>
        <div class="text-left py-1" :class="{'col-span-3': $isMobile(), 'xl:col-span-10 lg:col-span-8 md:col-span-7 sm:col-span-4': !$isMobile()}">
<!--          <h3 class="text-xl font-semibold">{{ review }}</h3>-->
          <p class="text-gray-700">{{ review.content }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
import UsersService from "@/api/UsersService";

export default {
  name: "ReviewComponent",
  components: {RoundImage, Rate},
  props: ['review'],
  data() {
    return {
      user: {
        id: 0,
        avatar: ''
      },
      editable: false,
      redirectLink: ''
    }
  },
  async created() {
    await UsersService.getUser(this.review.userId)
        .then(async res => {
          this.user = res.data
          this.redirectLink = "/profile/" + this.review.userId
        }).catch(e => console.error(e))
  }
}
</script>

<style scoped>

</style>