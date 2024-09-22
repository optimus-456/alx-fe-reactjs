import axios from "axios";

// Base URL for GitHub's Search Users API
const SEARCH_USERS_URL = "https://api.github.com/search/users?q=";

// Function to fetch users based on advanced search criteria
export const fetchAdvancedUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  // Construct the query for GitHub's Search API
  let query = "";

  // Append username search if provided
  if (username) {
    query += `${username} in:login`; // Search by username
  }

  // Append location search if provided
  if (location) {
    query += ` location:${location}`; // Search by location
  }

  // Append minimum repository filter if provided
  if (minRepos) {
    query += ` repos:>=${minRepos}`; // Search by minimum repository count
  }

  // Complete URL for GitHub Search API with pagination
  const url = `${SEARCH_USERS_URL}${query}&page=${page}`;

  try {
    // Perform the API request
    const response = await axios.get(url);

    // Return the fetched data
    return response.data;
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    throw error;
  }
};
