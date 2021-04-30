<template>
  <div>
    <div v-for="(review,i) in reviews" :key="i" class="flex flex-wrap p-4">
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