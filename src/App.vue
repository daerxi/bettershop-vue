<template>
  <div>
    <cookie-banner :fn="enableCookie" v-if="!cookie"/>
    <div id="app">
      <div :class="{'p-12': !$isMobile(), 'p-2': $isMobile()}">
        <a>
          <h1 v-on:click="reload"
              v-bind:class="{'text-3xl': $isMobile(),
                           'text-2xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl': !$isMobile()}">
            BetterShop</h1>
        </a>
        <router-view></router-view>
      </div>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import { router } from "@/router";
import { avoidDuplicatedNavigation } from "@/utils/helper";
import FooterComponent from "@/components/Footer";
import CookieBanner from "@/views/CookieBanner";

export default {
  name: 'App',
  components: {CookieBanner, FooterComponent},
  data() {
    return {
      cookie: navigator.cookieEnabled
    }
  },
  methods: {
    async reload() {
      await router.push("/").then(() => {
        window.location.reload()
      }).catch(e => avoidDuplicatedNavigation(e))
    },
    async enableCookie() {
      this.cookie = !this.cookie
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

html {
  background: #f2f2f2;
}
</style>