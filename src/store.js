import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000/api',
    menuItems: [
        {
            name: 'homepage',
            label: 'HOME',
        },
        {
            name: 'portfolio',
            label: 'PORTFOLIO',
        },
        {
            name: 'contacts',
            label: 'CONTACTS',
        },
    ]
});