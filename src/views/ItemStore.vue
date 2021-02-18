<template>
  <div class="item-store-main bg-purple">
      <div class="star-banner">
        <div class="item-store-banner d-flex justify-center align-center">
          <h1>Que tal uma roupa nova?</h1>
        </div>
      </div>
      
      <item-tabs :categories="categories"/>

  </div>
</template>

<script>
import ItemTabs from '../components/ItemTabs.vue'
export default {
  name: "ItemStore",
  components: { ItemTabs },
  data(){
    return {
      categories: [
        "hat",
        "shirt",
        "pants"
      ]
    }
  }
}
</script>

<style scoped>
.item-store-main{
    background-image: url("~@/assets/backgrounds/bg-pattern.svg");
    width: 100%;
    height: 100%;
}
.item-store-banner {
  background-position-y: -150px;
  background-image: url("~@/assets/banners/store-npc.svg");
  width: 100%;
  height: 270px;
  color: #ffffff;
  font-size: 2rem;
}
.star-banner {
  background-image: url("~@/assets/icons/star.svg"), url("~@/assets/icons/star.svg"), url("~@/assets/icons/star.svg"), url("~@/assets/icons/star.svg"), url("~@/assets/icons/star.svg"), url("~@/assets/icons/star.svg");
  background-position-x: 80vw, 82vw, 84vw, 85vw, 88vw, 88vw;
  background-position-y: 180px, 80px, 165px, 110px, 70px, 170px;
  width: 100%;
  height: 270px;
  background-color: #5300aa;
}
</style>