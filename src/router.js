import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/pages/HomePage.vue';
import Portfolio from './components/pages/Portfolio.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',

            component:
                HomePage,
        },
        {
            path: '/portfolio',
            name: 'portfolio',

            component:
                Portfolio,
        }
    ]
})

export { router };