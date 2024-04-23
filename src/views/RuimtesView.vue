<template>
    <body>
    <div class="middle">
      <div class="Container-Return-Home">
        <a href="HomeView.vue">Home/Ruimtes</a>
      </div>
      <div class="container-First">
        <div class="container-Hallway-Desk">
          <div class="Hallway">
            <h1 class="hover-effect">Hal</h1>
          </div>
          <div class="Desk">
            <h1 class="hover-effect">Bureaus</h1>
          </div>
        </div>
        <div class="container-Livingroom">
          <div class="Livingroom">
            <h1 class="hover-effect">Woonkamer</h1>
          </div>
        </div>
      </div>
      <div class="container-Second">
        <div class="container-Bedroom">
          <div class="Bedroom">
            <h1 class="hover-effect">Slaapkamer</h1>
          </div>
        </div>
        <div class="container-Diningroom">
          <div class="Diningroom">
            <h1 class="hover-effect">Eetkamer</h1>
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
  
  .container-Second {
    display: flex;
    margin: -15px 15px 15px 15px;
  }
  
  .container-Hallway-Desk {
    display: flex;
    flex-direction: column;
  }
  
  .container-Livingroom {
    display: flex;
  }
  
  .Hallway {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("src/assets/image 2.png");
    /*background-color: grey;*/
    width: 510px;;
    height: 316px;
    margin: 15px 5px 5px 5px;
    display: flex;
    align-items: flex-end;
  }
  
  .Diningroom {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("src/assets/38bb9aa5-6065-4770-b199-f74772a637c2 1.png");
    /*background-color: grey;*/
    width: 487px;
    height: 680px;
    margin: 15px 0px 0px -12px;
    display: flex;
    align-items: flex-end;
  }
  
  .Livingroom {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("src/assets/Gio-zetel 1.png");
    /*background-color: grey;*/
    width: 737px;
    height: 656px;
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
    background-image: url("src/assets/Screenshot_1-8 1.png");
    /*background-color: grey;*/
    width: 518px;
    height: 316px;
    margin: 15px 5px 5px 0px;
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
  
  .Bedroom{
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("src/assets/vanaf-1699-euro 1.png");
    /*background-color: grey;*/
    width: 777px;
    height: 673px;
    margin: 15px 15px 15px 0px;;
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
  
  
    .Hallway {
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
  
    .container-Hallway-Desk {
      display: flex;
      flex-direction: column;
    }
  
    .container-Closet {
      display: flex;
    }
  
    .Livingroom {
      background-color: grey;
      width: 755px;
      height: 316px;
      margin: -5px 15px 5px 15px;
      display: flex;
      align-items: flex-end;
    }
  
    .Bedroom {
      background-color: grey;
      width: 755px;
      height: 316px;
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
      height: 656px;
      margin: 5px 15px 5px 15px;
      display: flex;
      align-items: flex-end;
    }
  
    .Diningroom {
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
  
    .Hallway {
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
  
    .container-Hallway-Desk {
      display: flex;
      flex-direction: column;
    }
  
    .container-Closet {
      display: flex;
    }
  
    .Diningroom {
      background-size: cover;
      background-repeat: no-repeat;
      /*background-color: grey;*/
      width: 402px;
      height: 385px;
      margin: 15px;
      display: flex;
      align-items: flex-end;
    }
  
    .Bedroom {
      background-image: url("src/assets/Bedden VD.png");
      /*background-color: grey;*/
      width: 402px;
      height: 385px;
      margin: 15px;
      display: flex;
      align-items: flex-end;
    }
  
    .Livingroom {
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
    
    .hover-effect:hover {
      background: white;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1s;
      width: 650px;
      padding: 15px;
    }
  }
  </style>