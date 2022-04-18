<template>
<div class="post d-flex flex-column">
  <!-- <div v-for="post in posts" class="posts"> -->
    <div class="profil-user">
      <font-awesome-icon icon="user" />
      <h4>Pseudo</h4>
    </div> 
    <div class="p-10 d-flex flex-column">  
      <p>Mon dernier post</p>
      <div class="actionPost d-flex flex-row align-items-center">
        <div class="index_like">
          <label class="clic_like" >
            <input type="checkbox" name="like">
            <font-awesome-icon icon="thumbs-up" />
            <p>J'aime</p>
          </label>
        </div>
        <div class="commentIcon">
          <font-awesome-icon icon="comment" />
          <a href="#">Commenter</a>
        </div>
      </div>
    </div>
  </div>
<!-- </div> -->
</template>

<script setup lang="ts">
</script>


<style lang="scss" scoped>
h4 {
    padding-left: 0.5rem;
}

p {
  padding-left: 0.6rem;
  color: var(--dark-blue-2);
  font-weight: 500;
  font-size: 16px;
}

.actionPost {
  border-top: solid;
  border-top-color: var(--gray-3);
  padding-top: 0.6rem;
}
.post {
  background-color: var(--gray-2);
  padding: 0.8rem 0.5rem;
  width: 500px;
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}
.clic_like, .commentIcon {
  color: var(--dark-blue-2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 100;
  padding-left: 0.6rem;
}

input {
  border: none;
  appearance: none;
  padding: 0;
}
// input:checked ~ .thumbs-up {
//   transition-duration: 0.5s;
//   opacity: 1;
//   font-weight: 800;
//   background: #1360df;
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -webkit-animation: likechecked 0.8s Linear both;
//   animation: likechecked 0.8s Linear both;
// }

// @keyframes likechecked {
//   0% {
//     opacity: 0;
//   }
//   25% {
//     opacity: 0.25;
//   }
//   50% {
//     opacity: 0.5;
//   }
//   75% {
//     opacity: 0.75;
//   }
//   100% {
//     opacity: 1;
//   }
// }
// @-webkit-keyframes likechecked {
//   0% {
//     opacity: 0;
//   }
//   25% {
//     opacity: 0.25;
//   }
//   50% {
//     opacity: 0.5;
//   }
//   75% {
//     opacity: 0.75;
//   }
//   100% {
//     opacity: 1;
//   }
// }

a {
  color: var(--dark-blue-2);
  font-size: 16px;
  font-weight: 500;
  margin-left: 0.8rem;
}
</style>
