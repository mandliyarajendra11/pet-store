import React from "react";
import { Route, Router } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Single from './SingleProduct'
import Cart from './Cart'
const App = () => {
  return (
  <Router>
    <Route path="/" element={<Home/>}/> 
    <Route path="/About" element={<About/>}/> 
    <Route path="/Products" element={<Products/>}/> 
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/singleProduct" element={<Single/>}/> 
    </Router>    
  )
  
};

export default App;
