// components/Search.jsx
import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1); // Pagination state
  const [hasMore, setHasMore] = useState(true); // More results state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchAdvancedUserData({
        username,
        location,
        minRepos,
        page,
      });
      setUsers((prevUsers) => [...prevUsers, ...data.items]); // Append new users
      setHasMore(data.items.length > 0); // Check if more results are available
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum repositories (optional)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && (
        <p>Looks like we can't find any users matching the criteria.</p>
      )}

      <div className="mt-8">
        {users.map((user) => (
          <div key={user.id} className="p-4 border-b">
            <img
              src={user.avatar_url}
              alt="User Avatar"
              width="50"
              className="inline-block"
            />
            <div className="inline-block ml-4">
              <h3 className="font-bold">{user.login}</h3>
              <p>Location: {user.location || "N/A"}</p>
              <p>Repositories: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Visit Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More button for pagination */}
      {hasMore && !loading && (
        <button
          className="bg-green-500 text-white p-2 mt-4 rounded"
          onClick={() => setPage(page + 1)} // Increment page to load more users
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
