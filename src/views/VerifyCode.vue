<template>
  <form-component :alert-open="alertOpen" :type="type" :message="message" title="Verify code">
    <input-component
        type="text"
        name="Verification Code"
        v-model.trim="verificationCode"/>
    <submit-button title="Verify" :fn="verify"/>
    <div class="py-3"></div>
    <submit-button title="Resend" :fn="resend"/>
    <div v-if="resetPassword" class="text-gray-700 mt-6">
      Remember the password now?
      <a class="no-underline border-b border-grey-dark text-gray-700" href="../login">
        Login here
      </a>.
    </div>
  </form-component>
</template>

<script>
import UsersService from "@/api/UsersService";
import { openAlert, saveAuth } from "@/utils/helper";
import InputComponent from "@/components/Input";
import FormComponent from "@/components/Form";
import SubmitButton from "@/components/SubmitButton";

export default {
  name: "VerifyCode",
  components: {SubmitButton, FormComponent, InputComponent},
  data() {
    return {
      verificationCode: '',
      type: '',
      message: '',
      alertOpen: false,
      userToken: {},
      resetPassword: localStorage.getItem('reset-password')
    }
  },
  methods: {
    async verify() {
      await UsersService.verifyCode(this.verificationCode).then(async res => {
        this.userToken = res.data
        await saveAuth(this.userToken)
      }).catch(e => {
        openAlert(this, "error", e.response.data.error.toString())
      })
    },
    async resend() {
      await UsersService.forgotPassword(this.$cookies.get("forgot-password-email")).then(async () => {
        openAlert(this, "success", "Check your email for verification code.")
      }).catch(e => {
        openAlert(this, "error", e.response.data.error.toString())
      })
    }
  }
}
</script>

<style scoped>

</style>