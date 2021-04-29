<template>
  <div>
    <div v-for="business in businesses" :key="i" class="flex flex-wrap p-4">
      <business v-bind:company-name="business.name" v-bind:photo="photo" v-bind:redirect-link="redirectLink"
                v-bind:rateValue="rateValue"></business>
    </div>
  </div>
</template>

<script>
import Business from "@/components/Business";

export default {
  name: "BusinessList",
  components: {Business},
  props: ['businesses', 'photo', 'redirectLink', 'rateValue']
}
</script>

<style scoped>

</style>