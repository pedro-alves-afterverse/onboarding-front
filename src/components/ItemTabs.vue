<template>
  <v-card class="item-tabs" color="#0082eb">
    <v-card-title class="text-center justify-center" style="background-color: #0082eb; color: #ffffff">
      <h1>
        {{getCardTitle}}
      </h1>
    </v-card-title>
    <v-tabs 
      v-model="tab"
      background-color="#0082eb"
      color="white"
      centered
    >
      <v-tab>
        <v-img src="@/assets/avatar/avatar-hat.svg"></v-img>
      </v-tab>
      <v-tab>
        <v-img src="@/assets/avatar/avatar-shirt.svg"></v-img>
      </v-tab>
      <v-tab>
        <v-img src="@/assets/avatar/avatar-legs.svg"></v-img>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="category in categories" :key="category">
        <v-card tile flat color="#009bef">
            <item-container @handle-click="$emit('handle-click', {id: $event, category: category})" style="height: 300px" :category="category" :type="type"/>

        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import ItemContainer from './ItemContainer.vue';

export default {
  components: { ItemContainer },
  name: "ItemTabs",
  props: {
    categories: Array,
    type: String
  },
  data(){
    return{
      tab: null,
    }
  },
  computed: {
    getCardTitle(){
      return this.type == "store" ? "Loja de Roupas" : "Inventário"
    }
  }
};
</script>
<style scoped>
.item-tabs {
  margin: 2rem 20rem;
}
</style>