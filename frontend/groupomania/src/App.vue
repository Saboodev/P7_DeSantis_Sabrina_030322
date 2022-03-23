<script setup lang="ts">
import TheHeader from './components/Header.vue';
import TheFooter from './components/Footer.vue';
import Feed from './components/Feed/Feed.vue';
import Aside from './components/Aside/Aside.vue';
</script>

<template>
  <div class="app-container">
    <TheHeader class="header b1" />
    <Feed class="feed b2" />
    <Aside class="aside b3" />
    <TheFooter class="footer b4" />
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
  grid-template-rows: 48px auto 48px;
}
.header {
  grid-area: header;
}
.shop {
  grid-area: feed;
}
.cart {
  grid-area: aside;
}
.footer {
  grid-area: footer;
}
</style>