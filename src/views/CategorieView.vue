<template>
  <div class="everywere">
  <div class="container">
    <div class="container-return-home">
      <router-link to="/"><p>Home/Categorieën</p></router-link>
    </div>
    <div class="container-first">
      <div class="container-closet">
        <div class="closet">
          <a class="hover-effect">Kasten</a>
        </div>
      </div>
      <div class="container-Chair-desk">
        <div class="Chair">
          <a class="hover-effect">Stoelen</a>
        </div>
        <div class="desk">
          <a class="hover-effect">Bureaus</a>
        </div>
      </div>
    </div>
    <div class="container-second">
      <div class="container-bed">
        <div class="bed">
          <a class="hover-effect">Bedden</a>
        </div>
      </div>
      <div class="container-sofa">
        <div class="sofa">
          <a class="hover-effect">Zetels</a>
        </div>
      </div>
    </div>
    <div class="container-last">
      <div class="container-home-accessories">
        <div class="home-accessories">
          <a class="hover-effect">Woonaccessoires</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>

</script>
<style scoped>
.everywere {
  background: #D9CAC5;
  display: flex;
    flex-direction: column;
}

.container-return-home {
  margin-bottom: -50px;
    margin-top: 150px;
    margin-left: 35px;
}

.container-return-home a {
  text-decoration: none;
  color: #A67C63;
  font-size: 1rem;
  margin: 15px;
}


a {
  padding: 15px;
  color: white;
  font-size: 2rem;
  text-decoration: none;
}

.middle {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  margin-top: 150px;
  margin-bottom: -1250px;
}

.container-last {
  display: flex;
  margin: 15px;
}

.home-accessories {
  background-image: url("src/assets/homeaccessoriesCategorie.png");
   
  width: 1300px;
  height: 316px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.home-accessories:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 1500px;
  padding: 15px;
}

.container-second {
  display: flex;
  margin: -15px 15px 15px 15px;
}

.container-Chair-desk {
  display: flex;
  flex-direction: column;
}

.container- closet {
  display: flex;
}

.sofa {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/salon-kilimanjaro.jpg");
   
  width: 755px;
  height: 656px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.sofa:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 755px;
  padding: 15px;
}

.bed {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/Rectangle 295.png");
  width: 513px;
  height: 656px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.bed:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 511px;
  padding: 15px;
}

.Chair {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/stoelen.png");
  width: 584px;
  height: 316px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.Chair:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 650px;
  padding: 15px;
}

.desk {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/Rousseau209741-220bureaustoel20chaise20de20bureau20Hippa201.jpg");
   
  width: 584px;
  height: 316px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.desk:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 650px;
  padding: 15px;
}

image {
  background-repeat: no-repeat;
}

.sofa image {
  background-repeat: no-repeat;
}

.desk image {
  width: 584px;
  height: 316px;
}

.closet {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/Kasten.png");
  width: 682px;
  height: 656px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.closet:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 679px;
  padding: 15px;
}

.container-first {
  display: flex;
  margin: 15px;
}

@media screen and (max-width: 1050px) {
  body {
    background: #D9CAC5;
  }

  .container-return-home {
   margin: 150px 15px -60px 91px;
  }

  .container-return-home a {
    text-decoration: none;
    color: #A67C63;
    font-size: 1rem;
  }


  a {
    padding: 15px;
    color: white;
    font-size: 2rem;
    text-decoration: none;
  }

  .middle {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    margin-bottom: -850px;
  }

  .container-last {
    display: flex;
    justify-content: center;
  }

  .home-accessories {
     
    width: 750px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .home-accessories:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .container-second {
    display: flex;
    margin: -15px 15px 5px 15px;
    flex-direction: column;
    align-items: center;
  }

  .container-Chair-desk {
    display: flex;
    flex-direction: column;
  }

  .container- closet {
    display: flex;
  }

  .sofa {
    width: 750px;
    height: 750px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .sofa:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .bed {
    width: 750px;
    height: 750px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .bed:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .Chair {
     
    width: 750px;
    height: 750px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Chair:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .desk {
     
    width: 750px;
    height: 750px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .desk:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .closet {
     
    width: 750px;
    height: 750px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .closet:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .container-first {
    display: flex;
    margin: 15px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

}

@media screen and (max-width: 850px) {
  body {
    background: #D9CAC5;
  }

  .container-return-home {
    margin: 150PX 0px -50px 78px;
  }

  .container-return-home a {
    text-decoration: none;
    color: #A67C63;
    font-size: 1rem;
  }


  a {
    padding: 15px;
    color: white;
    font-size: 2rem;
    text-decoration: none;
  }

  .middle {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    margin-bottom: -300px;
  }

  .container-last {
    display: flex;
  }

  .home-accessories {
    background-size: cover;
    background-repeat: no-repeat;
    width: 360px;
    height: 360px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .home-accessories:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 360px;
    padding: 15px;
  }

  .container-second {
    display: flex;
    margin: 15px;
    flex-direction: column;
    align-items: center;
  }

  .container-Chair-desk {
    display: flex;
    flex-direction: column;
  }

  .container- closet {
    display: flex;
  }

  .sofa {
    background-size: cover;
    background-repeat: no-repeat;
     
    width: 360px;
    height: 360px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .sofa:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 360px;
    padding: 15px;
  }

  .bed {
    background-image: url("src/assets/bedden VD.png");
    width: 360px;
    height: 360px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .bed:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 360px;
    padding: 15px;
  }

  .Chair {
    width: 360px;
    height: 360px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Chair:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 360px;
    padding: 15px;
  }

  .desk {
     
    width: 360px;
    height: 360px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }

  .desk:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 360px;
    padding: 15px;
  }

  .closet {
     
    width: 360px;
    height: 360px;
    margin: 25px 15px 25px 15px;
    display: flex;
    align-items: flex-end;
  }
  .closet:hover a{
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 360px;
    padding: 15px;
  }

  .container-first {
    display: flex;
    margin: 15px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
  }
  
}
</style>