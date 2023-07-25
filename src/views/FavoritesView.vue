<template>
    <div class="text-center">

        <h1>Favorites Pokemons</h1>

        <p v-if="favorites.length == 0">Without favorites</p>

        <ul class="list-group">
            <li class="list-group-item" v-for="poke in favorites" :key="poke.id">{{ poke.name }}</li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useFavoritesStore } from '../store/favorites';

/** Destructuring useFavoritesPokemons */
const useFavoritesPokemons = useFavoritesStore()
const { favorites } = storeToRefs(useFavoritesPokemons)

</script>