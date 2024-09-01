import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuthenticated = true; // Simulate authentication status

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute
              element={<Profile />}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route path="/post/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
