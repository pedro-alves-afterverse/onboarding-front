<template>
  <item-pages :categories="categories" :title="'Uau quantas roupas legais!'" :type="'inventory'"/>
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