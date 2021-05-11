<template>
  <div class="flex flex-wrap content-start px-12">
    <h2 class="py-4 font-semibold text-xl">Wishlist - {{ businesses.length }}</h2>
    <business-list :businesses="businesses"/>
  </div>
</template>

<script>
import BusinessList from "@/components/BusinessList";
import WishlistService from "@/api/WishlistService";

export default {
  name: "WishlistItems",
  components: {BusinessList},
  data() {
    return {
      businesses: []
    }
  },
  async created() {
    this.businesses = await WishlistService.getWishlists()
  }
}
</script>

<style scoped>

</style>