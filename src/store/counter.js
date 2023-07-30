/**
* @file Global variable that will store the counter.
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/

import { defineStore } from "pinia";
import { computed, ref } from "vue";

/** 
* Config store using API options.
*/
// export const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//     }),

//     actions: {
//         increment() {
//             this.count ++
//         }
//     },

//     getters: {
//         double: (state) => state.count * 2
//     }
// })


/**
 * Config store using Composition API
 * @return {Number} Count = counter
 * @return {ArrayFunction} increment = function to increment count
 * @return {Computed} double = computed function to make count * 2
 */
export const useCounterStore = defineStore('counter', () => {
    
    const count = ref(0)

    const increment = () => count.value ++
    
    const double = computed(() => count.value * 2)
    
    return{
        count, 
        increment,
        double
    }
})