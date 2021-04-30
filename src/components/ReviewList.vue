<template>
  <div class="w-full block flex-wrap p-4">
    <div v-for="(review,i) in reviews" :key="i">
      <review-component :review="review"></review-component>
    </div>
  </div>
</template>

<script>
import ReviewComponent from "@/components/Review";

export default {
  name: "ReviewList",
  components: {ReviewComponent},
  props: ['reviews']
}
</script>

<style scoped>

</style>