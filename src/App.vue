<template>
  <div class="app">

    <nav class="navbar navbar-light bg-light">

      <div class="container">

        <router-link class="navbar-brand" to="/">

          <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
          PokeAPI

        </router-link>

        <div class="links">

          <router-link class="btn btn-outline-primary me-2" to="/">Home</router-link>
          <router-link class="btn btn-outline-primary " to="/pokemons">Pokemons</router-link>

        </div>

      </div>
    </nav>

    <RouterView />

  </div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>
