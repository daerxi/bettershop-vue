<template>
  <div class="text-xl">
    <span v-for="(star,i) in stars" :key="i">
      <a v-on:click="assignNumber(i)">
        <span v-if="star">★</span>
      </a>
      <a v-on:click="assignNumber(i)">
        <span v-if="!star">☆</span>
      </a>
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
    await this.assignStar()
  },
  methods: {
    async assignStar() {
      for (let i = 0; i < 5; i++) {
        this.stars.push(parseInt(this.rateValue) > i)
      }
    },
    async assignNumber(i) {
      this.rateValue = i + 1
      console.log(this.rateValue)
      this.stars = []
      await this.assignStar()
    }
  }
}
</script>

<style scoped>

</style>