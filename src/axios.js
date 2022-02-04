import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// instance.get("/foo-bar");
// -> https://api.themoviedb.org/3/foo-bar

// https://api.themoviedb.org/3//trending/all/week?api_key=58b5fa947947db2c836a2deef57a8bd9&language=en-US