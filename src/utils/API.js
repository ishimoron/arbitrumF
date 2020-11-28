import axios from "axios";

export default axios.create({
    baseURL: "OUR URL",
    responseType: "json"
  });