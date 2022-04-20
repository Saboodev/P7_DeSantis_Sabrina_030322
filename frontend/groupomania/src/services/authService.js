import baseURL from "@/services/bddService";

class authServices {
    signUp(users) {
        return baseURL.post("/register", users)
    }

    login(users) {
        return baseURL.post("/login", users)
    }

    logout(users) {
        localStorage.removeItem("users")
    }
}

export default new authServices();