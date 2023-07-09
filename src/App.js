import React from 'react';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';

import './App.css';
import NameList from './Components/Pages/NameList/NameList';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Products from './Components/Pages/Products/Products';
import Login from './Components/Pages/Login/Login';

function App() {
  return (

    <div>

      <BrowserRouter>
        <HeaderBar/>
        
        <Routes>

        <Route path="/About" element={<About />} />
          
        <Route path="/NameList" element={<NameList />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
