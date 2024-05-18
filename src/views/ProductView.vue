<template>
    <div id="best-container">
        <div class="container">
            <div class="filter-toggle" @click="toggleFilterContent">
                <div class="filter-icon">☰</div>
            </div>
            <div class="row">
                <div class="filter col-md-2">
                    <div class="filter-content">
                        <h1>Filter</h1>
                        <div class="filter-content-left">
                            <h2>Category</h2>
                            <select v-model="filter.selectedCategory" @change="applyCategoryFilter">
                                <option value="all">All Categories</option>
                                <option v-for="category in filter.categories" :key="category" :value="category">{{ category
                                }}</option>
                            </select>
                            <h2>Price Range</h2>
                            <div id="priceSlider"></div>
                            <div class="d-flex">
                                <div class="m-1">
                                    <label for="minPrice">Min:</label>
                                    <input type="number" id="minPrice" v-model="filter.priceRange.min"
                                        @change="applyPriceFilter">
                                </div>
                                <div class="m-1">
                                    <label for="maxPrice">Max:</label>
                                    <input type="number" id="maxPrice" v-model="filter.priceRange.max"
                                        @change="applyPriceFilter">
                                </div>
                            </div>
                            <h2>Color</h2>
                            <div>
                                <select v-model="filter.selectedColor" @change="applyColorFilter">
                                    <option value="all">All Colors</option>
                                    <option v-for="color in uniqueColors" :key="color" :value="color">{{ color }}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="best-content" class="container col">
                    <div id="best-products" class="row">
                        <div class="best-product col-lg-4 col-md-6 mb-4" v-for="(product, index) in filteredProducts"
                            :key="index">
                            <div class="product-image" :style="{ backgroundImage: 'url(' + product.Images.Image1 + ')' }">
                                <div class="product-like">
                                    <a href="#" @click="toggleLike(index)"><i
                                            :class="['fa', handleIconClass(product)]"></i></a>
                                </div>
                            </div>
                            <div class="product-content">
                                <div class="product-content-left">
                                    <p>{{ product.Category }}</p>
                                    <router-link :to="{ name: 'product', params: { currentProductIndex: product.Id } }">
                                        <h1>{{ product.Name }}</h1>
                                    </router-link>
                                    <h2>{{ product.Price.Low || product.Price.Medium || product.Price.High }}</h2>
                                </div>
                                <div class="product-content-right">
                                    <a @click="toggleCart(index), addToCart(product.Id)">
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
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

