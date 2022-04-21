<template>
  <div class="container">
    <h3 class="container__h3">Users:</h3>
    <div class="container__bloc" :key="item.username" v-for="item in users">
      <div class="container__bloc__check" v-if="user.pseudo !== item.pseudo">
        <p class="container__bloc__check__pseudo">{{item.pseudo}}: </p>
        <p class="container__bloc__check__email">{{item.email}}</p>
        <button class="container__bloc__check__button" @click="deleteUser(item.userId)">Sup</button>
      </div>
    </div>
  </div>
</template>

<script>
import auth from "../services/authService"

export default {
  name: "AdminBoard",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      users: [],
    };
  },
  mounted() {
    console.log(this.user)
    if(localStorage.getItem("user") == null){
      this.$router.push("/login")
      }
    if(localStorage.getItem("user") != null && this.user.isadmin === 0){
      console.log(this.user)
      this.$router.push("/")
    }
    this.user = JSON.parse(localStorage.getItem("user"))
    auth.getAllUsers().then(
      (response) => {
        this.users = response.data.usersData;
      },
      (error) => {
        console.log(error);
      }
    ); 
  },
  methods:{
    deleteUser(id){
      auth.delete(id)
      .then(() =>{
        auth.getAllUsers().then(
          (response) => {
            this.users = response.data.usersData;
        },
        (error) => {
          console.log(error);
        }
      );  
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
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__bloc{
    &__check{
      width: 18rem;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      justify-content: space-between;
      &__button{
        font-family: 'Roboto', sans-serif;
        background-color: blue;
        border-radius: 5px;
        height: 1.4rem;
        color: white;
        border: 1px solid grey;
        align-self: center;
      }
    }
  } 
}
</style>