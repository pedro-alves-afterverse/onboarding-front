<template>
  <item-pages :categories="categories" :title="'Que tal uma roupa nova?'" :type="'store'"/>
</template>

<script>
import ItemPages from '../components/ItemPages.vue'
export default {
  components: { ItemPages },
  name: "ItemStore",
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