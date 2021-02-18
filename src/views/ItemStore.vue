<template>
  <div class="item-page-main bg-purple">
    <item-pages @handle-click="handleClick" :categories="categories" :title="'Que tal uma roupa nova?'" :type="'store'"/>
    <confirm-dialog
      :open="dialog" 
      @handle-close="handleClose"
      @handle-buy="handleBuy"
    />
  </div>
</template>

<script>
import ConfirmDialog from '../components/ConfirmDialog.vue';
import ItemPages from '../components/ItemPages.vue'
import api from '../services/api';
import { profileId } from '../services/auth';
export default {
  components: { ItemPages, ConfirmDialog },
  name: "ItemStore",
  data(){
    return {
      categories: [
        "hat",
        "shirt",
        "pants"
      ],
      dialog: false,
      currentId: null,
      currentCategory: null,
    }
  },
  methods: {
    handleClick({id, category}){
      this.currentId = id
      this.currentCategory = category
      this.dialog = true
    },
    handleClose(){
      this.currentId = null
      this.currentCategory = null
      this.dialog = false
    },
    handleBuy(){
      api.patch(`/profile/buy/item/${profileId}`, {id: this.currentId, category: this.currentCategory})
      .then(() => {
        this.currentId = null
        this.currentCategory = null
        this.dialog = false
        window.location.reload()
      })
      .catch(error => {
        console.log(error);
        this.currentId = null
        this.currentCategory = null
        this.dialog = false
        alert("Ocorreu um erro")
      })
    }
  },
}
</script>
<style scoped>
.item-page-main{
    background-image: url("~@/assets/backgrounds/bg-pattern.svg");
    width: 100%;
    height: 100%;
}
</style>