<template>
  <body>
  <div class="middle">
    <div class="Container-Return-Home">
      <a href="HomeView.vue">Home/Categorieen</a>
    </div>
    <div class="container-First">
      <div class="container-Closet">
        <div class="Closet">
          <h1 class="hover-effect" id="hover-Closet">Kasten</h1>
        </div>
      </div>
      <div class="container-Chair-Desk">
        <div class="Chair">
          <h1 class="hover-effect">Stoelen</h1>
        </div>
        <div class="Desk">
          <h1 class="hover-effect">Bureaus</h1>
        </div>
      </div>
    </div>
    <div class="container-Second">
      <div class="container-Bed">
        <div class="Bed">
          <h1 class="hover-effect">Bedden</h1>
        </div>
      </div>
      <div class="container-Sofa">
        <div class="Sofa">
          <h1 class="hover-effect">Zetels</h1>
        </div>
      </div>
    </div>
    <div class="container-Last">
      <div class="Container-Home-Accessories">
        <div class="Home-Accessories">
          <h1 class="hover-effect">Woonaccessoires</h1>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>
<script>

</script>
<style scoped>
body {
  background: #D9CAC5;
}

.Container-Return-Home {
  margin-bottom: -15px;
}

h1 {
  padding: 15px;
  color: white;
}

a {
  margin: 30px;
  text-decoration: none;
  color: #A67C63;

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
  background-image: url("src/assets/HomeAccessories.png");
  background-color: grey;
  width: 1300px;
  height: 316px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
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
  /*background-color: grey;*/
  width: 755px;
  height: 656px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.Bed {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/Rectangle 295.png");
  /*background-color: grey;*/
  width: 513px;
  height: 656px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.Chair {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/stoelen.png");
  /*background-color: grey;*/
  width: 584px;
  height: 316px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}
.chair:hover h1{
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1s;
  width: 650px;
  padding: 15px;
}
.Desk {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("src/assets/Rousseau209741-220bureaustoel20chaise20de20bureau20Hippa201.jpg");
  /*background-color: grey;*/
  width: 584px;
  height: 316px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
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
  /*background-color: grey;*/
  width: 682px;
  height: 656px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.container-First {
  display: flex;
  margin: 15px;
}

.hover-effect {
}

.hover-effect:hover {
  background: white;
  opacity: 60%;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1s;
  width: 650px;
  padding: 15px;
}

#hover-Closet:hover {

}

@media screen and (max-width: 1200px) {
  .Container-Return-Home {
    margin-bottom: -15px;
    margin-left: 35px;
  }

  h1 {
    padding: 15px;
    color: white;
  }

  a {
    margin: -5px;
    text-decoration: none;
    color: #A67C63;

  }

  .middle {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    margin-bottom: -850px;
  }

  .container-Last {
    display: flex;
    margin: 15px;
  }

  .Home-Accessories {
    background-color: grey;
    width: 755px;
    height: 316px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
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

  .Bed {
    background-color: grey;
    width: 755px;
    height: 656px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Chair {
    background-color: grey;
    width: 755px;
    height: 316px;
    margin: 5px 15px 5px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Desk {
    background-color: grey;
    width: 755px;
    height: 316px;
    margin: 5px 15px 5px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Closet {
    background-color: grey;
    width: 755px;
    height: 656px;
    margin: 15px 15px 5px 15px;
    display: flex;
    align-items: flex-end;
  }

  .container-First {
    display: flex;
    margin: 15px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

  .hover-effect {
  }

  .hover-effect:hover {
    background: white;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1s;
    width: 650px;
    padding: 15px;

  }
}

@media screen and (max-width: 600px) {
  .Container-Return-Home {
    margin-bottom: -15px;
    margin-left: 0px;
  }

  h1 {
    padding: 15px;
    color: white;
  }

  a {
    margin: 30px;
    text-decoration: none;
    color: #A67C63;
  }

  .middle {
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    margin-bottom: -300px;
  }

  .container-Last {
    display: flex;
    margin: 15px;
  }

  .Home-Accessories {
    background-size: cover;
    background-repeat: no-repeat;
    /*background-color: grey;*/
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
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
    /*background-color: grey;*/
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Bed {
    background-image: url("src/assets/Bedden VD.png");
    /*background-color: grey;*/
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Chair {
    /*background-color: grey;*/
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Desk {
    /*background-color: grey;*/
    width: 402px;
    height: 385px;
    margin: 10px 15px 15px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Closet {
    /*background-color: grey;*/
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .container-First {
    display: flex;
    margin: 15px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
  }

  .hover-effect {

  }

  .hover-effect:hover {
    background: white;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1s;
    width: 650px;
    padding: 15px;
  }
}
</style>