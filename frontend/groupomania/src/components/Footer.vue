<script setup lang="ts"></script>

<template>
  <footer class="d-flex flex-column align-items-center">
    <ul class="d-flex flex-column flex-fill">
      <li class="mr-10">
        <a href="#">Aide</a>
      </li>
      <li>
        <a href="#">Politique de confidentialité</a>
      </li>
      <li>
        <a href="#">Politique de contenu</a>
      </li>
      <li>
        <a href="#">Politique de modération</a>
      </li>
    </ul>
    <p>Copyright © 2022 Groupomania</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--dark-blue-1);
  color: var(--text-primary-color);
  height: 200 px;
}

li {
  padding: 0.8rem 0;
}
</style>