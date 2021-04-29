<template>
  <div class="px-16 py-12" @submit="onSubmit" method="get">
    <form >
      <input
          v-model="keyword"
          class="w-7/12 h-16 px-3 rounded focus:outline-none focus:shadow-outline text-base shadow-lg placeholder-gray-500"
          type="search" placeholder="Search..."/>
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
    </form>
  </div>
</template>

<script>
import BusinessService from "@/APIs/BusinessService";

export default {
  name: "SearchBar",
  data() {
    return {
      keyword: '',
      businesses: []
    }
  },
  async created() {
  },
  methods: {
    async onSubmit() {
      this.businesses = await BusinessService.searchKeyword(this.keyword)
    }
  }
}
</script>

<style scoped>

</style>