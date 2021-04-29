<template>
  <div v-if="alertOpen" class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
    <span class="text-xl inline-block mr-5 align-middle">
      <i class="fas fa-bell" />
    </span>
    <span class="inline-block align-middle mr-8">
      <b class="capitalize">Oops!</b> {{ message }}
    </span>
    <button
        class="border-none absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        v-on:click="close">
      <span class="text-white">×</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: ['message'],
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