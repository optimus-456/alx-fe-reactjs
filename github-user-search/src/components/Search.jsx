import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // Import fetchUserData

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      // Fetch data using the fetchUserData function from githubService.js
      const data = await fetchUserData({ username, location, minRepos, page });
      setUsers(data.items); // Update the users list with the fetched data
      setHasMore(data.items.length > 0); // Check if there are more users to load
    } catch (err) {
      setError(true); // Set error state if API request fails
    } finally {
      setLoading(false); // Stop the loading indicator
    }
  };

  // Function to handle "Load More" for pagination
  const loadMore = async () => {
    setPage(page + 1);
    setLoading(true);

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: page + 1,
      });
      setUsers((prevUsers) => [...prevUsers, ...data.items]);
      setHasMore(data.items.length > 0);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search by username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search by location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {error && (
        <p className="text-red-500 mt-4">Looks like we can't find the user</p>
      )}

      <div className="mt-4">
        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="p-4 border-b border-gray-300">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-10 h-10 rounded-full"
                />
                <p>{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {hasMore && !loading && (
        <button
          onClick={loadMore}
          className="bg-green-500 text-white p-2 mt-4 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
