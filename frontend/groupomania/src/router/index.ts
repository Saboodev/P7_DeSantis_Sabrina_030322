import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: () => import('@/views/LoginView.vue')

        },
        {
            path: '/signup',
            component: () => import('@/views/SignupView.vue')

        },
        {
            path: '/',
            component: () => import('@/views/HomeView.vue')

        },
        {
            path: '/profil',
            component: () => import('@/views/ProfilView.vue')

        },
        {
            path: '/:catchAll(.*)',
            component: () => import('@/views/NotFoundView.vue')
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

router.beforeEach(async () => {
  const userStore = useUser();
  if (!userStore.loaded) {
    await userStore.fetchCurrentUser();
  }
});

export default router;
