<template>
    <div id="best-container">
        <div id="best-content">
            <div id="best-products">
                <div class="best-product" v-for="(product, index) in products" :key="index">
                    <div class="product-image" :style="{ backgroundImage: 'url(' + product.Images.Image1 + ')' }">
                        <div class="product-like">
                            <a href="#" @click="toggleLike(index)"><i :class="['fa', handleIconClass(product)]"></i></a>
                        </div>
                    </div>
                    <div class="product-content">
                        <div class="product-content-left">
                            <p>{{ product.Category }}</p>
                            <h1>{{ product.Name }}</h1>
                            <h2>{{ product.Price.Low }}</h2>
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
import axios from 'axios';

export default {
    name: 'ProductView',
    data() {
        return {
            products: [], 
        };
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        fetchProducts() {
            axios.get('/src/product.json')
                .then(response => {
                    console.log('Products:', response.data);
                    this.products = response.data;
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        toggleLike(index) {
            this.products[index].liked = !this.products[index].liked;
        },
        handleIconClass(product) {
            return product.liked ? 'fa-heart' : 'fa-heart-o';
        },
        toggleCart(index) {
            this.products[index].addedToCart = !this.products[index].addedToCart;
        },
    },
};

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


@media screen and (max-width: 1000px) {
    .image-container {}

    .overlay {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center
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
        width: 100%;
        z-index: 0;

    }

    .slogan-content-right img {
        width: 100%;
        border-radius: 0;
    }
}

@media screen and (max-width: 600px) {

    .banner-img {
        height: 300px !important;

    }

    .rooms {
        margin-top: -8rem !important;
    }

    .gallery {
        display: block;
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