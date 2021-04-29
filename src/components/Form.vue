<template>
  <div class="bg-grey-lighter p-5 flex flex-col">
    <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-5 text-3xl text-center">{{ title }}</h1>
        <alert-component v-if="alertOpen" :type="type">{{ message }}</alert-component>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import AlertComponent from "@/components/Alert";

export default {
  name: "FormComponent",
  components: {AlertComponent},
  props: ['title', 'type', 'message', 'alertOpen']
}
</script>

<style scoped>

</style>