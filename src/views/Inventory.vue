<template>
  <div class="item-page-main bg-purple">
    <item-pages :categories="categories" :title="'Uau quantas roupas legais!'" :type="'inventory'"/>
  </div>
</template>

<script>
import ItemPages from '../components/ItemPages.vue'
export default {
  components: { ItemPages },
  name: "Inventory",
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
.item-page-main{
    background-image: url("~@/assets/backgrounds/bg-pattern.svg");
    width: 100%;
    height: 100%;
}
</style>