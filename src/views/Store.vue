<template>
  <div class="store-main bg-purple">
    <div class="store-banner d-flex justify-center align-center">
      <h1>Compre e divirta-se!</h1>
    </div>
    <sku-container :skus="skus_list"/>
  </div>
</template>

<script>
import SkuContainer from '../components/SkuContainer.vue';
import api from "../services/api"

export default {
  name: "Store",
  data(){
    return {
      skus_list: []
    }
  },
  components: {
    SkuContainer,
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