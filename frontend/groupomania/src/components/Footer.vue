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

<script setup lang="ts"></script>

<style lang="scss" scoped>
footer {
  background-color: var(--dark-blue-1);
  color: var(--text-primary-color);
  height: 200 px;
  padding: 0.6rem;
}

li {
  padding: 0.6rem 0;
}

p {
  padding: 0 0.2rem;
}
</style>