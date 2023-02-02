import axios from "axios";
import nookies from "nookies";

const api = () => {
  const token = nookies.get().token;

  return axios.create({
    baseURL: 'http://localhost:4000/api/products',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
}


export default api;