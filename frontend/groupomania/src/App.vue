<template>
   <div class="d-flex flex-column app-container">
        <NavBar :isAuthenticated="false" @logout="logout" />
        <router-view class="flex-fill"></router-view>
    </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { useRouter } from 'vue-router';
import { useUser } from './shared/store';

const userStore = useUser();
const router = useRouter();

async function logout() {
    await userStore.logout();
    router.push('/connexion');
}
</script>

<style lang="scss">
@import './assets/base.scss';

.app-container {
    min-height: 100vh;
}

.main-container {
  min-height: 100vh;
  display: flex;
}
.feed {
  width: 50%;
  display: flex;
  justify-content: center;

}
.aside {
  margin: 20px;
  grid-column-start: 1;
  width: 20%;
}
.footer {
  margin: 20px;
  height: 20rem;
  border-radius: 20px;
}
</style>