import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navb from './components/Navbar';
import Cart from './components/user/cart';
import Signup from './components/Signup'
import st from './components/style';
import Admin from './components/admin';
import Product from './components/product';
import Sell from "./components/seller/Sell.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
    <Navb style={st.navbar}/>
    <div style={{height:"60px"}}></div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/secret' element={<Admin />} />
        <Route path='/product' element={<Product />} />
        <Route path='/sell' element={<Sell />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

