<template>
  <div>
    <form-component :alert-open="alertOpen" title="Edit User Info" :type="type" :message="message">
      <div class="p-3 fileInput">
        <large-round-image :key="user.avatar" :user="user" redirect=""></large-round-image>
      </div>
      <div class="p-3"></div>
      <input-component type="text" name="User name" v-model.trim="user.userName"></input-component>
<!--      TODO: POPUP-->
      <image-uploader
          :preview="false"
          :className="['fileinput']"
          capture="environment"
          :debug="1"
          :autoRotate="true"
          outputFormat="verbose"
          @input="setImage"
      ></image-uploader>
      <div class="p-3"></div>
      <submit-button title="Submit" :fn="updateInfo"></submit-button>
    </form-component>
  </div>
</template>

<script>
import FormComponent from "@/components/Form";
import InputComponent from "@/components/Input";
import SubmitButton from "@/components/SubmitButton";
import ImageUploader from 'vue-image-upload-resize'
import UsersService from "@/api/UsersService";
import LargeRoundImage from "@/components/LargeRoundImage";


export default {
  name: "EditUserProfile",
  components: {LargeRoundImage, SubmitButton, InputComponent, FormComponent, ImageUploader},
  data() {
    return {
      user: {},
      alertOpen: false,
      type: '',
      message: ''
    }
  },
  async created() {
    await UsersService.getMe().then(async res => this.user = res.data).catch(e => console.error(e))
  },
  methods: {
    async updateInfo() {
      UsersService.updateProfile(this.user.email, this.user.userName, this.user.avatar)
          .then(async res => console.log(res))
          .catch(e => console.error(e))
    },
    setImage: function (output) {
      this.user.avatar = output.dataUrl
    }
  },
}
</script>

<style scoped>

</style>