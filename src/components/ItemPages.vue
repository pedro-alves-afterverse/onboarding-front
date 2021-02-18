<template>
  <div class="item-page-main bg-purple">
      <div class="star-banner">
        <div class="item-page-banner d-flex justify-center align-center">
          <h1>{{title}}</h1>
        </div>
      </div>
      
      <item-tabs :categories="categories" :type="type"/>

  </div>
</template>

<script>
import ItemTabs from '../components/ItemTabs.vue'
export default {
  name: "ItemPages",
  components: { ItemTabs },
  props: {
      categories: Array,
      title: String,
      type: String
  }
}
</script>

<style scoped>
.item-page-main{
    background-image: url("~@/assets/backgrounds/bg-pattern.svg");
    width: 100%;
    height: 100%;
}
.item-page-banner {
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