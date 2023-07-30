/**
* @file Helpers for the project.
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/

import { defineStore } from 'pinia'
import 'vue3-toastify/dist/index.css'
import { toast } from 'vue3-toastify'

/**
 * 
 * @return {ArrayFunction} showCustom
 */
export const useHelpers = defineStore('helpers', () => {
    /**
     * Show alerts.
     * @param {String} type 
     * @param {String} text 
     */
    const showCustom = (type, text) => {
        const alert = toast[type]
        alert(text, {
            autoClose: 1000,
        })
    }

    return {
        showCustom
    }

})