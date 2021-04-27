<template>
  <!--for loop-->
  <div class="px-12 grid xl:grid-cols-10 2xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 gap-4">
    <router-link class="no-underline" to="food">
      <div
          class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
        <a class="text-white no-underline" href="#">Food</a></div>
    </router-link>

    <!--      demo-->
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Shop</a></div>
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Tech</a></div>
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Auto</a></div>
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Show</a></div>
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Pets</a></div>
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Home</a></div>
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Outdoor</a></div>
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Hotel</a></div>
    <div
        class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
      <a class="text-white no-underline" href="#">Entertainment</a></div>
  </div>
</template>

<script>
export default {
  name: "Categories"
}
</script>

<style scoped>

</style>