<template>
  <div id="head-container">
    <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlideIndex">
      <img class="banner-img" :src="slide.imageUrl" style="width:100%">

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
        <span class="image-container">
          <router-link :to="{ name: 'products', query: { category: 'Sofa' } }">
            <img src="/src/assets/Gio-zetel.jpg" alt="Reflection image">
            <span class="overlay">Woonkamer</span>
          </router-link>
        </span>
        <span class="image-container">
          <router-link :to="{ name: 'products', query: { category: 'Dining Tables' } }">
            <img src="/src/assets/Tafel.jpg" alt="Reflection image 2">
            <span class="overlay">Eetkamer</span>
          </router-link>
        </span>
        <span class="image-container">
          <router-link :to="{ name: 'products', query: { category: 'Bed' } }">
            <img src="/src/assets/vanaf-1699-euro.jpeg" alt="Corekwadrant image">
            <span class="overlay">Slaapkamer</span>
          </router-link>
        </span>
      </div>
      <div class="images">
        <span class="image-container">
          <router-link :to="{ name: 'products', query: { category: 'Desk' } }">
            <img src="/src/assets/Bureastoel.jpg" alt="Seminair image">
            <span class="overlay">Bureau</span>
          </router-link>
        </span>
        <span class="image-container">
          <router-link :to="{ name: 'products', query: { category: 'Home accessories' } }">
            <img src="/src/assets/RuimtesImage2.png" alt="Dashboard of groupwork design">
            <span class="overlay">Hal</span>
          </router-link>
        </span>
        <span class="image-container">
          <router-link :to="{ name: 'products', query: { category: 'Sofa' } }">
            <img src="/src/assets/Gio-zetel.jpg" alt="Reflection image">
            <span class="overlay">Woonkamer</span>
          </router-link>
        </span>
      </div>
    </div>
    <img src="/src/assets/rightbtn.png" alt="arrow-right" id="nextbtn" @click="scrollRight">
  </div>
</div>


  <!-- best products -->
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
            <div class="product-content-left">
              <p>{{ product.productCategorie }}</p>
              <h1>{{ product.productTitle }}</h1>
              <h2>{{ product.productPrice }}</h2>
            </div>
            <div class="product-content-right">
              <a @click="toggleCart(index)">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid"
                  :class="{ 'fa-solid fa-plus': !product.addedToCart, 'fa-check': product.addedToCart }"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="slogan-container">
    <div id="slogan-content">
      <div class="slogan-content-left">
        <div class="slogan-left-text">
          <p>Comfort, <br>
            Betaalbaar en Betrouwbaar</p>
        </div>
      </div>
      <div class="slogan-content-right">
        <img src="@/assets/Betaalbaar.png" alt="afbeelding home pagina">
      </div>
    </div>
  </div>
  <!-- nieuwsbrief -->
  <div id="news-container">
    <div id="news-content" v-if="!submitted">
      <h1><i>Nieuwsbrief</i></h1>
      <div class="news-input">
        <input type="text" id="naam" name="naam" placeholder="Naam" v-model="naam" />
        <input type="email" id="email" name="email" placeholder="Email" v-model="email" />
        <button @click="submitForm">Inschrijven</button>
      </div>
    </div>
    <div class="news-input"  v-else>
      <p>Je hebt een mail ontvangen</p>
    </div>
  </div>
</template>
<script>



export default {
  data() {
    return {
      currentSlideIndex: 0,
      naam: '',
      email: '',
      submitted: false,
      slides: [
        { imageUrl: "/assets/Banner1.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk" },
        { imageUrl: "/assets/Banner2.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk" },
        { imageUrl: "/assets/Banner3.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk" },
      ],
      products: [
        { imageUrl: "/assets/TiffanySlaapkamer.png", productTitle: "Tiffany", productCategorie: "Slaapkamer", productPrice: "€879,00" },
        { imageUrl: "/assets/AndiceKaiWoonkamer.png", productTitle: "Andice Kai", productCategorie: "Woonkamer", productPrice: "€1.189,00" },
        { imageUrl: "/assets/LuncieBoucleStoel.png", productTitle: "Lucie Bouclé", productCategorie: "Stoelen", productPrice: "€99,00" }
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
    navigateToCategory(category) {
    this.$router.push({ name: 'products', query: { category } });
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
    },
    toggleCart(index) {
      this.products[index].addedToCart = !this.products[index].addedToCart;
    },

    
    async submitForm() {
      const response = await fetch('http://localhost:3000/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.naam,
          email: this.email
        })
      });
      if (response.ok) {
        this.submitted = true;
      }
    }
  }
};


 
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  position: relative;
  bottom: 12rem;
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

