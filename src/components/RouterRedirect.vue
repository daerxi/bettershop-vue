<template>
  <router-link v-on:click="reload" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "RouterRedirect",
  props: ['to'],
  methods: {
    async reload() {
      this.$router.go(this.redirectLink)
    }
  }
}
</script>s

<style scoped>

</style>