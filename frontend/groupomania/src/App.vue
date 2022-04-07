<script setup lang="ts">
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';
import Feed from './components/Feed/Feed.vue';
import Aside from './components/Aside/Aside.vue';
</script>

<template>
  <div class="app-container">
    <TheHeader class="header" />
    <Feed class="feed" />
    <Aside class="aside b3" />
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@import './assets/base.scss';
@import './assets/debug.scss';

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: 'header header' 'feed aside' 'footer footer';
  grid-template-columns: 75% 25%;
  grid-template-rows: 80px auto 0;
}
.header {
  grid-area: header;
}
.feed {
  grid-area: feed;
  width: 50%;

}
.aside {
  grid-area: aside;
  margin: 20px;
  grid-column-start: 1;
  width: 20%;
}
.footer {
  grid-area: aside;
  margin: 20px;
  grid-column-start: 2;
  height: 30rem;
  border-radius: 20px;
}
</style>