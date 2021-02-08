import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        donations: [],
        nonProfits: [],
    },
    actions: {
        getDonations({commit}) {
            axios.get('https://localhost:5001/donations')
                .then(result => commit('updateDonations', result.data))
                .catch(console.error)
        }
    },
    mutations: {
        updateDonations(state, donations) {
            state.donations = donations
        },
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})
