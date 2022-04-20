import baseURL from "@/services/bddService";

class userServices {
    getOneUser(userId) {
        return baseURL.post(`/user/${userId}`);
    }

    getAll() {
        return baseURL.get("/user");
      }
    
    deleteUserById(userId) {
    return baseURL.delete(`/user/${userId}`);
    }

    update(userId, data) {
    return http.put(`/user/${userId}`, data);
    }

    createUser(data) {
    return baseURL.post("/user", data)
    }
}

export default new userServices();