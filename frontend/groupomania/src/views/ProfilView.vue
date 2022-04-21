<template>
  <div  class="container">
    <h3 class="container__h3"><strong>Profile Name: </strong>{{ this.user.pseudo }}</h3>
    <p class="container__id"><strong>Id: </strong>{{ this.user.userId }}</p>
    <p class="container__email"><strong>Email: </strong>{{ this.user.email }}</p>
    <div class="container__authorities">
      <p><strong>Authorities:</strong></p>
      <p v-if="this.user.isadmin === 1">Moderateur</p>
      <p v-else-if="this.user.isadmin === 0">Standard User</p>
    </div>
    <button class="container__button" @click="deleteUser(this.user.userId)">Delete Profile</button>
  </div>
</template>

<script>

import auth from "../services/authService"

export default {
  name: "Profile",
   data() {
    return {
      user: {},
      token: ""
    };
  },
  mounted() {
      if(localStorage.getItem("user") == null){
          this.$router.push("/login")
      }
    this.user = JSON.parse(localStorage.getItem("user"))
    this.token = localStorage.getItem("token")
  },
  methods:{
    deleteUser(id){
      auth.delete(id)
      .then(() =>{
        localStorage.clear();
        this.$router.push("/login"); 
      })
      .catch((err) =>{
        console.log(err);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  &__h3 {
    font-weight: normal;
  }
  &__authorities{
    display: flex;
    gap: 0.5rem;
  }
  &__button{
    font-family: 'Roboto', sans-serif;
    background-color: blue;
    border-radius: 5px;
    color: white;
    margin-top: 0.5rem;
    border: 1px solid grey;
  }
}
</style>