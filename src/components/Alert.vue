<template>
  <div v-if="alertOpen">
    <div v-if="type==='error'" class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell"/>
      </span>
        <span class="inline-block align-middle mr-8">
        <b class="capitalize">Oops!</b> {{ message }}
      </span>
      <close-icon :close="close"></close-icon>
    </div>
    <div v-else class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500">
      <span class="text-xl inline-block mr-5 align-middle">
        <i class="fas fa-bell"/>
      </span>
      <span class="inline-block align-middle mr-8">
        {{ message }}
      </span>
      <close-icon :close="close"></close-icon>
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