<template>
  <div>
    <div class="flex flex-wrap content-start px-12">
      <h2 class="py-4">Review - {{ reviews.length }}</h2>
    </div>
    <div class="w-full block flex-wrap p-4">
      <div v-for="(review,i) in reviews" :key="i">
        <review-component v-if="showNumberOfReviews(i)" :rate="reviews" :review="review"></review-component>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewComponent from "@/components/Review";

export default {
  name: "ReviewList",
  components: {ReviewComponent},
  props: ['reviews', 'number'],
  methods: {
    async showNumberOfReviews(i) {
      return this.number > i
    }
  }
}
</script>

<style scoped>

</style>