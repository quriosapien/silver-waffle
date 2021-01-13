<template>
  <nav id="nav">
    <router-link class="nav-item" :to="{name: 'Home'}">Home</router-link>
    <router-link class="nav-item" to="/about">About</router-link>
    <router-link class="nav-item" :to="{name: 'Components'}">Comopnents</router-link>
    <router-link class="nav-item" :to="{name: 'Router'}">Router</router-link>
    <router-link class="nav-item" :to="{name: 'Vuex'}">Vuex</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

.nav {
  padding: 10px;
}

.nav-item {
  padding: 10px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-item:hover {
  background-color:  #2c3e50;
  color: #42b983;
}

.nav-item.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 10px;
}
</style>
