<template>
  <div id="app">
    <router-link class="p-10 no-underline text-black" to="/">
      <h1 class="bold text-5xl">BetterShop</h1>
    </router-link>
    <RouterView></RouterView>
  </div>
</template>

<script>


export default {
  name: 'App'
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