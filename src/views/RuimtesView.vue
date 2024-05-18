<template>
    <div class="everywere">
    <div class="container">
      <div class="container-return-home">
        <router-link to="/"><p>Home/ruimtes</p></router-link>      
      </div>
      <div class="container-first">
        <div class="container-hallway-desk">
          <div class="hallway">
           <router-link to=""><p class="hover-effect">Hal</p></router-link> 
          </div>
          <div class="desk">
            <router-link to=""><p class="hover-effect">Bureaus</p></router-link>
          </div>
        </div>
        <div class="container-livingroom">
          <div class="livingroom">
            <router-link to=""><p class="hover-effect">Woonkamer</p></router-link>
          </div>
        </div>
      </div>
      <div class="container-second">
        <div class="container-bedroom">
          <div class="bedroom">
            <router-link to=""><p class="hover-effect">Slaapkamer</p></router-link>
          </div>
        </div>
        <div class="container-diningroom">
          <div class="diningroom">
            <router-link to=""><p class="hover-effect">Eetkamer</p></router-link>
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
    margin-left: 15px;
  }
  .container-return-home a{
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
    flex-wrap: wrap;
    align-content: center;
    margin-top: 150px;
    margin-bottom: -1250px;
  }
  
  .container-second {
    display: flex;
    margin: -15px 15px 15px 15px;
  }
  
  .container-hallway-desk {
    display: flex;
    flex-direction: column;
  }
  
  .container-livingroom {
    display: flex;
  }
  
  .hallway {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("@/assets/RuimtesImage2.png");
    
    width: 510px;;
    height: 316px;
    margin: 15px 5px 5px 5px;
    display: flex;
    align-items: flex-end;
  }
  .hallway:hover a{
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 650px;
    padding: 15px;
  }
  
  .diningroom {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("@/assets/EetkamerImageRuimtes.png");
    
    width: 487px;
    height: 680px;
    margin: 15px 0px 0px -12px;
    display: flex;
    align-items: flex-end;
  }
  .diningroom:hover a{
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 650px;
    padding: 15px;
  }
  .livingroom {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("@/assets/WoonkamerImageRuimtes.png");
    
    width: 737px;
    height: 656px;
    margin: 15px 5px 5px 5px;
    display: flex;
    align-items: flex-end;
  }
  .livingroom:hover a{
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 734px;
    padding: 15px;
  }
  
  .desk {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("@/assets/BureaImageRuimtes.png");
    
    width: 518px;
    height: 316px;
    margin: 15px 5px 5px 0px;
    display: flex;
    align-items: flex-end;
  }
  .desk:hover a{
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 515px;
    padding: 15px;
  }
  image {
    background-repeat: no-repeat;
  }
  
  .desk image {
    width: 584px;
    height: 316px;
  }
  
  .bedroom{
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("./assets/vanaf-1699-euro.jpeg");
    
    width: 777px;
    height: 673px;
    margin: 15px 15px 15px 0px;;
    display: flex;
    align-items: flex-end;
  }
  .bedroom:hover a{
    background: white;
    opacity: 60%;
    color: black;
    transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
    width: 773px;
    padding: 15px;
  }
  
  .container-first {
    display: flex;
    margin: 15px;
  }
  
  
  
  @media screen and (max-width: 1050px) {
    .container-return-home a{
      text-decoration: none;
      color: #A67C63;
      font-size: 1rem;
    }
    .container-return-home {
   margin: 150px 15px -60px 91px;
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
  
  
    .hallway {
      width: 750px;
      height: 750px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .hallway:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
      padding: 15px;
    }
  
    .container-second {
      display: flex;
      margin: -15px 15px 5px 15px;
      flex-direction: column;
      align-items: center;
    }
  
    .container-hallway-desk {
      display: flex;
      flex-direction: column;
    }
  
  
    .livingroom {
      
      width: 750px;
      height: 750px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .livingroom:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
      padding: 15px;
    }
  
    .bedroom {
      background-image: url("@/assets/Bedden VD.png");
      width: 750px;
      height: 750px;
      margin: 15px;
      display: flex;
      align-items: flex-end;
    }
    .bedroom:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
      padding: 15px;
    }
  
  
    .desk {
      
      width: 750px;
      height: 750px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .desk:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
      padding: 15px;
    }
  
    .diningroom {
      
      width: 750px;
      height: 750px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .diningroom:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
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
    .container-return-home a{
      text-decoration: none;
      color: #A67C63;
      font-size: 1rem;
    }
  .container-return-home{
    margin: 150PX 0px -50px 78px;
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
  
  
    .hallway {
      background-size: cover;
      background-repeat: no-repeat;

      width: 360px;
      height: 360px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .hallway:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
      padding: 15px;
    }
  
    .container-second {
      display: flex;
      margin: 15px;
      flex-direction: column;
      align-items: center;
    }
  
    .container-hallway-desk {
      display: flex;
      flex-direction: column;
    }
  
    .diningroom {
      background-size: cover;
      background-repeat: no-repeat;
      width: 360px;
      height: 360px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .diningroom:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
      padding: 15px;
    }
    .bedroom {
      background-image: url("@/assets/Bedden VD.png");
      
      width: 360px;
      height: 360px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .bedroom:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
      padding: 15px;
    }
    .livingroom {
      
      width: 360px;
      height: 360px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .livingroom:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
      padding: 15px;
    }
    .desk {
      
      width: 360px;
      height: 360px;
      margin: 25px 15px 25px 15px;
      display: flex;
      align-items: flex-end;
    }
    .desk:hover a{
      background: white;
      opacity: 60%;
      color: black;
      transition: width 1s ease-in-out 1s, height 1s ease-in-out, ease-in-out 1.5s;
      width: 773px;
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