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
</template>

<script>
export default {
  data() {
    return {
      currentSlideIndex: 0,
      slides: [
        { imageUrl: "../../assets/Banner1.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk"},
        { imageUrl: "../../assets/Banner1.png", headTitle: "Nieuwe collectie" , headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk"},
        { imageUrl: "../../assets/Banner1.png", headTitle: "Nieuwe collectie", headText: "Probeer nu onze nieuwe winter collectie!", headButton: "Bekijk" },
      ],
      products: [
        { imageUrl: "../../assets/TiffanySlaapkamer.png" , productTitle: "Tiffany Slaapkamer", productCategorie: "Slaapkamer" , productPrice: "€879,00" },
        { imageUrl: "../../assets/AndiceKaiWoonkamer.png", productTitle: "Tiffany Slaapkamer", productCategorie: "Slaapkamer" , productPrice: "€879,00" },
        { imageUrl: "../../assets/LuncieBoucleStoel.png", productTitle: "Tiffany Slaapkamer", productCategorie: "Slaapkamer" , productPrice: "€879,00" }
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
    toggleLike(index){
      event.preventDefault();
      this.products[index].liked = !this.products[index].liked;
    },
    handleIconClass(product) {
      return product.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
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
.head-content{
    position: relative;
    bottom: 14rem;
    left: 4rem;
    text-align: left;
    font-family: Georgia, sans-serif;
    max-width: 20rem;
}
.head-content h1{
    font-size: 2.5rem;
    color: #ffffff;
}
.head-content h2{
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
}
.head-content button{
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
#best-text{
  padding-top: 5rem;
  width: 80%;
  margin: 0 auto 2rem auto;
}
#best-text h1{
  color: #485059;
  font-family: Georgia, sans-serif;
  margin-bottom: -1px;
  font-size: 2.5rem;
}
#best-text p{
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
.product-like a{
  text-decoration: none;
  color:  #ffffff;
}
</style>