.head-content button:hover {
  background-color: #485059;
}

.banner-img img {
  width: 100%;

}

/* best verkocht */
#best-container {
  background-color: #E8DFDC;
  padding: 5rem 0;
}

#best-products {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

#best-text {
  width: 80%;
  margin: 0 auto 2rem auto;
}

#best-text h1 {
  color: #485059;
  font-family: Georgia, sans-serif;
  margin-bottom: -1px;
  font-size: 2.8rem;
}

#best-text p {
  color: #485059;
  font-family: Georgia, sans-serif;
  font-size: 1.8rem;
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
  /* border-radius: 2rem; */
  position: relative;
}

.product-like {
  position: absolute;
  top: 1rem;
  right: 0;
  background-color: #485059;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;

}

.product-like a {
  text-decoration: none;
  color: #ffffff;
  font-size: 2rem;
}

.product-content {
  display: flex;
  justify-content: space-between;
  font-family: "Century Gothic", sans-serif;
}

.product-content-left p {
  color: #888787;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}

.product-content-left h1 {
  font-size: 1.5rem;
  margin-left: 0.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.product-content-left h2 {
  color: #000000;
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 0.5rem;
}

/* product right */
.product-content-right {
  display: flex;
  align-items: center;
}

.product-content-right a {
  background-color: #F2B66D;
  padding: 0.8rem 0 0.5rem 0;
  border-radius: 10px;
  cursor: pointer;
}

.product-content-right i {
  font-size: 1.5rem;
  padding: 0 0.30rem 0 0.5rem;
}

/* carousel home */
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
  height: 280px;
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

/* slogan onderaan home */
#slogan-container {
  background-color: #E8DFDC;
  padding: 5rem 0;
}

#slogan-content {
  display: flex;
  width: 80%;
  margin: 0 auto;
}

.slogan-content-left {
  display: flex;
  justify-content: right;
  align-items: center;
  width: calc(50%);
  margin-right: -0.5rem;
}

.slogan-left-text {
  font-family: Georgia, sans-serif;
  color: #485059;
  background-color: #D9CAC5;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 3rem 0 0 3rem;
  font-size: 2.8rem;
  height: calc(50% - 1rem);
  width: 100%;
  display: flex;
  justify-content: left;
  padding-left: 10%;
  align-items: center;
  margin-top: 3rem;
  max-height: calc(50% - 1rem);
}

.slogan-content-right {
  width: calc(50%);
  z-index: 2;

}

.slogan-content-right img {
  width: 100%;
}

/* news letter */
#news-container {
  background-color: #E8DFDC;
  padding-bottom: 5rem;
}

#news-content {
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

#news-content h1 {
  color: #485059;
  margin-bottom: 1.5rem;
  text-decoration: underline;
  font-family: "Century Gothic", sans-serif;
  font-size: 2rem;
}

.news-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Century Gothic", sans-serif;
  color: #485059;
  font-size: 1.2rem;
  gap: 0.5rem;
}

.news-input input {
  border: none;
  padding: 0.8rem 1.5rem;

}

.news-input button {
  background-color: #F2B66D;
  /* border-radius: 0 20px 20px 0; */
  padding: 0.8rem 1.5rem;
  border: none;
  width: 100%;
}

.news-input button:hover {
  background-color: #485059;
  color: #ffffff;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

@media screen and (max-width: 1584px) {
  #best-text h1 {
    font-size: 2.5rem;
  }

  #best-text p {
    font-size: 1.5rem;
  }

  .slogan-left-text {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: 1448px) {
  #best-text h1 {
    font-size: 1.8rem;
  }

  #best-text p {
    font-size: 1.3rem;
  }

  .slogan-left-text {
    font-size: 1.8rem;
  }
}

