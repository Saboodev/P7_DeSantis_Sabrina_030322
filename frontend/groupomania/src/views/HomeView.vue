<template>
  <div class="home-container">
    <TheHeader class="header" />
    <div class="main-container">
      <Aside class="aside" />
      <Feed class="feed" />
      <TheFooter class="footer" />
    </div>
  </div>
</template>

<script>
import TheFooter from '../components/Footer.vue';
import Feed from '../components/Feed/Feed.vue';
import Aside from '../components/Aside/Aside.vue';

export default {
  name: 'HomeView',
  components: {
  TheFooter,
  Feed,
  Aside,
  },
  mounted: function () {
    if(localStorage.getItem("user") == null){
      this.$router.push("/login")
    }
  }
}
</script>

<style lang="scss">
@import '../assets/base.scss';
@import '../assets/debug.scss';

.main-container {
  min-height: 100vh;
  display: flex;
  @media screen and(max-width: 1130px) {
    flex-direction: column;
    align-items: center;
  }
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