<template>
  <div id="app">
    <div class="p-12">
      <a><h1 v-on:click="reload" class="bold xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl text-2xl">BetterShop</h1></a>
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
      await router.push("/").then(()=> {
        window.location.reload()
      }).catch(e => console.warn(e))
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