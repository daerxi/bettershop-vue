<template>
  <div class="h-16">
    <select :value="value" @input="$emit('input', $event.target.value)"
        class="transition-all block border border-gray-300 p-3.5 rounded mb-4 w-full text-sm" :name="id" :id="id" required>
      <option disabled class="rounded bg-transparent text-gray-300 p-2 w-full h-6 mb-4"
              value="">{{
          placeholder
        }}
      </option>
      <option v-for="(option,id) in options" :key="id"
              class="rounded bg-transparent text-gray-300 p-2 w-full h-6 mb-4">
        {{ option.type }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropdownComponent',
  data() {
    return {
      id: Number
    }
  },
  props: {
    options: Array,
    placeholder: String,
    value: String,
    fullLength: Boolean
  }
}
</script>