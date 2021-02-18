<template>
  <div class="item-container d-flex">
    <v-row v-if="itemsList.length > 0" justify="center" align="center" align-content="center">
        <v-col cols="4" v-for="item in itemsList" :key="item.id">
          <item-card
          :price="item.price" 
          :currency="item.currency" 
          :category="item.category" 
          :id="item.id"
          :type="type"
          style="margin: auto"
          />
        </v-col>
    </v-row>
    <div v-else class="d-flex justify-center align-center" style="width: 100%">
      <div v-if="type == 'store'" style="text-align: center">
        <h2 style="color: #ffffff">Uau, parece que você ja comprou todos os itens dessa categoria.</h2>
      </div>
      <div v-else style="text-align: center">
        <h2 style="color: #ffffff">Ops, parece que você ainda não tem nenhum item dessa categoria.</h2>
        <h2 style="color: #ffffff">Vamos resolver isso?</h2>
      </div>
    </div>
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
		category: String,
    type: String
	},
  components: {
    ItemCard
  },
  computed: {
    getApiUrl(){
      return this.type == "store" ? `/item/${this.category}/user/${profileId}` : `/profile/items/${profileId}/${this.category}`
    }
  },
  created(){
    api.get(this.getApiUrl)
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