@media screen and (max-width: 1382px) {
  .dot {
    bottom: 9rem;
  }

  .head-content {
    bottom: 10rem;
    left: 4rem;

    max-width: 15rem;
  }

  .head-content h1 {
    font-size: 2rem;
  }

  .head-content h2 {
    font-size: 1rem;
  }

  .head-content button {
    font-size: 1rem;
  }

  .product-content-left p {
    font-size: 1rem;
  }

  .product-content-left h1 {
    font-size: 1.2rem;
  }

  .product-content-left h2 {
    font-size: 1rem;
  }

  .product-like {
    padding: 0.20rem 0.3rem;

  }

  .product-like a {
    font-size: 1.2rem;
  }

  .product-content-right a {
    padding: 0.45rem 0 0.3rem 0;
  }

  .product-content-right i {
    font-size: 1.2rem;
    padding: 0 0.15rem 0 0.25rem;
  }
}

@media screen and (max-width: 1000px) {

  /* news letter */

  #news-content {
    align-items: center;
  }

  .news-input button {
    padding: 0.8rem 1rem;
  }

  .news-input button:hover {
    background-color: #485059;
    color: #ffffff;
  }


  .overlay {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center
  }

  #slogan-container{
    padding: 0 0 5rem 0;
  }

  .slogan-container {
    display: block;
    padding: 1rem;
    max-width: 100%;
    height: auto;
  }

  .dot {
    bottom: 9rem;
  }

  /* best products */
  #best-products {
    flex-direction: column;
    align-items: center;
  }

  .best-product {
    width: 100%;
    margin-right: 0;
    margin-bottom: 3rem;
  }

  .best-product:last-child {
    margin-bottom: 0;
  }

  .product-like {
    padding: 0.40rem 0.6rem;

  }

  .product-like a {
    font-size: 1.5rem;
  }

  .product-content-left p {
    font-size: 1.5rem;
  }

  .product-content-left h1 {
    font-size: 1.7rem;
  }

  .product-content-left h2 {
    font-size: 1.5rem;
  }

  .product-content-right a {
    padding: 0.90rem 0 0.6rem 0;
  }

  .product-content-right i {
    font-size: 2.4rem;
    padding: 0 0.30rem 0 0.50rem;
  }

  /* slogan */
  #slogan-content {
    flex-direction: column;
  }

  .slogan-content-left {
    width: 100%;
    margin-right: 0;
  }

  .slogan-left-text {
    box-shadow: none;
    border-radius: 0;
    font-size: 2.5rem;
    height: calc(50% - 1rem);
    width: 100%;
    display: flex;
    justify-content: left;
    padding: 3% 5%;
    align-items: center;
    margin-top: 3rem;
    max-height: calc(50% - 1rem);
  }

  .slogan-content-right {
    width: 100%;
    z-index: 0;

  }

  .slogan-content-right img {
    width: 100%;
    border-radius: 0;
  }
}

@media screen and (max-width: 600px) {
  .head-content {
    left: 1rem;
  }

  .dot {
    display: none;
  }

  .banner-img {
    height: 300px !important;

  }

  .rooms {
    margin-top: -8rem !important;
  }

  .gallery {
    display: block;
    margin-top: 1rem;
  }

  .gallery div,
  .gallery1 div {
    grid-template-columns: auto;
    overflow-x: hidden;
    width: 102%;
  }

  .gallery-buttons {
    flex-direction: column;
    align-items: center;
  }

  #backbtn,
  #nextbtn,
  #backbtn1,
  #nextbtn1 {
    display: none;
  }



  .product-content-left p {
    font-size: 1rem;
  }

  .product-content-left h1 {
    font-size: 1.2rem;
  }

  .product-content-left h2 {
    font-size: 1rem;
  }

  .product-content-right a {
    padding: 0.45rem 0 0.3rem 0;
  }

  .product-content-right i {
    font-size: 1.2rem;
    padding: 0 0.15rem 0 0.25rem;
  }
}</style>

