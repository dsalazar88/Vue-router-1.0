/**
* @file Global variable that will store the favorites pokemons .
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/

import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * Config store to favorites pokemons.
 * @return {Array}         favorites   
 * @return {ArrayFunction} addFavorites 
 * @return {ArrayFunction} remove      
 */
export const useFavoritesStore = defineStore('favorites', () => {

    const favorites = ref([])

    /**
     * Add pokemon to favorites.
     * @param {Array} poke 
     */
    const addFavorites = (poke) => {
        favorites.value.push(poke)
    }

    /**
     * Remove pokemon of favorites.
     * @param {String} id 
     */
    const remove = (id) => {
        favorites.value = favorites.value.filter(item => item.id != id)
    }

    return {
        favorites,
        addFavorites,
        remove
    }
})