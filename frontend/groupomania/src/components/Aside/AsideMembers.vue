<template>
  <div class="mb-10 b5">
    <h1>Membres</h1>
    <div>
      <ul>
        <li class="membersList">
          <font-awesome-icon icon="user" />
          <p>Sabrina</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
h1 {
  color: var(--text-primary-color);
  text-align: center;
  font-size: 1.5rem;
}
.membersList {
  color: var(--text-primary-color);
  padding: 0.2rem;
  display: inline-flex;
  align-items: center;
}

p {
  padding-left: 0.6rem;
}
</style>