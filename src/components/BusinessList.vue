<template>
  <div class="py-12">
    <div v-for="(business,i) in businesses" :key="i" class="flex">
      <business v-bind:business="business"/>
    </div>
  </div>
</template>

<script>
import Business from "@/components/Business";

export default {
  name: "BusinessList",
  components: {Business},
  props: ['businesses']
}
</script>