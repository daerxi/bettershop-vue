<template>
    <input
        class="block border border-gray-300 w-full p-4 rounded mb-4"
        :name="name"
        :placeholder="name"
        :value="value" @input="$emit('input', $event.target.value)"
    />
</template>

<script>
export default {
  name: "InputComponent",
  props: ["value", "name"]
}
</script>

<style scoped>

</style>