export default {
    name: 'ProductView',
    data() {
        return {
            products: [],
            filteredProducts: [],
            filter: {
                categories: [],
                selectedCategory: 'all',
                priceRange: {
                    min: 0,
                    max: 7000
                },
                colors: [],
                selectedColor: 'all',
            },

        };
    },
    mounted() {
        this.fetchProducts();
        this.initializePriceSlider();
    },
    methods: {
        initializePriceSlider() {
            // Selecteer het element waarin de slider wordt weergegeven
            const priceSlider = document.getElementById('priceSlider');

            // Initialisatie van noUiSlider
            noUiSlider.create(priceSlider, {
                start: [this.filter.priceRange.min, this.filter.priceRange.max],
                connect: true,
                range: {
                    'min': 0,
                    'max': 7000 // Pas dit aan op basis van je maximale prijsbereik
                }
            });

            // Voeg een luisteraar toe om de prijsfilter toe te passen wanneer de slider wordt verplaatst
            priceSlider.noUiSlider.on('update', (values, handle) => {
                const [minPrice, maxPrice] = values.map(parseFloat);
                this.filter.priceRange.min = minPrice;
                this.filter.priceRange.max = maxPrice;
                this.applyPriceFilter();
            });
        },

        toggleFilterContent() {
            const filter = document.querySelector('.filter');
            filter.classList.toggle('expanded');
        },
        addToCart(id) {
            if (localStorage.getItem('cartItems') === null) {
                localStorage.setItem('cartItems', JSON.stringify([id]));
            } else {
                const cartItems = JSON.parse(localStorage.getItem('cartItems'));
                cartItems.push(id);
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
            }
            //reload page
            location.reload();

        },






        fetchProducts() {
            axios.get('/src/product.json')
                .then(response => {
                    this.products = response.data;
                    this.updateCategories();
                    this.applyCategoryFilter();
                    this.updateColors();
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
        updateCategories() {
            const categoriesSet = new Set();
            this.products.forEach(product => {
                categoriesSet.add(product.Category);
            });
            this.filter.categories = Array.from(categoriesSet);
        },
        toggleLike(index) {
            this.products[index].liked = !this.products[index].liked;
        },
        handleIconClass(product) {
            return product.liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
        },
        toggleCart(index) {
            this.products[index].addedToCart = !this.products[index].addedToCart;
        },
        getProductPrice(product) {
            return product.Price.Low || product.Price.Middle || product.Price.High || 'Price not available';
        },
        applyCategoryFilter() {
            if (this.filter.selectedCategory === 'all') {
                this.filteredProducts = this.products;
            } else {
                this.filteredProducts = this.products.filter(product => product.Category === this.filter.selectedCategory);
            }
        },
        //color use stored in json ass Color: Color1, Color2 and color4 is de max. Maar niet elke kleur heeft 4 kleuren sommige 1 2 etc
        updateColors() {
            const allColors = new Set();
            this.products.forEach(product => {
                if (product.Color) {
                    if (Array.isArray(product.Color)) {
                        product.Color.forEach(color => {
                            allColors.add(color);
                        });
                    } else {
                        allColors.add(product.Color);
                    }
                }
            });
            this.filter.colors = Array.from(allColors);
        },

        applyColorFilter() {
            this.filteredProducts = this.products.filter(product => {
                if (this.filter.selectedColor === 'all') {
                    return true; // Toon alle producten als 'All Colors' is geselecteerd
                } else {
                    if (product.Color) {
                        // Controleer of de kleur een object is met meerdere kleuren
                        if (typeof product.Color === 'object') {
                            // Controleer of de geselecteerde kleur voorkomt in een van de kleuren van het product
                            for (const key in product.Color) {
                                if (product.Color[key] === this.filter.selectedColor) {
                                    return true;
                                }
                            }
                            return false; // Geselecteerde kleur niet gevonden in productkleuren
                        } else {
                            return product.Color === this.filter.selectedColor; // Eén kleur, vergelijk met de geselecteerde kleur
                        }
                    } else {
                        return false; // Geen kleurinformatie voor het product
                    }
                }
            });
        },


        applyPriceFilter() {
            console.log("Initial products array:", this.products);

            this.filteredProducts = this.products.filter(product => {
                // Check if product exists
                if (!product) {
                    console.warn("Undefined product found:", product);
                    return false;
                }

                // Determine the price to use: Low, Medium, or High
                let priceStr = product.Price.Low || product.Price.Medium || product.Price.High;

                // Check if a valid price was found
                if (!priceStr) {
                    console.warn("Product without any valid price found:", product);
                    return false;
                }

                // Clean the price string
                priceStr = this.cleanPriceString(priceStr);
                const parsedPrice = parseFloat(priceStr);

                // Check if the parsed price is a valid number
                if (isNaN(parsedPrice)) {
                    console.warn("Parsed price is not a number:", priceStr);
                    return false;
                }

                console.log(`Product ${product.Name} has price: ${parsedPrice}`);


                return parsedPrice >= this.filter.priceRange.min && parsedPrice <= this.filter.priceRange.max;
            });

            console.log("Filtered products array:", this.filteredProducts);
        },
        cleanPriceString(priceStr) {
            return priceStr.replace(/€/g, '')
                .replace(/\./g, '')
                .replace(/,/, '.')
                .replace(/\.00$/, '');
        },
        getProductPrice(product) {

            let priceStr = product.Price.Low || product.Price.Medium || product.Price.High || 'Price not available';

            if (priceStr !== 'Price not available') {

                priceStr = this.cleanPriceString(priceStr);
            }

            return priceStr;
        },

    },
    computed: {
        uniqueColors() {
            const allColors = new Set();
            this.products.forEach(product => {
                if (product.Color) {
                    if (typeof product.Color === 'object') {
                        for (const key in product.Color) {
                            allColors.add(product.Color[key]);
                        }
                    } else {
                        allColors.add(product.Color);
                    }
                }
            });
            return Array.from(allColors);
        }

    }
};

</script>


<style scoped>

 a  {
    text-decoration: none !important;
    color: #000000;
}
.noUi-connect {
    background: #F2B66D !important;
}


.filter {
    padding: 20px;
    min-width: 280px;
    color: #485059;
    background-color: #BF9A84;
    border-radius: 0 10px 10px 0;
    font-family: Arial, sans-serif;
    max-height: 500px;

}

.filter h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #485059;
}

.filter h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    color: #555;
}

.filter select,
.filter input[type="number"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #f9d3bd;
    font-size: 16px;
    color: #444;
}

.fil .filter select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M7 10l5 5 5-5z" /></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 16px 16px;
}

.filter select::-ms-expand {
    display: none;
}

.filter label {
    display: block;
    margin-bottom: 5px;
    color: #666;
    font-size: 14px;
}



.filter-sidebar:hover {
    width: 200px;
    /* Breedte van de zijbalk bij hover */
}

.filter {
    position: fixed;
    top: 14rem;
    left: -300px;
    /* Initially hidden */
    width: 250px;
    height: 100%;
    background-color: #BF9A84;
    transition: left 0.3s ease;
    /* Smooth transition */
    z-index: 998;
    overflow-y: auto;
    padding: 20px;
}

.filter.expanded {
    left: 0;
    /* Visible state */
}

.filter-toggle {
    position: fixed;
    top: 20%;
    left: 0;
    background-color: #f9f9f9;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    z-index: 999;
    transition: background-color 0.3s ease;
}

.filter-toggle:hover {
    background-color: #e0e0e0;
}

.filter-icon {
    font-size: 24px;
}

@media screen and (max-width: 1000px) {
    .filter {
        width: 100%;
        left: -100%;
        transition: left 0.3s ease;
    }

    .filter.expanded {
        left: 0;
    }
}


#best-container {
    background-color: #E8DFDC;
    padding: 14rem 0;


}

#best-products {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.product-image {
    width: 100%;
    height: 0;
    padding-top: calc(100% / 1.1);
    background-repeat: no-repeat;
    background-size: cover;
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

.product-content-right a {
    display: flex;
    /* Toegevoegd */
    align-items: center;
    /* Toegevoegd */
    background-color: #F2B66D;
    padding: 0.8rem 0.5rem 0.5rem 0.5rem;
    /* Aangepast */
    border-radius: 10px;
    cursor: pointer;
    margin-top: 1rem;
}

.product-content-right i {
    font-size: 1.5rem;
    padding: 0 0.3rem;
    /* Aangepast */
}

@media screen and (max-width: 1000px) {
    .filter {
        min-width: auto;
        width: 100%;
        margin-bottom: 20px;
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
}
</style>
