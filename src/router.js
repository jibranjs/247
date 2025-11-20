import { createRouter, createWebHistory } from 'vue-router';
import BusinessView from './Views/BusinessView.vue';
import HomeView from './Views/HomeView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/Business',
        name: 'Business',
        component: BusinessView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;