<template>
  <div class="middle">
    <div class="Container-Return-Home">
      <a href="">Home/categorie</a>
    </div>
    <div class="container-First">
      <div class="container-Closet">
        <div class="Closet">
          <h1 class="hover-effect">Kasten</h1>
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
</template>
<script>

</script>
<style scoped>
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
  color: black;

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
  background-color: grey;
  width: 755px;
  height: 656px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.Bed {
  background-color: grey;
  width: 513px;
  height: 656px;
  margin: 15px;
  display: flex;
  align-items: flex-end;
}

.Chair {
  background-color: grey;
  width: 584px;
  height: 316px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.Desk {
  background-color: grey;
  width: 584px;
  height: 316px;
  margin: 15px 5px 5px 5px;
  display: flex;
  align-items: flex-end;
}

.Closet {
  background-color: grey;
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
  background: grey;
}

.hover-effect:hover {
  background: lightblue;
  color: black;
  transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1s;
  width: 650px;
  padding: 15px;
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
    color: black;

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
    background: grey;
  }

  .hover-effect:hover {
    background: lightblue;
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
    color: black;
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
    background-color: grey;
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
    background-color: grey;
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Bed {
    background-color: grey;
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Chair {
    background-color: grey;
    width: 402px;
    height: 385px;
    margin: 15px;
    display: flex;
    align-items: flex-end;
  }

  .Desk {
    background-color: grey;
    width: 402px;
    height: 385px;
    margin: 10px 15px 15px 15px;
    display: flex;
    align-items: flex-end;
  }

  .Closet {
    background-color: grey;
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
    background: grey;
  }

  .hover-effect:hover {
    background: lightblue;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1s;
    width: 650px;
    padding: 15px;
  }
}
</style>