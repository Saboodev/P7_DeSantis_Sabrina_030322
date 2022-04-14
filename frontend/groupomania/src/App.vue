<script setup lang="ts">
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';
import Feed from './components/Feed/Feed.vue';
import Aside from './components/Aside/Aside.vue';
</script>

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

<style lang="scss">
@import './assets/base.scss';
@import './assets/debug.scss';

.main-container {
  min-height: 100vh;
  // display: grid;
  // grid-template-areas: 'header header' 'feed aside' 'footer footer';
  // grid-template-columns: 75% 25%;
  // grid-template-rows: 80px auto 0;
    display: flex;
}

.header {
  // grid-area: header;
}

.feed {
  // grid-area: feed;
  width: 50%;
  display: flex;
  justify-content: center;

}
.aside {
  // grid-area: aside;
  margin: 20px;
  grid-column-start: 1;
  width: 20%;
}
.footer {
  // grid-area: aside;
  margin: 20px;
  // grid-column-start: 2;
  height: 20rem;
  border-radius: 20px;
}
</style>