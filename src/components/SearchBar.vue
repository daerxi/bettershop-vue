<template>
  <div class="px-16 py-16">
    <input
        class="xl:w-7/12 lg:w-8/12 md:w-8/12 sm:w-10/12 h-16 px-3 rounded focus:outline-none focus:shadow-outline
               text-base shadow-lg placeholder-gray-500"
        type="search" placeholder="Search..."
        :value="value" @input="$emit('input', $event.target.value)"
    />
    <button type="submit" class="border-none bg-transparent">
      <svg fill="none"
           stroke="currentColor"
           stroke-linecap="round"
           stroke-linejoin="round"
           stroke-width="2"
           viewBox="0 0 24 24"
           class="w-5 h-5">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: ['value']
}
</script>

<style scoped>

</style>