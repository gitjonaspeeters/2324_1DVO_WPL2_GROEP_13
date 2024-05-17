<template>
  <div class="app">
    <NavigationBar/>
    <Cookie/>
    <router-view/>
    <AppFooter/>
  </div>
</template>


<script>
import NavigationBar from "./components/NavigationComponents/NavigationComponent.vue"
import AppFooter from "./components/FooterComponents/FooterComponent.vue"
import Cookie from "./components/CookieComponents/CookieComponents.vue"
export default {
    name: 'App',
    components: {
      NavigationBar,
      AppFooter,
      Cookie
    }

}
</script>
