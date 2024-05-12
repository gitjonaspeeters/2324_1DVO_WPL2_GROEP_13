<template>
    <div class="cart">
        <h1>Winkelwagen</h1>
        <div class="container">
            <div class="row">
                <div class="col-7 ">

                    <div class="item row">
                        <div class="col-4 ">
                            <img src="@/assets/image 2.png" alt="product">
                        </div>
                        <div class="product-text col-7">
                            <p class="product-title">Slaapkamer Ivette</p>
                            <p class="price"><strong>€2.534,00</strong> </p>
                            <div class="quantity">
                                <div class="quantitydelete-container">
                                    <div class="quantity">
                                        <button @click="decrement3">-</button>
                                        <p class="quantity-number">{{ quantity1 }}</p>
                                        <button @click="increment3">+</button>
                                    </div>
                                    <i class="trash fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item row">
                        <div class="col-4 ">
                            <img src="@/assets/image 2.png" alt="product">
                        </div>
                        <div class="product-text col-7">
                            <p class="product-title">Slaapkamer Ivette</p>
                            <p class="price"><strong>€2.534,00</strong> </p>
                            <div class="quantity">
                                <div class="quantitydelete-container">
                                    <div class="quantity">
                                        <button @click="decrement3">-</button>
                                        <p class="quantity-number">{{ quantity2 }}</p>
                                        <button @click="increment3">+</button>
                                    </div>
                                    <i class="trash fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item row">
                        <div class="col-4 ">
                            <img src="@/assets/image 2.png" alt="product">
                        </div>
                        <div class="product-text col-7">
                            <p class="product-title">Slaapkamer Ivette</p>
                            <p class="price"><strong>€2.534,00</strong> </p>
                            <div class="quantity">
                                <div class="quantitydelete-container">
                                    <div class="quantity">
                                        <button @click="decrement3">-</button>
                                        <p class="quantity-number">{{ quantity3 }}</p>
                                        <button @click="increment3">+</button>
                                    </div>
                                    <i class="trash fa-solid fa-trash"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="afrekenen col-3">
                    <div class="afrekenen-content">
                        <p class="total">Totaalprijs: <strong>€2534</strong></p>
                        <p class="shipping">Verzendkosten: <strong>€10</strong></p>
                        <p class="vat">BTW: <strong>€534</strong></p>
                        <input type="text" placeholder="Kortingscode" v-model="discountCode" class="discount-code">
                        <button @click="applyDiscount" class="apply-discount">Toepassen</button>
                        <button @click="checkout" class="checkout">Afrekenen</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div id="best-container">
        <div id="best-content">
            <div id="best-text">
                <p>Misschien ben je ook geintresseerd in dit?</p>
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
</template>

<script>


export default {
    name: 'CartView',
    components: {

    },
    data() {
        return {


            quantity1: 1,
            quantity2: 1,
            quantity3: 1,
            products: [
                { imageUrl: "/assets/TiffanySlaapkamer.png", productTitle: "Tiffany", productCategorie: "Slaapkamer", productPrice: "€879,00" },
                { imageUrl: "/assets/AndiceKaiWoonkamer.png", productTitle: "Andice Kai", productCategorie: "Woonkamer", productPrice: "€1.189,00" },
                { imageUrl: "/assets/LuncieBoucleStoel.png", productTitle: "Lucie Bouclé", productCategorie: "Stoelen", productPrice: "€99,00" }
            ]
        };

    }
    ,
    methods: {
        toggleLike(index) {
            event.preventDefault();
            this.products[index].liked = !this.products[index].liked;
        },
        handleIconClass(product) {
            return product.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        },
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


}

/* cart */
.cart {
    padding-top: 10rem;
    padding-left: 6rem;
    padding-bottom: 4rem;
    color: #485059;
    font-family: Georgia, sans-serif;
    background-color: #D9CAC5;


}

.cart h1 {
    font-size: 3rem;
    margin-bottom: 2rem;

}

.cart-content {

    position: relative;
}

.item {
    padding-bottom: 6px;
    background-color: #E8DFDC !important;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
}

.cart .product-title {
    font-size: 2rem;


}




.quantity {
    display: flex;
    align-items: center;
}

.quantity input {
    width: 0px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 0 2px;

}

.quantity button {
    padding-left: 5px;
    padding-right: 5px;
    padding-top: -2px;
    border: none;
    background-color: #F2B66D;
    color: #4C4C4C;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
}

.quantity button:hover {
    background-color: #ef9323;
}

.quantity-number {
    margin: 0 7px;
    font-size: 1.7rem;
}

.quantitydelete-container {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.trash {
    color: #F2B66D;
    cursor: pointer;
    background-color: #485059;
    padding: 7px;
    border-radius: 5px;
}

.trash:hover {
    background-color: #ef9323;
}

.price {
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 1.5rem;
}

.col-4 {
    width: 40% !important;
}

.afrekenen {
    background-color: #F2B66D;
    padding: 1rem;
    margin-left: 3rem;
    border-radius: 1rem;
    color: #485059;
    font-family: Georgia, sans-serif;
    font-size: 1.5rem;
    cursor: pointer;
    max-height: 30rem;
    display: flex;
}

.afrekenen-content {
    width: 100%;   
    justify-content: space-between;
}

.total, .shipping, .vat {
    display: flex;
    justify-content: space-between;
}

.discount-code {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.apply-discount, .checkout {
    background-color: #485059;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
}

.apply-discount:hover, .checkout:hover {
    background-color: #333;
}


/* likely products */
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
</style>