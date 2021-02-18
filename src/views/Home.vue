<template>
  <div class="home">
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>