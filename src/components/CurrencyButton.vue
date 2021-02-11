<template>
    <v-btn
        style="cursor: default"
        class="bg-purple text-white"
        rounded
        elevation="2"
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
    name: "CurrencyButton",
    props: {
        amount: Number,
        type: String
    },
    methods: {
        getImgSource(){
            return this.type === "coin" ? require("@/assets/icons/icon-coin.svg") : require("@/assets/icons/icon-gem.svg")
        }
    }
}
</script>