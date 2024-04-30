<template>
  <div class="Everywere">
  <div class="container">
    <div class="Container-Return-Home">
      <router-link to="/home"><p>Home/Categorieen</p></router-link>
    </div>
    <div class="container-First">
      <div class="container-Closet">
        <div class="Closet">
          <a class="hover-effect">Kasten</a>
        </div>
      </div>
      <div class="container-Chair-Desk">
        <div class="Chair">
          <a class="hover-effect">Stoelen</a>
        </div>
        <div class="Desk">
          <a class="hover-effect">Bureaus</a>
        </div>
      </div>
    </div>
    <div class="container-Second">
      <div class="container-Bed">
        <div class="Bed">
          <a class="hover-effect">Bedden</a>
        </div>
      </div>
      <div class="container-Sofa">
        <div class="Sofa">
          <a class="hover-effect">Zetels</a>
        </div>
      </div>
    </div>
    <div class="container-Last">
      <div class="Container-Home-Accessories">
        <div class="Home-Accessories">
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
.Everywere {
  background: #D9CAC5;
  display: flex;
    flex-direction: column;
}

.Container-Return-Home {
  margin-bottom: -50px;
    margin-top: 150px;
    margin-left: 35px;
}

.Container-Return-Home a {
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

.container-Last {
  display: flex;
  margin: 15px;
}

.Home-Accessories {
  background-image: url("src/assets/HomeAccessoriesCategorie.png");
  background-color: grey;
  width: 1300px;
  height: 316px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.Home-Accessories:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 1500px;
  padding: 15px;
}

.container-Second {
  display: flex;
  margin: -15px 15px 15px 15px;
}

.container-Chair-Desk {
  display: flex;
  flex-direction: column;
}

.container-Closet {
  display: flex;
}

.Sofa {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/salon-kilimanjaro.jpg");
   
  width: 755px;
  height: 656px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.Sofa:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 755px;
  padding: 15px;
}

.Bed {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/Rectangle 295.png");
  width: 513px;
  height: 656px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.Bed:hover a {
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

.Desk {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/Rousseau209741-220bureaustoel20chaise20de20bureau20Hippa201.jpg");
   
  width: 584px;
  height: 316px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.Desk:hover a {
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

.Sofa image {
  background-repeat: no-repeat;
}

.Desk image {
  width: 584px;
  height: 316px;
}

.Closet {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/Kasten.png");
  width: 682px;
  height: 656px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.Closet:hover a {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
  width: 679px;
  padding: 15px;
}

.container-First {
  display: flex;
  margin: 15px;
}

@media screen and (max-width: 1200px) {
  body {
    background: #D9CAC5;
  }

  .Container-Return-Home {
            margin: 150px 14px -42px 87px;
  }

  .Container-Return-Home a {
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

  .container-Last {
    display: flex;
    margin: 15px 15px 15px 75px;
  }

  .Home-Accessories {
    background-color: grey;
    width: 755px;
    height: 316px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Home-Accessories:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .container-Second {
    display: flex;
    margin: -15px 15px 5px 15px;
    flex-direction: column;
    align-items: center;
  }

  .container-Chair-Desk {
    display: flex;
    flex-direction: column;
  }

  .container-Closet {
    display: flex;
  }

  .Sofa {
    background-color: grey;
    width: 755px;
    height: 656px;
    margin: -5px 15px 5px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Sofa:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .Bed {
    background-color: grey;
    width: 755px;
    height: 656px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Bed:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .Chair {
    background-color: grey;
    width: 755px;
    height: 316px;
    margin: 5px 15px 5px 15px;
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

  .Desk {
    background-color: grey;
    width: 755px;
    height: 316px;
    margin: 5px 15px -5px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Desk:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .Closet {
    background-color: grey;
    width: 755px;
    height: 656px;
    margin: 15px 15px 5px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Closet:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 1500px;
    padding: 15px;
  }

  .container-First {
    display: flex;
    margin: 15px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

}

@media screen and (max-width: 600px) {
  body {
    background: #D9CAC5;
  }

  .Container-Return-Home {
    margin-bottom: -15px;
  }

  .Container-Return-Home a {
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

  .container-Last {
    display: flex;
    margin: 15px 15px 15px 40px;
  }

  .Home-Accessories {
    background-size: cover;
    background-repeat: no-repeat;
     
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Home-Accessories:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 650px;
    padding: 15px;
  }

  .container-Second {
    display: flex;
    margin: 15px;
    flex-direction: column;
    align-items: center;
  }

  .container-Chair-Desk {
    display: flex;
    flex-direction: column;
  }

  .container-Closet {
    display: flex;
  }

  .Sofa {
    background-size: cover;
    background-repeat: no-repeat;
     
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Sofa:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 650px;
    padding: 15px;
  }

  .Bed {
    background-image: url("src/assets/Bedden VD.png");
     
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Bed:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 650px;
    padding: 15px;
  }

  .Chair {
    width: 402px;
    height: 385px;
    margin: 15px;
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

  .Desk {
     
    width: 402px;
    height: 385px;
    margin: 10px 15px 15px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Desk:hover a {
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 650px;
    padding: 15px;
  }

  .Closet {
     
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }
  .Closet:hover a{
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 650px;
    padding: 15px;
  }

  .container-First {
    display: flex;
    margin: 15px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
  }
  
}
</style>