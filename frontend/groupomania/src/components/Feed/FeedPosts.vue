<template>
  <div class="posts">
    <div v-for="post in posts.slice().reverse()" :key="post.postId" class="post d-flex flex-column">
      <div class="profil-user">
        <h4>Publié par: {{post.author}}</h4>
        <h4>le {{ post.created.split("T")[0].split("-").reverse().join("/") + ", à " + post.created.split("T")[1].split(":").slice(0,-1).join(":") }} </h4>
        <div v-if="post.userId == this.user.userId || this.user.isadmin == 1" @click="deletePost(post.postId)">
            <font-awesome-icon icon="trash-can" />
            <button href="#">Supprimer</button>
        </div>
      </div> 
      <div class="p-10 d-flex flex-column"> 
        <img class="image" :src="post.imageUrl"/> 
        <p>{{post.contenu}}</p>
        <div class="actionPost d-flex flex-row align-items-center">
          <div @click="checkComments(post.postId)" class="commentIcon">
            <font-awesome-icon icon="comment" />
            <button href="#">Commenter</button>
          </div>
        </div>
        <div @keyup.enter="createComments(post.postId)" v-if="checkComment === 1 && checkCommentId == post.postId">
          <label for="content"></label>
          <textarea class ="textarea" v-model="newCommentContent" maxlength="100" ></textarea>
        </div>
        <div :key="comment.commentId" v-for="comment in post.comments[0]" >
          <div class="comments" >
            <p>Publié par: {{ comment.userName}}</p>
            <h4>le {{ comment.timestamp.split("T")[0].split("-").reverse().join("/") + ", à " + comment.timestamp.split("T")[1].split(":").slice(0,-1).join(":") }} </h4>
            <div v-if="comment.userName == this.user.pseudo || this.user.isadmin == 1" @click="deleteComments(comment.commentId)">
              <font-awesome-icon icon="trash-can" />
              <button href="#">Supprimer</button>
            </div>
          </div>
          <div><p>"{{ comment.content }}"</p></div>       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postService from "../../services/postService";
import commentService from "../../services/commentService";


export default {
  name: "FeedPost",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")),
      posts: [],
      comments: [],
      checkComment: 0,
      checkCommentId: 0,
      newCommentContent: "",
    };
  },
  mounted() {
    postService.getAllPost().then(
      (response) => {
        this.posts = response.data.posts[0];
      },
      (error) => {
        console.log(error)
      }
    );
  },
  methods: {
    deletePost(id){ 
      postService.deletePost(id)
      .then((res) =>{
        postService.getAllPost().then((response) => {
          this.posts = response.data.posts[0];
        },
        (error) => {
         console.log(error)
        }
        );
      })
      .catch((err) =>{
        console.log(err);
      })
    },
    deleteComments(id){
      commentService.deleteComment(id) 
      .then((res) =>{
        postService.getAllPost().then(
        (response) => {
          this.posts = response.data.posts[0];
        },
        (error) => {
          console.log(error)
        }
      );
      })
      .catch((err) =>{
        console.log(err);
      })
    },
    checkComments(id){
      this.newCommentContent =  ""
      this.checkComment = 1;
      this.checkCommentId = id
    },
    createComments(id){
      const comment = {content: this.newCommentContent, userName: this.user.pseudo};
      commentService.createComment(id, comment)
      .then((res) =>{
        postService.getAllPost().then((response) => {
          this.posts = response.data.posts[0];
          this.checkComment = 0;
          this.checkCommentId = 0;
          this.newCommentContent =  ""
        },
        (error) => {
         console.log(error)
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

.comments{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}


.textarea{
  width: 100%;
  margin-top: 1rem;
}

.image{
  object-fit: cover;
  width: 50%;
  align-self: center;
}
.posts{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

.profil-user{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

input {
  border: none;
  appearance: none;
  padding: 0;
}
button {
  color: var(--dark-blue-2);
  font-size: 16px;
  font-weight: 500;
  margin-left: 0.8rem;
}
</style>
