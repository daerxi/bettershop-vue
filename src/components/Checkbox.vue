<template>
  <label class="inline-flex items-center mt-3 p-3 rounded mb-4">
    <input v-on:click="check" type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: ['label', 'check']
}
</script>

<style scoped>

</style>