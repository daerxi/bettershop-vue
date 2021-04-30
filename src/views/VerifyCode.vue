<template>
  <form-component :alert-open="alertOpen" :type="type" :message="message" title="Forgot Password">
    <input-component
        type="text"
        name="Verification Code"
        v-model="verificationCode"/>
    <submit-button type="submit" title="Verify" :fn="verify"/>
    <div class="text-gray-800 mt-6">
      Remember the password now?
      <a class="no-underline border-b border-grey-dark text-gray-800" href="../login">
        Login here
      </a>.
    </div>
  </form-component>
</template>

<script>
import UsersService from "@/api/UsersService";
import { openAlert, saveAuth } from "@/utils/helper";

export default {
  name: "VerifyCode",
  data() {
    return {
      verificationCode: '',
      type: '',
      message: '',
      alertOpen: false,
      userToken: {}
    }
  },
  methods: {
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

<style scoped>

</style>