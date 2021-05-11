<template>
  <div class="py-12">
    <div v-for="(business,i) in businesses" :key="i" class="flex">
      <business-component v-bind:business="business"/>
    </div>
  </div>
</template>

<script>

import BusinessComponent from "@/components/Business";
export default {
  name: "BusinessList",
  components: {BusinessComponent},
  props: ['businesses']
}
</script>