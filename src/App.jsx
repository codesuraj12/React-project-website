import React from 'react';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Video from './Video';
import ChatWidget from './chatWidget';  // Import the ChatWidget
import './App.css';
import Footer from './footer';
import Ecommerce from './Ecommerce';
import Career from './Career';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:category" element={<Services />} />
          {/* <Route path="/services" element={<Services/>} /> */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/video" element={<Video />}/>
          <Route path ="/ecommerce/:menu" element={<Ecommerce/>}/>

          <Route path='/career' element = {<Career/>}></Route>
        </Routes>
        <ChatWidget /> {/* Add the chat widget here */}
      <Footer />
      </div>
    </Router>
  );
}

export default App;
