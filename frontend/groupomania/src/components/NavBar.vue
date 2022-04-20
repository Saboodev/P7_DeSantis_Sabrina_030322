<script setup lang="ts">
defineProps<{
    isAuthenticated: boolean | null
}>();
const emit = defineEmits<{
    (e: 'logout'): void
}>();
</script>

<template>
  <nav class="px-40 d-flex flex-row align-items-center">
    <div class="d-flex flex-row align-items-center">
      <router-link to="/">
        <img src="../assets/icon-left-font-monochrome-white.png" />
      </router-link>
    </div>
    <ul class="d-flex flex-row flex-fill">
      <li>
        <div>
          <router-link to ="/admin" class="navIcon">
          <font-awesome-icon icon="user-secret" />
        </router-link>
        </div>
      </li>
    </ul>
    <ul class="d-flex flex-row">
      <template v-if="isAuthenticated">
        <li class="mr-10">
          <div>
            <input type="text" name="search" placeholder="Rechercher...">
            <a>
              <font-awesome-icon class="searchIcon" icon="search" />
            </a>
          </div>  
        </li>
        <li class="mr-10">
          <router-link to="/">
            <font-awesome-icon icon="house" />
          </router-link>
        </li>
        <li class="mr-10"><router-link to="/profil">
          <font-awesome-icon icon="circle-user" />
        </router-link></li>
        <li @click="emit('logout')">
            <font-awesome-icon icon="right-from-bracket" />
        </li>
      </template>
      <template v-else-if="isAuthenticated === false">
        <li class="mr-10">
            <router-link to="/login">Connexion</router-link>
        </li>
        <li>
            <router-link to="/signup">Inscription</router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: var(--dark-blue-1);
  height: 8rem;
  li {
    color: var(--text-primary-color);
    font-size: 1.5rem;
    img {
      width: 200px;
      margin-right: 1.5rem;
    }
  }
}

img {
      width: 200px;
      margin-right: 1.5rem;
    }
.searchIcon {
  background-color: var(--dark-blue-2);
  color: white;
  width: 1rem;
  height: 1rem;
  border-radius: 10px;
  padding-left: 0.6rem;
  cursor: pointer;
}

li {
  padding: 0 0.5rem;
}
</style>