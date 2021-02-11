<template>
  <v-app>
    <AppBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',

  components: {
    AppBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  .text-purple{
    color:#7623df !important;
  }
  .bg-purple{
    background-color:#7623df !important;
  }
  .text-white{
    color: #ffffff !important;
  }
</style>
