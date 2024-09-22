import axios from "axios";

// Function to fetch user data from GitHub API with advanced search capabilities
export const fetchUserData = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  const query = [];

  // Construct the search query based on provided parameters
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  // Join the query parameters into a single string
  const queryString = query.join("+");

  try {
    // Make the API request to GitHub's search users endpoint
    const response = await axios.get(
      `https://api.github.com/search/users?q=${queryString}&page=${page}`
    );

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Handle errors by throwing them to be caught in the component
    throw error;
  }
};
