<template>
  <div  class="container">
    <h1>Profil de l'utilisateur</h1>
    <div class="card">
      <p class="container__h3"><strong>Pseudo : </strong>{{ this.user.pseudo }}</p>
      <p class="container__id"><strong>Id de l'utilisateur : </strong>{{ this.user.userId }}</p>
      <p class="container__email"><strong>Email : </strong>{{ this.user.email }}</p>
      <div class="container__authorities">
        <p><strong>Rôle :</strong></p>
        <p v-if="this.user.isadmin === 1">Modérateur</p>
        <p v-else-if="this.user.isadmin === 0">utilisateur standard</p>
      </div>
      <button class="container__button" @click="deleteUser(this.user.userId)">Supprimer le profil</button>
    </div>
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
  &__authorities{
    display: flex;
    gap: 0.5rem;
  }
  &__button{
    font-family: 'Roboto', sans-serif;
    background-color: var(--red-2);
    border-radius: 8px;
    color: var(--text-primary-color);
    margin-top: 0.5rem;
    border: 1px solid var(--gray-2);
    padding: 0.3rem;
    cursor: pointer;
  }
}

h1 {
    font-weight: normal;
    padding: 0.5rem;
  }
</style>