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
import toast, { Toaster } from "react-hot-toast";
import Notfound from "./pages/Notfound";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/Admin";
import AdminPage from "./pages/AdminPage";
import axioscon from "axios";
import { v4 as uuidv4 } from "uuid";
import Helmet from "react-helmet";
var axios = axioscon.create({ baseURL: "https://darkninjasolutions.com:2507" });
function App() {
  let route = uuidv4();
  useEffect(() => {}, []);
  console.log(route);

  return (
    <div className="App">
      <Helmet>
        <title>DarkNinja Solutions</title>
        <meta
          name="description"
          content="Dark ninja solutions is a company that specializes in IT development. we are specialize in web development, app development and game developments and designing. We strive to make your digital life easier by providing all the services you need, from website design to app development to graphic design. We will help you create a Website, Software, Game and Application  that is easy to navigate, has a clean look and feel, and provides information relevant to your industry or audience. We will work with you through every step of the process, from concepting to launch and beyond. In addition, we provide ongoing support for any issues that may arise after launch."
        />

        <meta itemprop="name" content="Dark Ninja - IT Solution" />
        <meta
          itemprop="description"
          content="Dark ninja solutions is a company that specializes in IT development. we are specialize in web development, app development and game developments and designing. We strive to make your digital life easier by providing all the services you need, from website design to app development to graphic design. We will help you create a Website, Software, Game and Application  that is easy to navigate, has a clean look and feel, and provides information relevant to your industry or audience. We will work with you through every step of the process, from concepting to launch and beyond. In addition, we provide ongoing support for any issues that may arise after launch."
        />
        <meta
          itemprop="image"
          content="https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1589993875441840128"
        />

        <meta property="og:url" content="https://darkninjasolutions.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dark Ninja - IT Solution" />
        <meta
          property="og:description"
          content="Dark ninja solutions is a company that specializes in IT development. we are specialize in web development, app development and game developments and designing. We strive to make your digital life easier by providing all the services you need, from website design to app development to graphic design. We will help you create a Website, Software, Game and Application  that is easy to navigate, has a clean look and feel, and provides information relevant to your industry or audience. We will work with you through every step of the process, from concepting to launch and beyond. In addition, we provide ongoing support for any issues that may arise after launch."
        />
        <meta
          property="og:image"
          content="https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1589993875441840128"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dark Ninja - IT Solution" />
        <meta
          name="twitter:description"
          content="Dark ninja solutions is a company that specializes in IT development. we are specialize in web development, app development and game developments and designing. We strive to make your digital life easier by providing all the services you need, from website design to app development to graphic design. We will help you create a Website, Software, Game and Application  that is easy to navigate, has a clean look and feel, and provides information relevant to your industry or audience. We will work with you through every step of the process, from concepting to launch and beyond. In addition, we provide ongoing support for any issues that may arise after launch."
        />
        <meta
          name="twitter:image"
          content="https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1589993875441840128"
        />
      </Helmet>
      <BrowserRouter>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Our-Works" exact element={<OurWork />} />
          <Route path="/Services" exact element={<Services />} />
          <Route
            path="/Services/Graphic-Design"
            exact
            element={<Services1 />}
          />
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
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
          style: {
            borderRadius: "10px",
            background: "#0052D4",
            color: "#fff",
            border: "1px solid #0052D4",
          },
        }}
      />
    </div>
  );
}

export default App;
