export default function authHeader() {
    let token = JSON.parse(localStorage.getItem("token"));
  
    if (token) {
      // for Node.js Express back-end
      return { "Authorization": token };
    } else {
      return {};
    }
  }