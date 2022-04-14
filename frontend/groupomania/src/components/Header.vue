<script setup lang="ts">
</script>

<template>
  <header class="px-40 d-flex flex-row align-items-center">
    <a href="#" class="d-flex flex-row align-items-center">
      <img src="../assets/icon-left-font-monochrome-white.png" />
    </a>
    <ul class="d-flex flex-row flex-fill">
      <li>
        <a href="#">
          <font-awesome-icon icon="user-secret" />
        </a>
      </li>
    </ul>
    <ul class="d-flex flex-row">
      <li class="mr-10">
        <div>
          <input type="text" name="search" placeholder="Rechercher...">
          <a href="#">
            <font-awesome-icon class="searchIcon" icon="search" />
          </a>
        </div>  
      </li>
      <li class="mr-10">
        <a href="#">
          <font-awesome-icon icon="house" />
        </a>
      </li>
      <li class="mr-10">
        <a href="#">
          <font-awesome-icon icon="circle-user" />
        </a>
      </li>
      <li>
        <a href="#">
          <font-awesome-icon icon="right-from-bracket" />
        </a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: var(--dark-blue-1);
  height: 8rem;
  a {
    color: var(--text-primary-color);
    font-size: 1.5rem;
    img {
      width: 200px;
      margin-right: 1.5rem;
    }
  }
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