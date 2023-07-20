<template>
    <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border text-primary text-center" role="status"> </div>

        <p class="ms-2">Loading...</p>
    </div>

    <div class="alert alert-danger mt-2" v-if="error">Server error</div>

    <div class="text-center" v-if="pokemon != null">
        <img :src="pokemon.sprites?.front_default" alt="">

        <h1>Poke name: {{ $route.params.name }}</h1>

        <button class="btn btn-primary" @click="back">Volver</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, } from 'vue';

import { useGetSpecificPokemon } from '../utils/js/pokemons';

const route = useRoute()
const router = useRouter()

/**@function () Return to PokemonsView.vue */
const back = () => {
    router.push('/pokemons')
}

const { getSpecificPokemon, pokemon, loading, error } = useGetSpecificPokemon()
getSpecificPokemon(route.params.name)

</script>

<style></style>