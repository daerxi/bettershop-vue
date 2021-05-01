<template>
  <div v-if="alertOpen">
    <div v-if="type==='error'" class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
      <span class="inline-block align-middle mr-8">
        <b class="capitalize inline">Oops!</b> {{ message }}
      </span>
      <close-icon class="inline" :close="close"></close-icon>
    </div>
    <div v-else class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500"
         :class="{'text-sm':$isMobile}">
      <span class="inline-block align-middle mr-8">
        {{ message }}
      </span>
      <close-icon class="inline" :close="close"></close-icon>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/components/CloseIcon";

export default {
  name: "AlertComponent",
  components: {CloseIcon},
  props: ['type', 'message'],
  data() {
    return {
      alertOpen: true
    }
  },
  methods: {
    async close() {
      this.alertOpen = false;
    }
  }
}
</script>