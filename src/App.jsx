import React from "react";
import {Nav, About, Portfolio, Contact} from './components';
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
