<template>
  <div class="p-8">
    <rate v-bind:rateValue=4>
    </rate>
    <img class="inline object-cover border-none w-16 h-16 mr-2 rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
    <p class="inline">This is the most awesome product I have ever used.</p>
  </div>
</template>

<script>
import Rate from "@/components/Rate";
export default {
  name: "Review",
  components: {Rate}
}
</script>

<style scoped>

</style>