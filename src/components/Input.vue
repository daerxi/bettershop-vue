<template>
  <div>
    <input
        class="transition-all block border border-gray-300 p-4 rounded mb-5 w-full"
        :name="name"
        :placeholder="name"
        :type="type"
        :id="name"
        :value="value" @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: ["value", "name", "type"]
}
</script>

<style scoped>
  input {
    box-sizing: border-box;
    border-width: 1px;
  }

  input:focus {
    outline: none;
  }
</style>