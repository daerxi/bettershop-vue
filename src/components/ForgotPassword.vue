<template>
  <form-component title="Forgot Password">
    <input-component
        type="email"
        name="Email"
        v-model="email"/>
    <submit-button title="Submit" :fn="forgot"/>
    <div class="text-gray-800 mt-6">
      Remember the password now?
      <a class="no-underline border-b border-grey-dark text-gray-800" href="../login">
        Login here
      </a>.
    </div>
  </form-component>
</template>

<script>

import InputComponent from "@/components/Input";
import FormComponent from "@/components/Form";
import SubmitButton from "@/components/SubmitButton";

export default {
  name: 'ForgotPassword',
  components: {SubmitButton, FormComponent, InputComponent},
  data() {
    return {
      error: '',
      email: '',
      success: ''
    }
  },
  methods: {
    async forgot() {
      //TODO
    }
  }
}
</script>