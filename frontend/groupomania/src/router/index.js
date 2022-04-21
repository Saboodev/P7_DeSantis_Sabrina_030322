import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import HomeView from "../views/HomeView.vue";
import ProfilView from "../views/ProfilView.vue";
import NotFound from '../views/NotFoundView.vue';
import AdminView from '../views/AdminView.vue'
export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/admin',
            name: 'Admin',
            component: AdminView
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignupView
        },
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/profil',
            name: 'Profil',
            component: ProfilView
        },
        {
            path: '/:notfound(.*)*',
            component: NotFound,
          },
    ],

    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
          }
        }
    }
});



export default router;