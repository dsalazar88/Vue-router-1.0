<template>
    <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border text-primary text-center" role="status"> </div>

        <p class="ms-2">Loading...</p>
    </div>

    <div class="alert alert-danger mt-2" v-if="error">Server error</div>

    <div class="text-center" v-if="pokemon != null">
        <img :src="pokemon.sprites?.front_default" alt="">

        <h1>Poke name: {{ $route.params.name }}</h1>

        <button class="btn btn-outline-primary" @click="addFavorites(pokemon)">Add Favorites</button>
        
    </div>

    <div class="text-center mt-2">
        <button class="btn btn-outline-primary" @click="back">Return</button>
    </div>


</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, } from 'vue';

import { useGetSpecificPokemon } from '../utils/js/pokemons';
import { useFavoritesStore } from '../store/favorites';
import { storeToRefs } from 'pinia';

const route = useRoute()
const router = useRouter()

/**@function () Return to PokemonsView.vue */
const back = () => {
    router.push('/pokemons')
}
/** Destructuring useGetSpecificPokemon*/
const { getSpecificPokemon, pokemon, loading, error } = useGetSpecificPokemon()
getSpecificPokemon(route.params.name)

/** Destructuring useFavoritesStore */
const useFavoritesPokemons = useFavoritesStore()
const {addFavorites} = useFavoritesPokemons

</script>

<style></style>