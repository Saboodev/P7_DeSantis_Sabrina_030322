<script>
export default {
  name: "NavBar",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  methods: {
    logout(){
      localStorage.clear()
    }
  }
}
</script>

<template>
  <header class="px-40 d-flex flex-row align-items-center">
    <router-link to="/">
      <img src="../assets/icon-left-font-monochrome-white.png" />
    </router-link>
    <ul class="d-flex flex-row flex-fill">
      <li>
        <router-link to="/admin">
          <font-awesome-icon icon="user-secret" />
        </router-link>
      </li>
    </ul>
    <ul class="d-flex flex-row">
      <li class="mr-10">
        <router-link to="/">
          <font-awesome-icon icon="house" />
        </router-link>
      </li>
      <li class="mr-10">
        <router-link to="/profil">
          <font-awesome-icon icon="circle-user" />
        </router-link>
      </li>
      <li>
        <router-link to="/signup" @click="logout">
          <font-awesome-icon icon="right-from-bracket" />
        </router-link>
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