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
import { openAlert, saveAuth } from "@/utils/helper";

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
      verificationCode: '',
      userToken: {}
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
        this.userToken = res.data
        saveAuth(this.userToken)
      }).catch(e => {
        openAlert(this, "error", e.response.data.error.toString())
      })
    }
  }
}
</script>