/**
* @file Functions to Pokemons vue page
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/
import axios from 'axios'

/**@constant {Object} - Contains the api functions*/
const apis_pokemons = {

    /** 
    * Get pokemons.
    * @param {}
    * @return Array with the results.
    */
    async getPokemons() {

        try {
            const data = await axios.get('https://pokeapi.co/api/v2/pokemon')
            //console.log(data)
            return data.data.results
        } catch (error) {

        }
    },

    /** 
    * Get specific pokemon.
    * @param String pokemon name.
    * @return Array with the results.
    */
    async getOnePokemon(pokemon) {

        try {
            const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            //console.log(data.data)
            return data.data
        } catch (error) {

        }
    }

}

export {
    apis_pokemons
}