<template>
  <div class="item-container">
    <v-row justify="center" align="center">
      <v-col cols="4" v-for="item in itemsList" :key="item.id">
        <item-card
         :price="item.price" 
         :currency="item.currency" 
         :category="item.category" 
         :id="item.id"
         style="margin: auto"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ItemCard from './ItemCard.vue';
import api from "../services/api"
import {profileId} from "../services/auth"

export default {
  name: "ItemContainer",
  data(){
    return {
      itemsList: []
    }
  },
	props: {
		category: String 
	},
  components: {
    ItemCard
  },
  created(){
    api.get(`/item/${this.category}/user/${profileId}`)
    .then(res => {
      this.itemsList = res.data
    })
    .catch(error => {
      console.log(error);
    })
  }
};
</script>
<style scoped>
.item-container {
	padding: 2rem 16rem;
}
</style>