import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Video from './Video';
import ChatWidget from './chatWidget';  // Import the ChatWidget
import './App.css';
import Footer from './footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/video" element={<Video />}/>
        </Routes>
        <ChatWidget /> {/* Add the chat widget here */}
      <Footer />
      </div>
    </Router>
  );
}

export default App;
