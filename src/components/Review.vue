<template>
  <div class="p-8">
    <rate v-bind:rateValue=4>
    </rate>
    <round-image v-bind:photo="photo" v-bind:redirect-link="redirectLink"></round-image>
    <p class="inline">This is the most awesome product I have ever used.</p>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
import RoundImage from "@/components/RoundImage";

export default {
  name: "Review",
  components: {RoundImage, Rate},
  data() {
    return {
      redirectLink: '/',
      photo: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    }
  }
}
</script>

<style scoped>

</style>