<template>
    //confirm subsctiprion suvves message with remove button to Confirlservice.js deleteSubscription(token)

    <div>
        <h1>Je bent succesvol geabboneerd op de nieuwsbrief</h1>
        <h2>Klik op de knop hieronder om te annuleren</h2>
        <button @click="deleteSubscription">Annuleren</button>
    </div>



</template>

<script>
import ConfirmService from '../services/ConfirmService.js'

export default {
    methods: {
        deleteSubscription() {
            ConfirmService.deleteSubscription(this.$route.params.token)
        }
    }
}



</script>