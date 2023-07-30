<template>
    <div class="text-center">

        <h1>Favorites Pokemons</h1>

        <p v-if="favorites.length == 0">Without favorites</p>

        <ul class="list-group">
            <li class="list-group-item" v-for="poke in favorites" :key="poke.id">
            
            <div>
                {{ poke.name }}
            </div>

            <div class="mt-2">
                <button class="btn btn-sm btn-danger" @click="remove(poke.id); showCustom('warning', 'Was successfully removed')">Eliminar</button>
            </div>

            </li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useFavoritesStore } from '../store/favorites';
import { useHelpers } from '../utils/js/helpers';
/** Destructuring useFavoritesPokemons */
const useFavoritesPokemons = useFavoritesStore()
const { favorites } = storeToRefs(useFavoritesPokemons)
const { remove } = useFavoritesStore()

/** Destructurign useHelpers */
const { showCustom } = useHelpers()

</script>