<template>
  <div class="container mx-auto py-20">
    <input class="w-7/12 h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-base px-8 shadow-lg" type="search" placeholder="Search...">

    <div class="grid xl:grid-cols-10 2xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 gap-4">
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Food</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Shop</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Tech</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Auto</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Show</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Pets</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Home</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Outdoor</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Hotel</a></div>
      <div class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800"><a class="text-white no-underline" href="#">Entertainment</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
}
</script>

<style scoped>

</style>