import axios from "axios";

const mainURL = axios.create({
  baseURL: "https://6637b788288fedf6938123a3.mockapi.io/api/",
});
export default mainURL;
