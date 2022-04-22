<template>
  <div class="mb-10 b5">
    <h1>Membres</h1>
    <div>
      <ul>
        <li v-for="user in users" :key="user.userId" class="membersList">
          <div class="membersList__display">
            <font-awesome-icon icon="user" />
            <p>{{user.pseudo}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import auth from "../../services/authService"

export default {
  name: "AsideView",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    auth.getAllUsers().then(
      (response) => {
        this.users = response.data.usersData;
      },
      (error) => {
        console.log(error);
      }
    ); 
  },
};
</script>

<style lang="scss" scoped>
.mb-10 {
   @media all and (max-width: 1130px){
    color: var(--dark-blue-1);
    border: none;
  }
}
h1 {
  color: var(--text-primary-color);
  text-align: center;
  font-size: 1.5rem;
}
.membersList {
  color: var(--text-primary-color);
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  &__display{
    display: inline-flex;
    align-items: center;
  }
}

p {
  padding-left: 0.6rem;
}
</style>