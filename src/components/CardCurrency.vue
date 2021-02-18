<template>
    <v-btn
        style="cursor: default"
        class="text-white card-currency"
        text
    >
       <v-img
        style="margin-right: 0.5rem"
        :src="getImgSource"
        contain
       />
       {{amount}}
    </v-btn>
</template>

<script>
export default {
    name: "CardCurrency",
    props: {
        amount: Number,
        type: String
    },
    computed: {
        getImgSource(){
            return this.type.toLowerCase() == "coin" ? require("@/assets/icons/icon-coin.svg") : require("@/assets/icons/icon-gem.svg")
        }
    }
}
</script>

<style scoped>
.card-currency{
    align-self: flex-end !important;
    font-size: 1.2rem;
    font-weight: 600;
}
</style>