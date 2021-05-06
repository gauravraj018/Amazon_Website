//axios ka istemmal baseurl dene k liye hota hai wide use
//"jsfetchapi" bhi hota hai axios ka supplement parr axios easy hota hai

import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-785e0/us-central1/api",
});
export default instance;
