<template>
    
  <div class="nft">
        <div class='main'>
          <img class='tokenImage' src="../../public/teampage/EbrarYasliFoto.jpg" alt="NFT" />
          <h2>Ebrar Yasli <br> 20</h2>
          <p class='description'>Student Digitale vormgeving in PXL Hasselt. Ik hou mij graag bezig met het maken van website binnen en buiten school projecten. Ik wil graag mijn
            team vaardigheden verbeteren en dingen bijleren. Ik ben leergierig en let veel op details ik wil altijd het beste uit mij zelf halen.
          </p>
        </div>
      </div>
  <div class="nft">
        <div class='main'>
            <img class='tokenImage' src="../../public/teampage/20231209_151217.jpg" alt="lukas" />
            <h2>Lukas Steelandt</h2>
            <p class='description'>Ik ben een student aan de PXL en ik studeer Digitale vormgeving met als afstudeer richting web, in mijn vrije tijd stream ik op twitch.</p>
            <hr />
        </div>
    </div>
<div class="nft">
    <div class='main'>
        <img class='tokenImage' src="../../public/teampage/Foto_kenneth.png" alt="foto_kennethgit" />
        <h2>Kenneth Vanspauwen<br>20</h2>
        <p class='description'>Student aan Hogeschool PXL digitale vormgeving, in mijn vrije tijd rijd ik motor. Alle mogelijke creative ideën worden uitgevoert doormiddel van een visueel design.</p>
        <div class='tokenInfo'>
            <div class="price">
                <ins></ins>
                <p></p>
            </div>
            <div class="duration">
                <ins></ins>
                <p></p>
            </div>
        </div>
        <hr />
    </div>
   </div>


    

      
    <div class="nft">
      <div class='main'>
        <img class='tokenImage' src="../../public/teampage/avatar.png" alt="NFT" />
        <h2>Jonas Peeters</h2>
        <p class='description'>Ik ben een gepassioneerde student die de ambitie heeft om front-end developer te worden, gespecialiseerd in webdesign en UI/UX design. Ik streef ernaar om te leren en ook heel goed te werken in een team dat de klus klaart. Ik probeer optimaal en efficiënt te werken, ik ben niet tevreden met een niet optimale snelle oplossing.</p>
        
      </div>
    </div>
    <div class="nft">
      <div class='main'>
          <img class='tokenImage' src="../../public/teampage/ImageMatthias.jpg" alt="foto_kennethgit" />
          <h2>Matthias Billen<br>20</h2>
          <p class='description'>Student aan Hogeschool PXL digitale vormgeving, in mijn vrije tijd game ik</p>
          <div class='tokenInfo'>
              <div class="price">
                  <ins></ins>
                  <p></p>
              </div>
              <div class="duration">
                  <ins></ins>
                  <p></p>
              </div>
          </div>
          <hr />
      </div>
    </div>


      
    

    





</template>

<script>
export default {
    name: "TeampageView"
  
}
</script>

<style scoped>

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(22, 20, 24) !important;
    color: #eee!important;
    user-select: none;
    display: flex
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  .nft{
    user-select:none;
    max-width: 300px;
    margin: 5rem auto;
    border: 1px solid #ffffff22;
    background-color: #282c34;
    background: linear-gradient(0deg, rgba(40,44,52,1) 0%, rgba(17,0,32,.5) 100%);
    box-shadow: 0 7px 20px 5px #00000088;
    border-radius: .7rem;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    overflow: hidden;
    transition: .5s all;
    hr{
      width: 100%;
      border: none;
      border-bottom: 1px solid #88888855;
      margin-top: 0;
    }
    ins{
      text-decoration: none;
    }
    .main{
      display: flex;
      flex-direction: column;
      width: 90%;
      padding: 1rem;
      .tokenImage{
        border-radius: .5rem;
        max-width: 100%;
        height: 250px;
        object-fit: cover;
      }
      h2{
        color: #FFF;
      }
      .description{
        margin: .5rem 0;
        color: #a89ec9;
      }
      .tokenInfo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price{
          display: flex;
          align-items: center;
          color: #ee83e5;
          font-weight: 700;
          ins{
            margin-left: -.3rem;
            margin-right: .5rem;
          }
        }
        .duration{
          display: flex;
          align-items: center;
          color: #a89ec9;
          margin-right: .2rem;
          ins{
            margin: .5rem;
            margin-bottom: .4rem;
          }
        }
      }
      .creator{
        display: flex;
        align-items: center;
        margin-top: .2rem;
        margin-bottom: -.3rem;
        ins{
          color: #a89ec9;
          text-decoration: none;
        }
        .wrapper{
          display: flex;
          align-items: center;
          border: 1px solid #ffffff22;
          padding: .3rem;
          margin: 0;
          margin-right: .5rem;
          border-radius: 100%;
          box-shadow: inset 0 0 0 4px #000000aa;
          img{
            border-radius: 100%;
            border: 1px solid #ffffff22;
            width: 2rem;
            height: 2rem;
            object-fit: cover;
            margin: 0;
          }
        }
      }
    }
    ::before{
      position: fixed;
      content: "";
      box-shadow: 0 0 100px 40px #ffffff08;
      top: -10%;
      left: -100%;
      transform: rotate(-45deg);
      height: 60rem;
      transition: .7s all;
    }
    &:hover{
      border: 1px solid #ffffff44;
      box-shadow: 0 7px 50px 10px #000000aa;
      transform: scale(1.015);
      filter: brightness(1.3);
      ::before{
        filter: brightness(.5);
        top: -100%;
        left: 200%;
      }
    }
  }
  .bg{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1{
      font-size: 20rem;
      filter: opacity(0.5);
    }
  }


</style>

