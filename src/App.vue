<template>
  <div>
    <cookie-banner :fn="enableCookie" v-if="!cookie"/>
    <div id="app">
      <div :class="{'p-12': !$isMobile(), 'p-2': $isMobile()}">
        <a>
          <h1 v-on:click="reload"
              v-bind:class="{'text-3xl': $isMobile(),
                           'text-2xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl': !$isMobile()}">
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
import CookieBanner from "@/components/CookieBanner";

export default {
  name: 'App',
  components: {CookieBanner, FooterComponent},
  data() {
    return {
      cookie: this.$cookies.get("acceptCookie")
    }
  },
  created() {

  },
  methods: {
    async reload() {
      await router.push("/").then(() => {
        window.location.reload()
      }).catch(e => avoidDuplicatedNavigation(e))
    },
    async enableCookie() {
      if (navigator.cookieEnabled)
        this.$cookies.set("acceptCookie", true, Infinity)
      this.cookie = true
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