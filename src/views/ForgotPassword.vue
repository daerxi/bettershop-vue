<template>
  <form-component :alert-open="alertOpen" :type="type" :message="message" title="Forgot Password">
    <input-component
        type="email"
        name="Email"
        v-model="email"/>
    <submit-button type="submit" title="Submit" :fn="forgot"/>
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
import UsersService from "@/api/UsersService";
import { openAlert } from "@/utils/helper";
import { router } from "@/router";

export default {
  name: 'ForgotPassword',
  components: {SubmitButton, FormComponent, InputComponent},
  data() {
    return {
      email: '',
      type: '',
      message: '',
      alertOpen: false
    }
  },
  methods: {
    async forgot() {
      await UsersService.forgotPassword(this.email).then(async () => {
        openAlert(this, "success", "Check your email for verification code.")
        localStorage.setItem("reset-password", "true")
        await router.push('/verifyCode')
      }).catch(e => {
        openAlert(this, "error", e.response.data.error.toString())
      })
    }
  }
}
</script>