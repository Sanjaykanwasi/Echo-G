import axios from "axios";

const key = "cfdb0a9942324b96a794910002041d35";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);

export default {
  getGenreList,
  getAllGames,
};
