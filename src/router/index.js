import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '',
        name: 'home',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () =>
            import ('views/home/home.vue'),

    },
    {
        path: '/sort',
        name: 'sort',
        component: () =>
            import ('views/sort/sort.vue')
    }, {
        path: '/shop',
        name: 'shop',
        component: () =>
            import ('views/shop/shop.vue')
    }, {
        path: '/profile',
        name: 'profile',
        component: () =>
            import ('views/profil/profil.vue')
    }, {
        path: '/detail/:iid',
        name: 'detail',
        component: () =>
            import ('views/detail/detail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router