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
                    <button class="btn btn-sm btn-danger me-2" @click="remove(poke.id);
                    showCustom('warning', 'Was successfully removed')">
                        Delete
                    </button>

                    <router-link class="btn btn-sm btn-primary" :to="`pokemons/${poke.name}`">
                        More Information
                    </router-link>
                </div>

            </li>
        </ul>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

import { useFavoritesStore } from '../store/favorites';
import { useHelpers } from '../utils/js/helpers';

/** Destructuring useFavoritesPokemons */
const useFavoritesPokemons = useFavoritesStore()
const { favorites } = storeToRefs(useFavoritesPokemons)
const { remove } = useFavoritesStore()

/** Destructurign useHelpers */
const { showCustom } = useHelpers()

</script>