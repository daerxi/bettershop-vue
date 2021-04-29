<template>
  <div>
    <div v-for="(business,i) in businesses" :key="i" class="flex flex-wrap p-4">
      <business v-bind:business="business"
                v-bind:rateValue="rateValue"></business>
    </div>
  </div>
</template>

<script>
import Business from "@/components/Business";

export default {
  name: "BusinessList",
  components: {Business},
  props: ['businesses', 'rateValue']
}
</script>