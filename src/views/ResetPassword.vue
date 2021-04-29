<template>
  <form-component :type="type" :message="message" :alert-open="alertOpen">
    <input-component
        type="password"
        name="Password"
        v-model="password"/>

    <input-component
        type="password"
        name="Confirm your password"
        v-model="password2"/>
  </form-component>
</template>

<script>
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";

export default {
  name: "ResetPassword",
  components: {InputComponent, FormComponent},
  data() {
    return {
      alertOpen: false,
      type: '',
      message: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    async reset() {
      if (this.password !== this.password2) {
        //
      }
    }
  }
}
</script>

<style scoped>

</style>