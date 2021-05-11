<template>
  <div>
    <div class="flex flex-wrap content-start px-12">
      <h2 class="py-4 font-semibold text-xl">Review - {{ reviews.length }}</h2>
    </div>
    <div class="w-full block flex-wrap p-4">
      <div v-for="(review,i) in reviews" :key="i">
        <review-component v-if="showReviews[i]" :review="review"></review-component>
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
  data() {
    return {
      showReviews: [],
      updateResult: true
    }
  },
  async updated() {
    if (this.updateResult && (this.reviews === [] || this.reviews.length > 0)) {
      for (const i in this.reviews) {
        console.log(this.number, parseInt(i), parseInt(i) < parseInt(this.number) || !this.number)
        this.showReviews.push(parseInt(i) < parseInt(this.number) || !this.number)
      }
      this.updateResult = false
    }
  }
}
</script>

<style scoped>

</style>