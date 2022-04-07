<script setup lang="ts"></script>

<template>
<div class="post d-flex flex-column">
    <div class="profil-image"></div>
    <div class="p-10 d-flex flex-column">
      <font-awesome-icon icon="fa-regular fa-user" />
      <h4>Pseudo</h4>
      <p>Quoi de neuf ?</p>
      <div class="d-flex flex-row align-items-center">
        <font-awesome-icon icon="fa-regular fa-image" />        
        <button class="btn btn-primary">Publier</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  background-color: var(--gray-2);
  border: var(--border);
  border-radius: var(--border-radius);
  &-image {
    border-radius: 50px;
    background-image: url('../../assets/mario.png');
    background-size: cover;
    background-position: center;
    height: 250px;
  }
}
</style>
