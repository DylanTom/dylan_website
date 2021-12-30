import React from 'react';
import '../App.css';
import About from './About';
import Contact from './Contact';

function Home() {
  return (
    <div className="Home">
      <About />
      <Contact />
    </div>
  );
}

export default Home;