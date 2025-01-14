import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
