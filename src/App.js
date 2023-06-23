
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Categorypage from './Categorypage';
import React from 'react';
import RegisterPage from './RegisterPage';
import AllProducts from './AllProducts';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/register" element={<RegisterPage/>} />
          <Route exact path="/category" element={<Categorypage/>} />
          <Route exact path="/allproducts" element={<AllProducts/>} />
        </Routes>
      </Router>
  );
}

export default App;
