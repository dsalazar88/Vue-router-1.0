<template>
    <div class="text-center">
        <img :src="pokemon.sprites?.front_default" alt="">

        <h1>Poke name: {{ $route.params.name }}</h1>

        <button class="btn btn-primary" @click="back">Volver</button>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref, } from 'vue';

import { apis_pokemons } from '../utils/js/pokemons';

const route = useRoute()
const router = useRouter()
const pokemon = ref([])

/**@function () Call to function getOnePokemon */
const getOnePokemon = async () => {
    pokemon.value = await apis_pokemons.getOnePokemon(route.params.name)
}

/**@function () Return to PokemonsView.vue */
const back = () => {
    router.push('/pokemons')
}

getOnePokemon()
</script>

<style></style>