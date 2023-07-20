<template>
    <div class="d-flex justify-content-center">

        <p v-if="loading">Cargando informacion!</p>

        <div v-if="!loading">
            <h1>Pokemons</h1>

            <ul class="list-group">
                <li v-for="pokemon in pokemons.results" class="list-group-item text-center">
                    <router-link :to="`pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
                </li>
            </ul>

            <button class="btn btn-success me-2" @click="getPokemons(pokemons.previous)"
                :disabled="pokemons.previous == null">
                Previous
            </button>
            <button class="btn btn-primary" @click="getPokemons(pokemons.next)"
                :disabled="pokemons.next == null">
                Next
            </button>


        </div>

    </div>
</template>

<script setup>
/**
* @file Pokemons vue page.
* @author Daniel Salazar <danielsalzar081@gmail.com>.
* @copyright Daniel Salazar 2023
*/

import { RouterLink } from 'vue-router';

import { useGetPokemons } from '../utils/js/pokemons'


const { getPokemons, pokemons, loading } = useGetPokemons()

getPokemons('https://pokeapi.co/api/v2/pokemon')
</script>
