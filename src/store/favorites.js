import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * Config store to favorites pokemons.
 * @return {Array}         favorites    = array with the favorites pokemons.
 * @return {ArrayFunction} addFavorites = push pokemon to array favorites
 */
export const useFavoritesStore = defineStore('favorites', () => {

    const favorites = ref([])

    /**
     * Add pokemon to favorites
     * @param {Array} poke 
     */
    const addFavorites = (poke) => {
        favorites.value.push(poke)
    }

    return {
        favorites,
        addFavorites
    }
})