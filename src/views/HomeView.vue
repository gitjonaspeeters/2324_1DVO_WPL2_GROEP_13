<template>
  <div id="head-container">
    <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlideIndex">
      <img :src="slide.imageUrl" style="width:100%">

      <div style="text-align:center">
        <div class="head-content">
          <h1>{{ slide.headTitle }}</h1>
          <h2>{{ slide.headText }}</h2>
          <button>{{ slide.headButton }}</button>
        </div>
        <span class="dot" v-for="(slide, index) in slides" :key="index" @click="currentSlide(index)"
          :class="{ 'active': index === currentSlideIndex }"></span>
      </div>
    </div>
  </div>
  <div id="rooms" class="rooms">
    <div class="gallery-buttons">
      <img src="/src/assets/leftbtn.png" alt="arrow-left" id="backbtn" @click="scrollLeft">
      <div class="gallery" id="image-gallery">
        <div class="images">
          <span class="image-container"><img src="/src/assets/Gio-zetel 1.png" alt="Reflection image"><span
              class="overlay">Woonkamer</span></span>
          <span class="image-container"><img src="/src/assets/38bb9aa5-6065-4770-b199-f74772a637c2 1.png"
              alt="Reflection image 2"><span class="overlay">Eetkamer</span></span>
          <span class="image-container"><img src="/src/assets/vanaf-1699-euro 1.png" alt="Corekwadrant image"><span
              class="overlay">Slaapkamer</span></span>
        </div>
        <div class="images">
          <span class="image-container"><img src="/src/assets/Screenshot_1-8 1.png" alt="Seminair image"><span
              class="overlay">Bureau</span></span>
          <span class="image-container"><img src="/src/assets/image 2.png" alt="Dashboard of groupwork design"><span
              class="overlay">Hal</span></span>
          <span class="image-container"><img src="/src/assets/Gio-zetel 1.png" alt="Reflection image"><span
              class="overlay">Woonkamer</span></span>
        </div>
      </div>
      <img src="/src/assets/rightbtn.png" alt="arrow-right" id="nextbtn" @click="scrollRight">
    </div>
  </div>


  <div id="best-container">
    <div id="best-content">
      <div id="best-text">
        <h1>Best verkocht</h1>
        <p>Passen deze artikelen ook bij jou?</p>
      </div>
      <div id="best-products">
        <div class="best-product" v-for="(product, index) in products" :key="index">
          <div class="product-image" :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }">
            <div class="product-like">
              <a href="#" @click="toggleLike(index)"><i :class="['fa', handleIconClass(product)]"></i></a>
            </div>
          </div>
          <div class="product-content">
            <p>{{ product.productCategorie }}</p>
            <h1>{{ product.productTitle }}</h1>
            <p>{{ product.productPrice }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="slogan-container">
    <div class="slogan">Comfort, <br/> Betaalbaar en Betrouwbaar</div>
    <img src="@/assets/AdobeStock_478155843 1.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        { imageUrl: "/src/assets/Banner1.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk" },
        { imageUrl: "/src/assets/Banner1.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk" },
        { imageUrl: "/src/assets/Banner1.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk" },
      ],
      products: [
        { imageUrl: "/src/assets/TiffanySlaapkamer.png", productTitle: "Tiffany Slaapkamer", productCategorie: "Slaapkamer", productPrice: "€879,00" },
        { imageUrl: "/src/assets/AndiceKaiWoonkamer.png", productTitle: "Tiffany Slaapkamer", productCategorie: "Slaapkamer", productPrice: "€879,00" },
        { imageUrl: "/src/assets/LuncieBoucleStoel.png", productTitle: "Tiffany Slaapkamer", productCategorie: "Slaapkamer", productPrice: "€879,00" }
      ]
    };
  },
  mounted() {
    this.showSlides();
  },
  methods: {
    showSlides() {
      setInterval(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      }, 4000);
    },
    currentSlide(index) {
      this.currentSlideIndex = index;
    },
    toggleLike(index) {
      event.preventDefault();
      this.products[index].liked = !this.products[index].liked;
    },
    handleIconClass(product) {
      return product.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    },

    scrollLeft() {
      const gallery = document.querySelector('.gallery');
      gallery.scroll({
        left: gallery.scrollLeft - 300,
        behavior: 'smooth'
      });
    },

    scrollRight() {
      const gallery = document.querySelector('.gallery');
      gallery.scroll({
        left: gallery.scrollLeft + 300,
        behavior: 'smooth'
      });
    }

  }
};
</script>


