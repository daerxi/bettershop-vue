<template>
  <form-component title="Edit Company Info">
    <alert-component message="haha"></alert-component>
    <input-component type="text" name="Company Name" v-model="business.name"></input-component>
    <dropdown-component class="h-6" v-model="business.category" :options="categories"
                        placeholder="Please select your category"></dropdown-component>
    <input-component type="text" name="Description" v-model="business.description"></input-component>
    <input-component type="text" name="Website" v-model="business.website"></input-component>
    <input-component type="text" name="Country" v-model="business.country"></input-component>
    <input-component type="text" name="Province" v-model="business.province"></input-component>
    <input-component type="text" name="City" v-model="business.city"></input-component>
    <input-component type="text" name="Address" v-model="business.address"></input-component>
    <submit-button title="Submit" :fn="updateInfo"></submit-button>
  </form-component>
</template>

<script>
import {userToken} from "@/utils/validation";
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";
import DropdownComponent from "@/components/Dropdown";
import CategoriesService from "@/APIs/CategoriesService";
import SubmitButton from "@/components/SubmitButton";
import BusinessService from "@/APIs/BusinessService";
import AlertComponent from "@/components/Alert";

export default {
  name: "CompanyInfoForm",
  components: {AlertComponent, SubmitButton, DropdownComponent, InputComponent, FormComponent},
  data() {
    return {
      categories: [],
      business: {
        name: '',
        category: '',
        website: '',
        description: '',
        country: '',
        province: '',
        city: '',
        address: ''
      }
    }
  },
  async beforeCreate() {
    this.categories = await CategoriesService.getCategories()
    this.business = await this.getInfo()
  },
  methods: {
    async updateInfo() {
      await BusinessService.updateInfo(userToken(), this.business).then(async res => {
        console.log(res)
      }).catch(e => {
        console.error(e)
      })
    },
    async getInfo() {
      await BusinessService.getInfo(userToken()).then(async res => {
        this.business = res.data
        console.log(this.business)
      })
    }
  }
}
</script>

<style scoped>

</style>