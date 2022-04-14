<script setup lang="ts">
</script>

<template>
  <header class="px-40 d-flex flex-row align-items-center">
    <a href="#" class="d-flex flex-row align-items-center">
      <img src="../assets/icon-left-font-monochrome-white.png" />
    </a>
    <ul class="d-flex flex-row flex-fill">
      <li>
        <a href="#">Admin</a>
      </li>
    </ul>
    <ul class="d-flex flex-row">
      <li class="mr-10">
        <a href="#">Inscription</a>
      </li>
      <li class="mr-10">
        <a href="#">Connexion</a>
      </li>
      <li class="mr-10">
        <a href="#">Mon profil</a>
      </li>
      <li>
        <a href="#">Se déconnecter</a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--dark-blue-1);
  a {
    color: var(--text-primary-color);
    img {
      width: 140px;
      margin-right: 1.5rem;
    }
  }
}
</style>