<style scoped>

img {
  vertical-align: middle;
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}


.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  position: relative;
  bottom: 14rem;
}

.active {
  background-color: #717171;
}

/* content head */
.head-content {
  position: relative;
  bottom: 14rem;
  left: 4rem;
  text-align: left;
  font-family: Georgia, sans-serif;
  max-width: 20rem;
}

.head-content h1 {
  font-size: 2.5rem;
  color: #ffffff;
}

.head-content h2 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
}

.head-content button {
  padding: 0.3rem 1.3rem;
  font-size: 1.5rem;
  border-radius: 1.8rem;
  color: #ffffff;
  background-color: #F2B66D;
  border: none;
}

/* best verkocht */
#best-container {
  background-color: #D9CAC5;
}

#best-products {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

#best-text {
  padding-top: 5rem;
  width: 80%;
  margin: 0 auto 2rem auto;
}

#best-text h1 {
  color: #485059;
  font-family: Georgia, sans-serif;
  margin-bottom: -1px;
  font-size: 2.5rem;
}

#best-text p {
  color: #485059;
  font-family: Georgia, sans-serif;
  font-size: 1.2rem;
}

.best-product {
  width: calc(30% - 1rem);
  margin-right: 1rem;
}

.product-image {
  width: 100%;
  height: 0;
  padding-top: calc(100% / 1.1);
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2rem;
  position: relative;
}

.product-like {
  position: absolute;
  top: 1rem;
  right: 3px;
  background-color: #485059;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;

}

.product-like a {
  text-decoration: none;
  color: #ffffff;
}

.rooms {
  margin-top: -11rem !important;
}

.rooms h1,
.rooms h1 {
  margin-left: 45% !important;
  margin-top: 250px;
  color: #D0DAE4;


}



.gallery::-webkit-scrollbar,
.gallery1::-webkit-scrollbar {
  display: none;
}


.gallery div,
.gallery1 div {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  padding: 10px;
  flex: none;

}

.gallery div img,
.gallery1 div img {
  width: 100%;

}

.gallery-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4% auto;
}

.gallery p,
.gallery1 p {
  color: white;
}

#backbtn,
#nextbtn,
#backbtn1,
#nextbtn1 {
  width: 50px;
  cursor: pointer;
  margin: 40px;

}




#container {
  display: grid;
    grid-template-columns: auto auto;
}

#avatar {
  margin: 2rem;
  margin-left: 5rem;
  width: 100%;
}

#about {
  margin: 10rem;

}



.gallery,
  .gallery1 {
    width: 80%;
    display: flex;
    overflow-x: scroll;
  }


  .images {
    display: flex;
    gap: 1rem;
  }


.image-container {
  position: relative;
  display: inline-block;
}

.image-container img {
  transition: filter 0.3s ease;
}

.image-container:hover img {
  filter: brightness(70%);
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
  padding: 10px;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
  opacity: 1;
}


.slogan-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #BF9A84;
}

.slogan {
  font-size: 2rem;
  font-family: Georgia, sans-serif;
  color: #485059;
  padding: 4rem;
  margin-top: 4rem;

  margin-right: -1rem;
  border-radius: 40px 0px  0px 40px ;
  background-color: #D9CAC5;
}



@media screen and (max-width: 1000px) {
  #container {
    
    display: flex;


  }

  
  .gallery,
.gallery1 {
  width: 1100px;
  display: block;
  overflow-x: scroll;
}
  



  .slogan-container{
    display: block;
    padding: 1rem;
    max-width: 100%;
    height: auto;
  }
}</style>

