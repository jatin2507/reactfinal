import "./App.css";
import Navbars from "./component/Navbars";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WOW from "wow.js";
import React, { useEffect, useState } from "react";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";
import Services1 from "./pages/services1";
import Services2 from "./pages/services2";
import Contact from "./pages/Contact";
import Services3 from "./pages/services3";
import Services4 from "./pages/services4";
import Services5 from "./pages/services5";
import Services6 from "./pages/services6";

import Notfound from "./pages/Notfound";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/Admin";
import AdminPage from "./pages/AdminPage";
import axioscon from "axios";
import { v4 as uuidv4 } from "uuid";

var axios = axioscon.create({ baseURL: "http://147.182.178.0:2507" });
function App() {
  let route = uuidv4();
  useEffect(() => {
    let wow = new WOW();
    wow.init();
  }, []);
  console.log(route);

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Our-Works" exact element={<OurWork />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/Services/Graphic-Design" exact element={<Services1 />} />
          <Route path="/Services/UI/UX-Design" exact element={<Services2 />} />
          <Route path="/Services/FrontEnd-Dev" exact element={<Services3 />} />
          <Route path="/Services/BackEnd-Dev" exact element={<Services4 />} />
          <Route path="/Services/Software-Dev" exact element={<Services5 />} />
          <Route path="/Services/Game-Dev" exact element={<Services6 />} />
          <Route path="/Contact" exact element={<Contact axios={axios} />} />
          <Route path="*" exact element={<Notfound />} />
          <Route
            path="/admin/radheykrishna/login"
            exact
            element={<AdminLogin axios={axios} route={route} />}
          />
          <Route
            path={"/admin/radheykrishna/" + route}
            exact
            element={<AdminPage axios={axios} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
