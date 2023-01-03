// import React from "react";
// import { NavLink } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function NavBar() {
//   const [click, setClick] = React.useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);

//   return (
//       <div>
//         <div className={click ? "nav-main-container" : ""} onClick={() => Close()} />
//         <nav className="navbar" onClick={e => e.stopPropagation()}>
//           <div className="nav-container main_navbar">
//             <div className="navbar_logo">
//             <NavLink exact to="/" className="nav-logo">
//                 <img src={require("../images/logo.png")} alt="Logo Here" />
//               </NavLink>
//             </div>
//             <ul className={click ? "nav-menu active" : "nav-menu"}>
//               <li className="nav-item menu_item">
//                 <NavLink
//                   exact
//                   to="/"
//                   activeClassName="active"
//                   className="nav-links menu_item"
//                   onClick={click ? handleClick : null}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//                <li className="nav-item">
//                 <NavLink
//                   exact
//                   to="/about"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={click ? handleClick : null}
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   to="/about"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={click ? handleClick : null}
//                 >
//                   our work <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"/></svg>
//                 </NavLink>
//                 <ul className={click ? "nav-menu active" : "submenu"}>
//               <li className="nav-item menu_item">
//                 <NavLink
//                   exact
//                   to="/"
//                   activeClassName="active"
//                   className="nav-links menu_item"
//                   onClick={click ? handleClick : null}
//                 >
//                   Design Project
//                 </NavLink>
//               </li>
//               <li className="nav-item menu_item">
//                 <NavLink
//                   exact
//                   to="/"
//                   activeClassName="active"
//                   className="nav-links menu_item"
//                   onClick={click ? handleClick : null}
//                 >
//                   Development Project
//                 </NavLink>
//               </li>
//               <li className="nav-item menu_item">
//                 <NavLink
//                   exact
//                   to="/"
//                   activeClassName="active"
//                   className="nav-links menu_item"
//                   onClick={click ? handleClick : null}
//                 >
//                   Home Demo-3
//                 </NavLink>
//               </li>
//             </ul>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   to="/blog"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={click ? handleClick : null}
//                 >
//                   Blog
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink
//                   exact
//                   to="/contact"
//                   activeClassName="active"
//                   className="nav-links"
//                   onClick={click ? handleClick : null}
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//             <div class="nav_contact">
//                     <div class="header_contact_icon">
//                         <a href="tel:(+91)94099 11772">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
//                                 <g clip-path="url(#clip0_1_145)">
//                                     <path d="M24.9178 36.4753C24.9178 35.0928 23.797 33.9721 22.4145 33.9721H19.3492C18.6853 33.9721 18.0486 34.2358 17.5791 34.7053C17.1096 35.1747 16.8459 35.8114 16.8459 36.4753C16.8459 37.8578 17.9667 38.9786 19.3492 38.9786H22.4145C23.797 38.9786 24.9178 37.8578 24.9178 36.4753ZM6.14441 30.0204C6.56254 30.0524 7.0684 30.0707 7.57652 30.041C7.84723 31.4138 8.51973 32.6871 9.52355 33.691C10.8562 35.0235 12.6636 35.7722 14.5482 35.7722H15.5034C15.4613 36.0027 15.4396 36.2379 15.4396 36.4753C15.4396 36.7154 15.4613 36.9505 15.5028 37.1785H14.5482C12.2907 37.1785 10.1255 36.2817 8.52918 34.6853C7.25566 33.4117 6.4273 31.7762 6.14441 30.0204ZM5.4291 28.5241C4.31887 28.3369 3.28574 27.8091 2.47926 27.0025C1.45645 25.9797 0.881836 24.5925 0.881836 23.146V19.8223C0.881836 18.3758 1.45645 16.9885 2.47926 15.9657C3.50207 14.9429 4.88934 14.3682 6.33582 14.3682H6.69887C7.27918 7.04354 13.4075 1.28003 20.8818 1.28003C28.3562 1.28003 34.4845 7.04354 35.0648 14.3682H35.4279C36.8743 14.3682 38.2616 14.9429 39.2844 15.9657C40.3072 16.9885 40.8818 18.3758 40.8818 19.8223V23.146C40.8818 24.5925 40.3072 25.9797 39.2844 27.0025C38.2616 28.0254 36.8743 28.6 35.4279 28.6H33.8184C33.1509 28.6 32.6098 28.0589 32.6098 27.3914V15.508C32.6098 9.03081 27.359 3.78003 20.8818 3.78003C14.4046 3.78003 9.15387 9.03081 9.15387 15.508V27.3914C9.15387 27.8627 8.8841 28.271 8.49051 28.4703C7.40707 28.8463 5.72684 28.5743 5.4291 28.5241Z" fill="white"></path>
//                                 </g>
//                                 <defs>
//                                     <clipPath id="clip0_1_145">
//                                         <rect width="40" height="40" fill="white" transform="translate(0.881836 0.129395)"></rect>
//                                     </clipPath>
//                                 </defs>
//                             </svg>
//                             <div class="contact_detail">
//                                 <span class="contact_info">Free Consultant</span>
//                                 <span>(+91)94099 11772</span>
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//             <div className="nav-icon" onClick={handleClick}>
//               {/* <i className={click ? "fa fa-times" : "fa fa-bars"}></i> */}
//               <svg xmlns="http://www.w3.org/2000/svg" className={click ? "fa fa-times" : "fa fa-bars"} width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/></svg>
//             </div>
//           </div>
//         </nav>
//       </ div>
//   );
// }
// export default NavBar;

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import SlideToggle from "react-slide-toggle";
import NavDropdown from "react-bootstrap/NavDropdown";
import useMediaQuery from "./useMediaQuery";
import ReactWhatsapp from "react-whatsapp";
export default function Navbars({ active }) {
  const ref = useRef();
  const [click1, setclick1] = useState();
  const handleclick1 = () => setclick1(!click1);
  const [click2, setclick2] = useState(false);
  const handleclick2 = () => setclick2(!click2);
  const [size, setsize] = useState(false);

  let fream = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="main_navbar">
      <div className="container">
        {/* --header design start----- */}
        <header id="main_header">
          <div className="menu_navbar">
            <div className="navbar_logo">
              <Link to="/">
                <img src={require("../images/logo.png")} alt="Logo Here" />
              </Link>
            </div>
            <ul className="mainmenu">
              <li
                className={active === "home" ? "menu_item active" : "menu_item"}
              >
                <Link to="/">home</Link>
              </li>
              <li
                className={
                  active === "about" ? "menu_item active" : "menu_item"
                }
              >
                <Link to="/about">about</Link>
              </li>
              <li
                className={
                  active === "our work" ? "menu_item active" : "menu_item"
                }
              >
                <Link to="/ourWork">our work</Link>
                {/* <ul className="submenu">
                  <li><Link to="service_detail.html">Design Project</Link></li>
                  <li><Link to="service_detail.html">Development Project</Link></li>
                  <li><Link to="service_detail.html">Home Demo-3</Link></li>
                </ul> */}
              </li>
              <li
                className={
                  active === "services" ||
                  active.substring(0, active.length - 1) === "services"
                    ? "menu_item active"
                    : "menu_item"
                }
              >
                <Link to="/services">
                  services{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4Z"
                    />
                  </svg>
                </Link>
                <ul className="submenu">
                  <li className={active === "services1" ? " active" : ""}>
                    <Link to="/services1">Graphic Design</Link>
                  </li>
                  <li className={active === "services2" ? " active" : ""}>
                    <Link to="/services2">UI/UX Design</Link>
                  </li>
                  <li className={active === "services3" ? " active" : ""}>
                    <Link to="/services3">Frontend Development</Link>
                  </li>
                  <li className={active === "services4" ? " active" : ""}>
                    <Link to="/services4">Backend Development</Link>
                  </li>
                  <li className={active === "services5" ? " active" : ""}>
                    <Link to="/services5">Software Development</Link>
                  </li>
                  <li className={active === "services6" ? " active" : ""}>
                    <Link to="/services6" on>
                      Game Development
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={
                  active === "contact" ? "menu_item active" : "menu_item"
                }
              >
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <div className="nav_contact">
              <div className="header_contact_icon">
                <Link to="tel:(+91)94099 11772">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={41}
                    height={41}
                    viewBox="0 0 41 41"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_145)">
                      <path
                        d="M24.9178 36.4753C24.9178 35.0928 23.797 33.9721 22.4145 33.9721H19.3492C18.6853 33.9721 18.0486 34.2358 17.5791 34.7053C17.1096 35.1747 16.8459 35.8114 16.8459 36.4753C16.8459 37.8578 17.9667 38.9786 19.3492 38.9786H22.4145C23.797 38.9786 24.9178 37.8578 24.9178 36.4753ZM6.14441 30.0204C6.56254 30.0524 7.0684 30.0707 7.57652 30.041C7.84723 31.4138 8.51973 32.6871 9.52355 33.691C10.8562 35.0235 12.6636 35.7722 14.5482 35.7722H15.5034C15.4613 36.0027 15.4396 36.2379 15.4396 36.4753C15.4396 36.7154 15.4613 36.9505 15.5028 37.1785H14.5482C12.2907 37.1785 10.1255 36.2817 8.52918 34.6853C7.25566 33.4117 6.4273 31.7762 6.14441 30.0204ZM5.4291 28.5241C4.31887 28.3369 3.28574 27.8091 2.47926 27.0025C1.45645 25.9797 0.881836 24.5925 0.881836 23.146V19.8223C0.881836 18.3758 1.45645 16.9885 2.47926 15.9657C3.50207 14.9429 4.88934 14.3682 6.33582 14.3682H6.69887C7.27918 7.04354 13.4075 1.28003 20.8818 1.28003C28.3562 1.28003 34.4845 7.04354 35.0648 14.3682H35.4279C36.8743 14.3682 38.2616 14.9429 39.2844 15.9657C40.3072 16.9885 40.8818 18.3758 40.8818 19.8223V23.146C40.8818 24.5925 40.3072 25.9797 39.2844 27.0025C38.2616 28.0254 36.8743 28.6 35.4279 28.6H33.8184C33.1509 28.6 32.6098 28.0589 32.6098 27.3914V15.508C32.6098 9.03081 27.359 3.78003 20.8818 3.78003C14.4046 3.78003 9.15387 9.03081 9.15387 15.508V27.3914C9.15387 27.8627 8.8841 28.271 8.49051 28.4703C7.40707 28.8463 5.72684 28.5743 5.4291 28.5241Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_145">
                        <rect
                          width={40}
                          height={40}
                          fill="white"
                          transform="translate(0.881836 0.129395)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="contact_detail">
                    <span className="contact_info">Free Consultant</span>
                    <Link
                      onClick={() => {
                        const newWindow = window.open(
                          "https://api.whatsapp.com/send?phone=9313722138&text=Hello, Dark ninja solutions",
                          "_blank"
                        );
                      }}
                    >
                      <span>(+91)94099 11772</span>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
            {fream ? (
              <SlideToggle
                render={({ toggle, setCollapsibleElement }) => (
                  <div className="my-collapsible">
                    <div
                      className="mobile-nav-btn"
                      onClick={() => {
                        console.log("called");
                        setsize(!size);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4A.75.75 0 0 1 2.75 7h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 7.75Zm0 4a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                        />
                      </svg>
                      {/* <i class="fa-solid fa-bars-staggered"></i> */}
                      <i
                        className="fa-solid fa-xmark mobile-nav-icon"
                        name="close-outline"
                      />
                    </div>
                    <div ref={setCollapsibleElement}>
                      <ul
                        className={size ? "mob_main_menu" : "mobile_drop_down"}
                      >
                        <li
                          className={
                            active === "home" ? "menu_item active" : "menu_item"
                          }
                        >
                          <Link to="/">home</Link>
                        </li>
                        <li
                          className={
                            active === "about"
                              ? "menu_item active"
                              : "menu_item"
                          }
                        >
                          <Link to="/about">about</Link>
                        </li>
                        <li
                          className={
                            active === "our work"
                              ? "menu_item active"
                              : "menu_item"
                          }
                        >
                          <Link to="/ourWork">our work</Link>
                          {/* <ul className={!click1 ? "mobile_drop_down" : "hiddendropdown"} >
                          <li><Link to="/services1" >ul/ux design</Link></li>
                          <li><Link to="/services2" >Game Development</Link></li>
                          <li><Link to="/services3" >Web Development</Link></li>
                        </ul> */}
                        </li>
                        <li
                          className={
                            active === "services" ||
                            active.substring(0, active.length - 1) ===
                              "services"
                              ? "menu_item  active"
                              : ""
                          }
                        >
                          <Link to="/services">
                            services{" "}
                            </Link>
                            <i onClick={handleclick2}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                  fill="rgba(255,255,255,1)"
                                />
                              </svg>
                            </i>
                          
                          <ul
                            className={
                              click2
                                ? ""
                                : "mobile_drop_down"
                            }
                          >
                            <li
                              className={
                                active === "services1" ? " active" : ""
                              }
                            >
                              <Link to="/services1">Graphics design</Link>
                            </li>
                            <li
                              className={
                                active === "services2" ? " active" : ""
                              }
                            >
                              <Link to="/services2">UI/UX Design</Link>
                            </li>
                            <li
                              className={
                                active === "services3" ? " active" : ""
                              }
                            >
                              <Link to="/services3">Frontend Development</Link>
                            </li>
                            <li
                              className={
                                active === "services4" ? " active" : ""
                              }
                            >
                              <Link to="/services4">Backend Development</Link>
                            </li>
                            <li
                              className={
                                active === "services5" ? "menuitem active" : ""
                              }
                            >
                              <Link to="/services5">Software Development</Link>
                            </li>
                            <li
                              className={
                                active === "services6" ? " active" : ""
                              }
                            >
                              <Link to="/services6">Game Development</Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          className={
                            active === "contact"
                              ? "menu_item active"
                              : "menu_item"
                          }
                        >
                          <Link to="/contact">contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              />
            ) : null}
          </div>
        </header>
        {/* --header design end----- */}
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// import { Link } from 'react-router-dom'
// export default function Navbars({ handleclick }) {
//   const [click, setClick] = React.useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);
//   return (
//     <>
//       <header className="header Navbars">
//         <nav className="navbar">
//           <div>

//             {/* <img className="brand" src={require("../assets/logoreal.png")} /> */}
//           </div>

//           <input type="checkbox" id="nav" className="hidden" />
//           <label htmlFor="nav" className="nav-toggle">
//             <span />
//             <span />
//             <span />
//           </label>

//           <div className="wrapper">
//             <div className="menu">
//               <div className="menu-item">
//                 <Link to="/">Home</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/ourWork">OurWork</Link>
//                 <Link to="/services">Services</Link>
//                 <Link to="/contact">Contact</Link>
//               </div>

//             </div>
//           </div>
//           <div>
//             {/* <img className="brand2" src={require("../assets/logoreal.png")} /> */}
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }
