<template>
  <div id="app">
    <nav>
      <router-link to="/">Page d'accueil</router-link> |
      <router-link to="/about">Détails</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0d6efd;
    }
  }
}
</style>
