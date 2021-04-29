<template>
  <div class="flex flex-wrap p-8">
    <round-image v-bind:photo="photo" v-bind:redirect-link="redirectLink"></round-image>
    <div class="block">{{ companyName }}</div>
    <br>
    <div class="block">
      <rate v-bind:rateValue="rateValue"></rate>
    </div>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";
export default {
  name: "Business",
  components: {RoundImage, Rate},
  props: ['photo', 'redirectLink', 'rateValue', 'companyName'],
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>