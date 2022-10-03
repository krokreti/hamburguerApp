import { defineStore } from 'pinia';
import { groupBy } from 'lodash';
import { useAuthUserStore } from './AuthUserStore';

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: [],
        }
    },
    actions: {
        checkout() {
            const authUserStore = useAuthUserStore();
            alert(`${authUserStore.username}  just bought ${this.count} items at a total of ${this.total}`)
        },
        addItem(count, item) {
            count = parseInt(count)
            for (let index = 0; index < count; index++) {
                //colocando ...item ele clona o item e impossibilita o usuario de fazer alteraçoes
                this.items.push({ ...item });
            }
        },
        clearItem(itemName) {
            this.items = this.items.filter(item => item.name != itemName)
        },
        setItemCount(item, count) {
            this.clearItem(item.name)
            this.addItem(count, item)
        }
    },
    getters: {
        //count: (state) => { state.items.length }
        count() {
            return this.items.length;
        },
        isEmpty() {
            return this.count == 0
        },
        grouped: state => {
            const grouped = groupBy(state.items, (item) => item.name)
            const sorted = Object.keys(grouped).sort()
            let inOrder = {}
            sorted.forEach(key => inOrder[key] = grouped[key]);
            return inOrder;
        },
        groupCount: (state) => (name) => state.grouped[name].length,
        total: state => state.items.reduce((p, c) => p + c.price, 0),
    }
})