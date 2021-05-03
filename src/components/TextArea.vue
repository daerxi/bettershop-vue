<template>
  <div class="py-2">
    <textarea class="block w-full text-black placeholder-gray-400
                     transition duration-100 ease-in-out bg-white border
                     border-gray-300 rounded shadow-sm focus:border-blue-500
                     focus:ring-2 focus:ring-blue-500 focus:outline-none
                     focus:ring-opacity-50  disabled:opacity-50
                     disabled:cursor-not-allowed h-48"
              placeholder=" Enter your thoughts here..."
              :value="value" @input="$emit('input', $event.target.value)">
    </textarea>
  </div>
</template>

<script>

export default {
  name: "TextArea",
  props: ["value"]
}
</script>

<style scoped>

</style>