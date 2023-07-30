/**
* @file Functions to Pokemons vue page
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/
import axios from 'axios'
import { ref } from 'vue'
import {} from '@fortawesome/fontawesome-svg-core'

/** 
* @return {Function} getPokemons
* @return {Boolean}  loading
* @return {Array}    pokemons
*/
export const useGetPokemons = () => {

    const loading = ref(true)
    const pokemons = ref(null)

    /**
     * Get pokemons.
     * @param {String} url 
     */
    const getPokemons = async (url) => {
        loading.value = true
        try {
            const data = await axios.get(url)
            //console.log(data)
            pokemons.value = data.data
        } catch (error) {
            console.log(error)
        } finally {
            loading.value = false
        }
    }

    return {
        getPokemons,
        loading,
        pokemons
    }

}

/** 
* @return {Function}    getSpecificPokemon
* @return {Array}       Pokemon
* @return {Boolean}     loading
* @return {Boolean}     error 
*/
export const useGetSpecificPokemon = () => {

    const pokemon = ref(null)
    const loading = ref(true)
    const error = ref(false)

    /**
     * Get specific pokemon.
     * @param {String} name 
     */
    const getSpecificPokemon = async (name) => {
        loading.value = true
        try {
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            //console.log(data.data)
            setTimeout(() => {
                pokemon.value = data.data
                loading.value = false
            }, 600)

        } catch (e) {
            setTimeout(() => {
                error.value = true
                loading.value = false
            }, 1000)
        }
    }

    return {
        getSpecificPokemon,
        pokemon,
        loading,
        error
    }
}
