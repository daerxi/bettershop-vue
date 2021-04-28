<template>
  <div>
    <profile-button></profile-button>
    <search-bar></search-bar>
    <categories></categories>
    <business></business>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileButton from "@/components/Profile";
import Categories from "@/components/Categories";
import BusinessService from "@/APIs/BusinessService";
import Business from "@/components/Business";

export default {
  name: "Home.vue",
  components: {
    Business,
    Categories,
    SearchBar,
    ProfileButton
  },
  data() {
    return {
      business: false,
      authenticated: false,
      user: {},
      wholeLists: [],
      lists: []
    }
  },
  async created() {
    this.lists = await BusinessService.getBusinesses()
    if (this.$route.params.type)
      this.lists = await BusinessService.getBusinessByType(this.$route.params.type)
  },
  methods: {
  }
}
</script>

<style scoped>

</style>