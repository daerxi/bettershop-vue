<template>
  <div>
    <div>
      <hr class="p-3">
      <p>Hey! The world has an end!</p>
      <div class="py-4"></div>
    </div>
    <footer class="flex flex-wrap items-center justify-between p-4">
      <div class="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">© 2021 Bofeng Li @ The University of Queensland
      </div>
      <div class="flex flex-col lg:flex-row items-center w-full lg:w-auto">
        <div class="mx-auto lg:mx-0 lg:ml-auto">
          <a class="inline-block mt-0 ml-8 text-gray-700" href="/donate">Donate</a>
          <a class="inline-block mt-0 ml-8 text-gray-700"
             href="https://github.com/daerxi/bettershop-vue">Github</a>
        </div>
        <div class="flex justify-center space-x-6 mt-4 lg:mt-0 lg:ml-8">
          <a href="mailto: bofeng.li@student.uq.edu.au">
            <svg class="text-gray-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
          <a class="cursor-pointer" @click="showModal">
            <svg class="text-gray-600 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
          </a>
          <ShareNetwork class="no-underline text-gray-800"
                        network="facebook"
                        url="159.65.243.244"
                        title="BetterShop - Improve your everyday life"
                        quote="Join us to know more about the products you are using daily"
                        hashtags="bettershop"
          >
            <font-awesome-icon class="text-gray-600 text-2xl" :icon="['fab', 'facebook']"/>
          </ShareNetwork>
          <ShareNetwork class="no-underline text-gray-800"
                        network="twitter"
                        url="159.65.243.244"
                        title="BetterShop - Improve your everyday life"
                        description="Join us to know more about the products you are using daily"
                        quote=""
                        hashtags="bettershop"
          >
            <font-awesome-icon class="text-gray-600 text-2xl" :icon="['fab', 'twitter']"/>
          </ShareNetwork>
          <ShareNetwork class="no-underline text-gray-800"
                        network="reddit"
                        url="159.65.243.244"
                        title="BetterShop - Improve your everyday life"
                        description="Join us to know more about the products you are using daily"
                        hashtags="bettershop"
          >
            <font-awesome-icon class="text-gray-600 text-2xl" :icon="['fab', 'reddit']"/>
          </ShareNetwork>
          <popup-modal :show="show" title="Share your link">
            <alert-component :type="type" :message="message" v-if="alertOpen"></alert-component>
            <input-component type="text" name="URL" v-model="currentURL"></input-component>
            <action-button :fn="copy" :block="false" title="Copy"></action-button>
            <action-button :fn="showModal" :block="false" title="Close"></action-button>
          </popup-modal>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import PopupModal from "@/components/PopupModal";
import InputComponent from "@/components/Input";
import { openAlert } from "@/utils/helper";
import ActionButton from "@/components/ActionButton";
import AlertComponent from "@/components/Alert";

export default {
  name: "FooterComponent",
  components: {AlertComponent, ActionButton, InputComponent, PopupModal},
  data() {
    return {
      show: false,
      currentURL: '',
      type: '',
      message: '',
      alertOpen: false
    }
  },
  methods: {
    async showModal() {
      this.show = !this.show
      this.currentURL = window.location.href
    },
    async copy() {
      let element = document.querySelector('#URL')
      element.setAttribute('type', 'text')
      element.select()

      try {
        const successful = document.execCommand('copy')
        const type = successful ? 'success' : 'error'
        const message = successful ? 'successfully' : "unsuccessfully"
        openAlert(this, type, "Your url was copied " + message)
      } catch (err) {
        openAlert(this, 'error', "Something wrong. Please try again.")
      }
    },
  }
}
</script>

<style scoped>

</style>