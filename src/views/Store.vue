<template>
  <div class="store-main bg-purple">
    <div class="store-banner d-flex justify-center align-center">
      <h1>Compre e divirta-se!</h1>
    </div>
    <sku-container
     @handle-click="handleClick" 
     :skus="skus_list"
    />
    <confirm-dialog 
    :open="dialog" 
    @handle-close="handleClose"
    @handle-buy="handleBuy"
    />
  </div>
</template>

<script>
import ConfirmDialog from '../components/ConfirmDialog.vue';
import SkuContainer from '../components/SkuContainer.vue';
import api from "../services/api"
import { profileId } from '../services/auth';

export default {
  name: "Store",
  data(){
    return {
      dialog: false,
      currentSku: null,
      skus_list: []
    }
  },
  components: {
    SkuContainer,
    ConfirmDialog,
  },
  methods: {
    handleClick(skuId){
      this.currentSku = skuId
      this.dialog = true
    },
    handleClose(){
      this.currentSku = null
      this.dialog = false
    },
    handleBuy(){
      api.patch(`/profile/buy/sku/${profileId}`, {skuId: this.currentSku})
      .then(() => {
        this.currentSku = null
        this.dialog = false
        window.location.reload()
      })
      .catch(error => {
        console.log(error);
        this.currentSku = null
        this.dialog = false
        alert("Ocorreu um erro")
      })
    }
  },
  created() {
    api.get("/sku")
    .then(res => {
      this.skus_list = res.data
    })
    .catch(error => {
      console.log(error);
    })
  }
};
</script>

<style>
.store-main {
  background-image: url("~@/assets/backgrounds/bg-pattern.svg");
  width: 100%;
  height: 100%;
}
.store-banner {
  background-position-x: center;
  background-position-y: -15px;
  background-image: url("~@/assets/banners/store-banner.svg");
  width: 100%;
  height: 270px;
  color: #ffffff;
  font-size: 2rem;
  background-color: #5300aa;
}
</style>