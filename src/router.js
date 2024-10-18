import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/pages/HomePage.vue';
import Portfolio from './components/pages/Portfolio.vue';
import ShowProject from './components/pages/ShowProject.vue';
import ProjectNotFound from './components/pages/ProjectNotFound.vue';

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
        },
        {
            path: '/portfolio/:slug',
            name: 'show_project',

            component:
                ShowProject,
        },
        {
            path: '/portfolio/:pathMatch(.*)*',
            name: 'show_project_not_found',

            component:
                ProjectNotFound,
        },
    ]
})

export { router };