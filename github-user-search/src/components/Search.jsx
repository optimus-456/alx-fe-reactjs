// components/Search.jsx
import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user.</p>}
      {userData && !error && (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <h2>{userData.name || "No Name Available"}</h2>
          <p>Username: {userData.login}</p>
          <p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
