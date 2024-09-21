import axios from "axios";

const API_URL = import.meta.env.VITE_GITHUB_API_URL;

export const searchUsers = (username) => {
  return axios.get(`${API_URL}/search/users?q=${username}`);
};
