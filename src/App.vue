<template>
  <div class="app">
    <NavigationBar/>
    
      <router-view/>
      <Footer/>

  </div>
</template>

<script>
import NavigationBar from "./components/NavigationComponents/NavigationComponent.vue"
import Footer from "./components/FooterComponents/FooterComponent.vue"
export default {
    name: 'App',
    components: {
      NavigationBar,
      Footer
      
    }

}
</script>
