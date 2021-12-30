import React from "react";
//import "./App.css";
import Nav from "./components/Nav/nav";
import About from "./components/About";
import Portfolio from "./components/portfolio";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<About />} />
      </Routes>
      <Contact />
    </Router>
  </div>
);

export default App;
