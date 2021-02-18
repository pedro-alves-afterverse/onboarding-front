<template>
    <v-card
        class="sku-card"
        @click="$emit('click')"
    >
        <div class="card-purple-bg d-flex flex-column justify-center align-center">
            <card-currency
                :amount="coin"
                :type="'coin'"
            />

            <card-currency
                :amount="gem"
                :type="'gem'"
            />
            <v-img
                class="sku-card-image"
                :src="getImage"
                width="70%"
            ></v-img>
        </div>
        <v-card-title class="sku-card-text justify-center">R$ {{price}}</v-card-title>
       
    </v-card>
</template>
<script>
import CardCurrency from './CardCurrency.vue'
export default {
    name: "SkuCard",
    props: {
        price: Number,
        coin: Number,
        gem: Number
    },
    components: {
        CardCurrency
    },
    computed: {
        getImage(){
            return this.gem + this.coin > 1000 ? require("@/assets/skus/offer_gold.png") :  require("@/assets/skus/offer_silver.png")
        }
    }
}
</script>

<style scoped>
.card-purple-bg{
	background: linear-gradient(-15deg, #5300aa, #5300aa 32.5%, #7623df 32.5%, #7623df calc(32.5% + 28%), #5300aa calc(32.5% + 28%));
}
.sku-card{
    width: 200px;
    border-radius: 1.2rem !important;
    border: 0.25rem solid #ffffff;
}
.sku-card-text{
    padding: 0.75rem;
    font-size: 2rem;
}
.sku-card-image{
    margin: 1rem 0;
}
</style>