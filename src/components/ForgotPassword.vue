<template>
  <form-component :alert-open="alertOpen" :type="type" :message="message" title="Forgot Password">
    <input-component
        v-if="!isVerifying"
        type="email"
        name="Email"
        v-model="email"/>
    <submit-button v-if="!isVerifying" type="submit" title="Submit" :fn="forgot"/>
    <input-component
        v-if="isVerifying"
        type="text"
        name="Verification Code"
        v-model="verificationCode"/>
    <submit-button v-if="isVerifying" type="submit" title="Verify" :fn="verify"/>
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
      alertOpen: false,
      isVerifying: false,
      verificationCode: ''
    }
  },
  methods: {
    async forgot() {
      await UsersService.forgotPassword(this.email).then(async () => {
        openAlert(this, "success", "Check your email for verification code.")
        this.isVerifying = true
      }).catch(e => {
        openAlert(this, "error", e.response.data.error.toString())
      })
    },
    async verify() {
      await UsersService.verifyCode(this.verificationCode).then(async res => {
        localStorage.setItem('user-token', res.data.token)
        localStorage.setItem('user-id', res.data.userId)
        localStorage.setItem('authenticated', "true")
        await router.push('/')
      }).catch(e => {
        openAlert(this, "error", e.response.data.error.toString())
      })
    }
  }
}
</script>