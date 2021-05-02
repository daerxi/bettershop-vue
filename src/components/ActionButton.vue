<template>
  <a class="text-xs font-bold p-2 shadow-md rounded block leading-normal text-blueGray-600 bg-gray-100">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["title"]
}
</script>

<style scoped>

</style>