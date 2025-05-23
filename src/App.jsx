import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/Footer';

// Import your actual HomePage component
import HomePage from './pages/homepage';

const Products = () => <div><h1>Our Products</h1></div>;
const About = () => <div><h1>About Us</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
