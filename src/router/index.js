import Vue from 'vue'
import Router from "vue-router";
import HowToDonate from "@/views/HowToDonate";
import WhereToDonate from "@/views/WhereToDonate";

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/how-to-donate',
            name: 'HowToDonate',
            component: HowToDonate,
        },
        {
            path: '/where-to-donate',
            name: 'WhereToDonate',
            component: WhereToDonate,
        },
    ],
})
