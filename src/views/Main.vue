<script>
export default {
    name: "MainView"
  
}
</script>

<template>
  <html lang="en">
  <head>
    <title>2324_1DVO_WPL2_GROEP_13</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </head>
  <body>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Welkom op de teampagina van groep 13</h1>
        <p>Op deze pagina kan je meer te weten komen over de leden van groep 13</p>
        
        <li class="btn btn-primary">
        <router-link class="nav-link" to="/teampage"> Teampage</router-link>
    </li>
    <li class="btn btn-primary">
        <router-link class="nav-link" to="/home"> Ga naar Comfort meubel</router-link>
    </li>
      </div>
    </div>
  </div>
  </body>
  </html>
</template>

<style scoped>
.btn-primary{
  margin-right: 0.8rem;
}
  
</style>