<template>
  <div>
    <span v-for="star in stars" :key="star">
      <span v-if="star">★</span>
      <span v-else>☆</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "Rate",
  props: ['rateValue'],
  data() {
    return {
      stars: []
    }
  },
  async created() {
    for (let i = 0; i < 5; i++) {
      this.stars.push(parseInt(this.rateValue) > i)
    }
  }
}
</script>

<style scoped>

</style>