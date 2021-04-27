<template>
  <div class="bg-grey-lighter p-5 flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-5 text-3xl text-center">{{ title }}</h1>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  props: ['title']
}
</script>

<style scoped>

</style>