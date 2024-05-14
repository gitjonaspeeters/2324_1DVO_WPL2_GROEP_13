<template>
  <div class="app">
    <NavigationBar/>
    <router-view/>
    <AppFooter/>
  </div>
</template>


<script>
import NavigationBar from "./components/NavigationComponents/NavigationComponent.vue"
import AppFooter from "./components/FooterComponents/FooterComponent.vue"
export default {
    name: 'App',
    components: {
      NavigationBar,
      AppFooter
    }

}
</script>
