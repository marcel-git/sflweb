import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Database',
        component: () => import('../components/Database')
    },
    {
        path: '/publish',
        name: 'Publish',
        component: () => import('../components/Publish')
    },
    {
        path:'/help',
        name:'Help',
        component: () => import('../components/Help')
    }

]

const index = createRouter({
    history: createWebHistory(),
    routes
})

export default index;