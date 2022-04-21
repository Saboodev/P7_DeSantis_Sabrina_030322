<template>
<div class="newPost d-flex flex-column">
    <div class="profil-user">
      <font-awesome-icon icon="user" />
    </div>
    <div class="p-10 d-flex flex-column">
        <label>  
            <input type="text" name="post" v-model="this.content" placeholder="Quoi de neuf ? ...">
        </label>
        <div class="i d-flex flex-row align-items-center">
        <label class="download">
          <input type="file" ref="file" @change="onFileSelected" required id="addPicture"/>
          <font-awesome-icon color=var(--dark-blue-2) icon="image" />
        </label>
        <button @click.prevent="createPost" class="btn btn-primary">Publier</button>
        </div>
    </div>
  </div>
</template>

<script>
import postService from "../../services/postService"

export default {
  name: "NewPost",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      file: "",
      content: "",
    };
  },
  methods: {
    createPost(){
      const formData = new FormData();
      formData.append('image', this.file, this.file.name);
      formData.append('contenu', this.content);
      formData.append('userId', this.user.userId);
      formData.append('author', this.user.pseudo);
      postService.createPost(formData)
      .then(() =>{    
        window.location.reload();
      })
      .catch((err) =>{
        console.log(err);
      })
    },      
    onFileSelected() {
      const file = this.$refs.file.files[0];
      this.file = file;
    }
  }
};
</script>


<style lang="scss" scoped>
#addPicture {
  display: none;
}
.image {
    border-radius: 50px;
    background-image: url('../../assets/mario.png');
    background-size: cover;
    background-position: center;
  }

h4 {
    padding-left: 0.5rem;
  }
.newPost {
  padding: 1rem;
  background-color: var(--gray-2);
  border: var(--border);
  height: 8rem;
  border-radius: var(--border-radius);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}
.p-10 {
  padding-left: 1.2rem;
}

input {
  border: none;
  background-color: var(--gray-2);
  padding: 0.5rem 0.2rem;
}
.i {
  display: flex;
  justify-content: space-between;
}
.btn {
  background-color: var(--red-2);
  border: none;
  border-radius: 40px;
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-weight: 400;
  width: 5rem;
  box-shadow: 0px 5px 10px rgb(0 0 0 / 30%);
  color: var(--text-primary-color);
  cursor: pointer;
}
</style>