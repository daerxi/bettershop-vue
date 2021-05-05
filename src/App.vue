<template>
  <div>
    <cookie-banner :fn="enableCookie" v-if="!cookie"/>
    <div id="app">
      <div>
        <div :class="{'px-12': !$isMobile(), 'px-2': $isMobile()}"/>
        <nav-bar/>
        <div>
          <router-view class="p-6"/>
        </div>
      </div>
      <footer-component/>
    </div>
  </div>
</template>

<script>
import { router } from "@/router";
import { avoidDuplicatedNavigation } from "@/utils/helper";
import FooterComponent from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {NavBar, CookieBanner, FooterComponent},
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

a {
  box-sizing: border-box;
  border-width: 0;
}

#readmore {
  color: #5b8aa6;
  text-decoration: underline;
}

html {
  background: #f2f2f2;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

h1, h2, h3, h4 {
  color: #2c3e50
}

button {
  border: none;
  outline: none;
}

textarea {
  overflow: auto;
  margin: 10px;
}

.bg-bs-blue {
  background-color: #5b8aa6;
}

button:hover {
  background-color: #5c798a;
}

.text-bs-blue {
  color: #5b8aa6;
}

</style>