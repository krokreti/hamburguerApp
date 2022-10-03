
import { defineStore } from 'pinia';
import products from '../data/products.json'

export const useProductStore = defineStore("ProductStore", {
    // state
    // actions
    //getters
    state: () => {
        return {
            products: [],
        };
    },

    actions: {
        //actions = methods
        fillProducts() {
            this.products = products;
        },
        showProducts() {
            console.log("mostrou")
        }
    }
})