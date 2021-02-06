<template>
  <main>
    <Navigation/>
    <div id="app" class="container">
      <router-view/>
    </div>
  </main>
</template>

<script>
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components: {Navigation}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
