import baseURL from "@/services/bddService";

class postServices {
    getOnePost(postId) {
        return baseURL.post(`/post/${postId}`);
    }

    getAll() {
        return baseURL.get("/post");
      }
    
    deletePostById(postId) {
    return baseURL.delete(`/post/${postId}`);
    }

    update(postId, data) {
    return http.put(`/post/${postId}`, data);
    }

    createUser(data) {
    return baseURL.post("/post", data)
    }
}

export default new postServices();