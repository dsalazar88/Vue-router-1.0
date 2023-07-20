<template>
    <div class="">
        <h1>Pokemons</h1>

        <ul>
            <li v-for="pokemon in pokemons">
                <router-link :to="`pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>

            </li>
        </ul>

    </div>
</template>

<script setup>
/**
* @file Pokemons vue page.
* @author Daniel Salazar <danielsalzar081@gmail.com>.
* @copyright Daniel Salazar 2023
*/

import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { apis_pokemons } from '../utils/js/pokemons'

const pokemons = ref([]);

/**@method - Call to getPokemons function */
const getPokemons = async () => {
    pokemons.value = await apis_pokemons.getPokemons()
}

/**@function () Method that will be executed when loading the page */
onMounted(() => {
    getPokemons()
})

</script>
