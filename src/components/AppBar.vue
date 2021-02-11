<template>
    <v-app-bar
      app
      color="white"
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.svg"
          transition="scale-transition"
          width="90"
        />

        <div
            class="nav-itens"
        >
            <v-btn
                text
            >
                <router-link class="text-purple" to="/">Home</router-link>
            </v-btn>
            <v-btn
                text
            >
                <router-link class="text-purple" to="/about">About</router-link>
            </v-btn>
        </div>
        
      </div>


      

      <v-spacer></v-spacer>

      

      <currency-button
        :amount="300"
        :type="coin"
      />
    </v-app-bar>
</template>
<script>
import CurrencyButton from './CurrencyButton.vue'
export default {
  components: { CurrencyButton },
    name: 'AppBar'
}
</script>
<style scoped>
    .nav-itens {
        margin-left: 4rem;
    }
    .nav-itens a{
        text-decoration: none;
        font-size: 1.25rem;
        text-transform: capitalize;
    }
</style>