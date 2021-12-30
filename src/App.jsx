import React from "react";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Portfolio from "./components/portfolio";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
