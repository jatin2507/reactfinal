import logo from './logo.svg';
import './App.css';
import Navbars from './component/Navbars';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import WOW from 'wow.js';
import React, { useEffect, useState } from 'react'
import OurWork from './pages/OurWork';
import Services from './pages/Services';
import Services1 from './pages/services1';
import Services2 from './pages/services2';
import Contact from './pages/Contact';
import Services3 from './pages/services3';
import Services4 from './pages/services4';
import Services5 from './pages/services5';
import Services6 from './pages/services6';
import AnimatedCursor from "react-animated-cursor"
import Notfound from './pages/Notfound';
import Admin from './pages/Admin';
import AdminLogin from './pages/Admin';
import AdminPage from './pages/AdminPage';
import axioscon  from "axios"
import { v4 as uuidv4 } from 'uuid';
var axios = axioscon.create({ baseURL: "http://localhost:2507" });
function App() {
  
  
  let route = uuidv4()
  useEffect(() => {
    let wow = new WOW()
    wow.init()
     }, []);
     console.log(route)

  return (
    <div className="App">

      <AnimatedCursor 
      innerSize={15}
      outerSize={10}
      
      color='0,82,212'
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={5}
      outerStyle={{
      background: "rgba(255, 225, 225, 0.3)"
      }}
     
      
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/ourWork' exact element={<OurWork />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/services1' exact element={<Services1 />} />
          <Route path='/services2' exact element={<Services2 />} />
          <Route path='/services3' exact element={<Services3 />} />
          <Route path='/services4' exact element={<Services4 />} />
          <Route path='/services5' exact element={<Services5 />} />
          <Route path='/services6' exact element={<Services6 />} />
          <Route path='/contact' exact element={<Contact axios={axios} />} />
          <Route path='*' exact element={<Notfound />} />
          <Route path='/admin/radheykrishna/login' exact element={<AdminLogin axios={axios} route={route}/>} />
          <Route path={'/admin/radheykrishna/'+route} exact element={<AdminPage axios={axios} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
