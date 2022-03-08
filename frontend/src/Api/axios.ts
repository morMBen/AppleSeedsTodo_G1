import axios from "axios";
let baseURL = process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000"
export default  axios.create({baseURL:baseURL});