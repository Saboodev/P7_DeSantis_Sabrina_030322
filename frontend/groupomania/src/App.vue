<template>
  <div class="app-container">
    <TheHeader class="header" />
    <div class="main-container">
      <Aside class="aside" />
      <Feed class="feed" />
      <TheFooter class="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';
import Feed from './components/Feed/Feed.vue';
import Aside from './components/Aside/Aside.vue';
</script>

<style lang="scss">
@import './assets/base.scss';
@import './assets/debug.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

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