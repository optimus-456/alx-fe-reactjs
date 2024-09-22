// services/githubService.js
import axios from "axios";

export const fetchUserData = async (username) => {
  const API_URL = `https://api.github.com/users/${username}`;
  const response = await axios.get(API_URL);
  return response.data;
};
