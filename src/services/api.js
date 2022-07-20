import axios from "axios";
// cria uma instacia da url base da api
const api = axios.create({ baseURL: "https://swapi.dev/api" });

export default api;
