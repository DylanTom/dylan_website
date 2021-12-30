import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import Home from './components/home';
import {Nav, Home, Portfolio} from "./components";

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = '/portfolio' element = {<Portfolio />} />
    </Routes>
  </Router>,
  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
