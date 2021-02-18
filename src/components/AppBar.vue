<template>
  <v-app-bar app color="white" height="100px">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/logo.svg"
        transition="scale-transition"
        width="120"
      />

      <div class="nav-itens">
        <v-btn text>
          <router-link class="text-purple" to="/">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link class="text-purple" to="/about">About</router-link>
        </v-btn>
        <v-btn text>
          <router-link class="text-purple" to="/store">Loja</router-link>
        </v-btn>
        <v-btn text>
          <router-link class="text-purple" to="/item/store"
            >Loja de Roupas</router-link
          >
        </v-btn>
        <v-btn text>
          <router-link class="text-purple" to="/inventory"
            >Inventário</router-link
          >
        </v-btn>
      </div>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex align-left flex-column justify-center mr-16">
      <div>
        <p style="margin-bottom: 0.5rem; font-size: 1.2rem; font-weight: 500">
          {{username}}
        </p>
      </div>

      <div>
        <currency-button :amount="coin" :type="'coin'" class="mr-2" />

        <currency-button class="ml-2" :amount="gem" :type="'gem'" />
      </div>
    </div>

    
  </v-app-bar>
</template>
<script>
import CurrencyButton from "./CurrencyButton.vue";
import api from "../services/api"
import {profileId} from "../services/auth"

export default {
  name: "AppBar",
  components: { CurrencyButton },
  data(){
    return {
      username: null,
      coin: null,
      gem: null
    }
  },
  mounted(){
    api.get(`/profile/${profileId}`)
      .then(res => {
        const data = res.data
        this.username = data.username
        this.coin = data.coin,
        this.gem = data.gem
      })
      .catch(error => {
        console.log(error);
      })
  }
};
</script>
<style scoped>
.nav-itens {
  margin-left: 4rem;
}
.nav-itens a {
  text-decoration: none;
  font-size: 1.25rem;
  text-transform: capitalize;
}
</style>