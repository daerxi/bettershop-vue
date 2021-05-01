<template>
  <div v-if="alertOpen">
    <div v-if="type==='error'" class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
      <span class="inline-block align-middle mr-8">
        <b class="capitalize inline">Oops!</b> {{ message }}
      </span>
    </div>
    <div v-else class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500">
      <span class="inline-block align-middle mr-8">
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: ['type', 'message'],
  data() {
    return {
      alertOpen: true
    }
  }
}
</script>