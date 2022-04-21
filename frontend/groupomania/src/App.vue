<template>
  <div class="app-container">
    <TheHeader class="header" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/Header.vue';
export default {
  name: "app",
  components: {
  TheHeader,
  },
  
}
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