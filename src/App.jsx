import React from "react";
import {Nav, About, Portfolio, Contact} from './components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

const App = () => (
  <div className = "App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<About />} />
      </Routes>
      <Contact />
    </Router>
  </div>
);

export default App;
