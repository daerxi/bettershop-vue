<template>
  <form-component title="Edit Company Info">
    <input-component type="text" name="Company Name" v-model="company"></input-component>
    <dropdown-component class="h-6" :options="categories" placeholder="Please select your category"></dropdown-component>
    <input-component type="text" name="Description" v-model="description"></input-component>
    <input-component type="text" name="Website" v-model="website"></input-component>
    <input-component type="text" name="Country" v-model="ad.country"></input-component>
    <input-component type="text" name="Province" v-model="ad.province"></input-component>
    <input-component type="text" name="City" v-model="ad.city"></input-component>
    <input-component type="text" name="Address" v-model="ad.address"></input-component>
    <submit-button title="Submit" :fn="fn"></submit-button>
  </form-component>
</template>

<script>
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";
import DropdownComponent from "@/components/Dropdown";
import CategoriesService from "@/APIs/CategoriesService";
import SubmitButton from "@/components/SubmitButton";

export default {
  name: "CompanyInfoForm",
  components: {SubmitButton, DropdownComponent, InputComponent, FormComponent},
  data() {
    return {
      categories: [],
      company: '',
      category: '',
      website: '',
      description: '',
      ad: {
        country: '',
        province: '',
        city: '',
        address: ''
      }
    }
  },
  async created() {
    this.categories = await CategoriesService.getCategories()
    console.log(this.categories);
  },
  methods: {
    async fn() {}
  }
}
</script>

<style scoped>

</style>