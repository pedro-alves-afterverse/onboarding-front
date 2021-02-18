<template>
    <v-card
        class="item-card"
    >
        <div class="card-purple-bg d-flex flex-column justify-center align-center">
            <v-img
                class="item-card-image"
                :src="getImage"
                width="70%"
            ></v-img>
        </div>
        <v-card-title class="item-card-text justify-center">
            <card-currency
                :amount="price"
                :type="currency"
                class="item-price"
            />
        </v-card-title>
       
    </v-card>
</template>
<script>
import CardCurrency from './CardCurrency.vue'
export default {
    name: "ItemCard",
    props: {
        price: Number,
        currency: String,
        category: String,
        id: String
    },
    components: {
        CardCurrency
    },
    computed: {
        getImage(){
            return require(`@/assets/items/${this.category}/${this.id}.png`) 
        }
    }
}
</script>

<style scoped>
.card-purple-bg{
	background: linear-gradient(-15deg, #0082eb, #0082eb 32.5%, #009bef 32.5%, #009bef calc(32.5% + 28%), #0082eb calc(32.5% + 28%))
}
.item-card{
    width: 200px;
    border-radius: 1.2rem !important;
    border: 0.25rem solid #ffffff;
}
.item-card-text{
    padding: 0.75rem;
    font-size: 2rem;
}
.item-card-image{
    margin: 1rem 0;
}
.item-price{
    color: black !important;
}
</style>