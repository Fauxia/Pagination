import React, { useReducer } from "react";
import "./App.css";
import Comp from "./Comp";
import Product from "./api/Product";
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
import Navigation from "./api/Navigation";
import About from './api/About'
import Contact from './api/Contact'
import Login from "./api/Login";
import SignUp from "./api/SignUp";
import Nested from "./api/Nested";
import Cart from "./api/Cart";

function App() {
  let isLogged = true
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/about" element={isLogged ? <About/> : <Navigate to='/'/>}/>
        <Route path="/contact/:category/:id" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<Product/>}/>
        <Route path="/login" element={<Login/>}>
          <Route path="nested" element={<Nested/>}/>
          <Route path="loop" element={<h1>Boiler plate</h1>}/>
        </Route>
        <Route path="/sign" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
