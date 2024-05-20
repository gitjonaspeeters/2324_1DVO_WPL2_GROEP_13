<template>
     <div class="confirm h-100 d-flex align-items-center justify-content-center">
        <div>
        <h1>Je bent succesvol geabboneerd op de nieuwsbrief</h1>
        <h2>Klik op de knop hieronder om te annuleren</h2>
        <button @click="deleteSubscription">Annuleren</button>
    </div>
    </div>



</template>

<script>
import ConfirmService from '../stores/ConfirmService.js'

export default {
    methods: {
        deleteSubscription() {
            ConfirmService.deleteSubscription(this.$route.params.token)
            this.$router.push( '/' )
        }
    }
}



</script>

<style scoped>
    .confirm {
        padding: 2rem;
        text-align: center;
        padding-top: 10rem;
        background-color: #E8DFDC;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-family: Georgia, sans-serif;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: #5c0000;
        color: #fff;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    button:hover {
        background-color: #290000;
    }
</style>