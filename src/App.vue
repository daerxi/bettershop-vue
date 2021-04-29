<template>
  <div id="app">
    <div class="p-24">
      <a><h1 v-on:click="reload" class="bold text-5xl">BetterShop</h1></a>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { router } from "@/router";

export default {
  name: 'App',
  methods: {
    async reload() {
      await router.push("/")
      window.location.reload()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>