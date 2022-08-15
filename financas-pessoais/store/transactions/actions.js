export default {
    addTransaction(context, data) {
        return this.$axios.$post('transactions', data);
    },
    getTransactions() {
        return this.$axios.$get('transactions?_expand=category');
    },
}