import HomeView from './components/HomeView.vue'
import SignUp from './components/SignUp.vue'
import {createRouter, createWebHistory} from 'vue-router'
import LoginView from './components/LoginView.vue'

const routes=[

    {
        name:'HomeView',
        component: HomeView,
        path:'/'   
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'

    },
    {
        name: 'LoginView',
        component: LoginView,
        path: '/login'

    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router;

 