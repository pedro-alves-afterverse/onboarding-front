<template>
  <div class="sku-container">
    <v-row justify="center" align="center">
      <v-col cols="4" v-for="sku in skus" :key="sku.id">
        <SkuCard @click="$emit('handle-click', sku.id)" :price="sku.price" :coin="sku.coin" :gem="sku.gem" style="margin: auto"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SkuCard from "./SkuCard.vue";
export default {
  name: "SkuContainer",
	props: {
		skus: Array 
	},
  components: {
    SkuCard,
  },
};
</script>
<style scoped>
.sku-container {
	margin: 2rem 16rem;
}
</style>