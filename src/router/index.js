import Vue from 'vue'
import Router from "vue-router";
import HowToDonate from "@/views/HowToDonate";
import WhereToDonate from "@/views/WhereToDonate";
import HomePage from "@/views/HomePage";
import LoginPage from "@/views/LoginPage";
import DonationsList from "@/views/DonationsList";
import NonProfitList from "@/views/NonProfitList";
import CreateDonation from "@/views/CreateDonation";

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/donations',
            name: 'Donations',
            component: DonationsList,
        },
        {
            path: '/non-profits',
            name: 'NonProfits',
            component: NonProfitList,
        },
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
        {
            path: '/login',
            name: 'Login',
            component: LoginPage,
        },
        {
            path: '/create-donation',
            name: 'CreateDonation',
            component: CreateDonation,
        },
    ],
})
