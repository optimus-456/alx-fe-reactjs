// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>
        <footer>
          <p>GitHub User Search © 2024</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
