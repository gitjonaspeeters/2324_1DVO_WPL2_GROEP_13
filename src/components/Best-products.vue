<template>
  <div id="best-container">
    <div id="best-content">
      <div id="best-text">
        <p>Misschien ben je ook geintresseerd in dit?</p>
      </div>
      <div id="best-products">
        <div class="best-product" v-for="(product, index) in products" :key="index">
          <div class="product-image" :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }">

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
</template>

<script>
export default {
  name: 'Best-products',
  components: {

  },
  data() {
    return {
      products: [
        { imageUrl: "/assets/TiffanySlaapkamer.png", productTitle: "Tiffany", productCategorie: "Slaapkamer", productPrice: "€879,00" },
        { imageUrl: "/assets/AndiceKaiWoonkamer.png", productTitle: "Andice Kai", productCategorie: "Woonkamer", productPrice: "€1.189,00" },
        { imageUrl: "/assets/LuncieBoucleStoel.png", productTitle: "Lucie Bouclé", productCategorie: "Stoelen", productPrice: "€99,00" },

      ]
    };

  }
}
</script>

<style scoped>
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
  border-radius: 2rem;
  position: relative;
}

.product-like {
  position: absolute;
  top: 1rem;
  right: 4px;
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
}

.product-content-left h2 {
  color: #000000;
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 0.5rem;
}

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

@media screen and (max-width: 1000px) {

}

@media screen and (max-width: 480px) {
  #best-products {
    flex-direction: column;
    align-items: center;
  }

  .best-product {
    width: 90%;
    margin-bottom: 1rem;
  }

  .product-content-left p,
  .product-content-left h1,
  .product-content-left h2 {
    margin-left: 0;
  }
}

</style>