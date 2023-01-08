import React, { useEffect, useState } from "react";
import Navbars from "../component/Navbars";
import WOW from "wow.js";
import Particless from "../component/Particles";
import { Link } from "react-router-dom";

import EndFooter from "../component/EndFooter";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";
export default function About() {
  const [loader, setloader] = useState(true);
  useEffect(() => {setloader(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); let wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <Loader loader={loader} />
      <Cursor />
      <Navbars active="about" />
      <Particless />
      <div className="contact_section wow fadeInUp">
        <div className="service_title">
          <h2>About Us</h2>
        </div>
        <div className="service_inner_pages">
          <span>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Darkninja
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={7}
              height={9}
              viewBox="0 0 7 9"
              fill="none"
            >
              <path
                d="M3.67202 4.50008L0.843018 1.67208L2.25702 0.25708L6.50002 4.50008L2.25702 8.74308L0.843018 7.32808L3.67202 4.50008Z"
                fill="#E0DEDE"
              />
            </svg>
            About Us
          </span>
        </div>
      </div>
      <div className="info_section">
        <div className="about_blog container wow fadeInUp">
          <div className="row">
            <div className="about_blog_left col-lg-12">
              <div className="about_blog_img">
                <img
                  src={require("../images/about_page.png")}
                  alt="about imag"
                  className="img-fluid"
                />
              </div>
              <div className="about_blog_detail">
                <h2>Want to Know Who We Are?</h2>
                <p>
                  We have over 3 years of expertise in IT development and have a
                  team of experts in several vertical sectors. They are
                  experienced with all levels of development, from small
                  startups to large enterprises, as well as in front-end and
                  back-end coding languages.
                </p>
                <p>
                  Dark ninja is a company that specializes in IT development.
                  We've been developing and selling software & applications for
                  the variant industry and clients all over the world, but we're
                  incredibly proud of our work with small businesses. Our goal
                  is to give you the tools and support you need to grow your
                  business. We're here to help you get started, and we're always
                  eager to hear from you if we can assist! This company was
                  founded by CEO Divya Umraliya, In the early days of the
                  company, we were in offline mode and finished many projects
                  for offline markets. Now we want to go live so that the world
                  knows about us and wants to work with the leading society in
                  the world as well.
                </p>
                <p>
                  We offer mobile app development services for various
                  industries such as Android, iOS etc as well as web design,
                  development, SEO services, logo design etc for clients across
                  the world. We ensure to offer our best service to the clients.
                  and We provide every web or app development service with all
                  customization options using the latest methods and
                  technologies. We have gained 100% client satisfaction.
                </p>
                <p>
                  Each application and every service are customs made meaning it
                  will be developed using the latest methods and technologies
                  will be scalable to any point.
                </p>

                <p>
                  The company's main focus is on developing custom web
                  applications for clients, but we also take on some freelance
                  work if there is a particular need that cannot be met by
                  existing solutions.At Dark ninja solutions, we specialize in
                  web development, app development and game developments and
                  designing. We strive to make your digital life easier by
                  providing all the services you need, from website design to
                  app development to graphic design. We will help you create a
                  website that is easy to navigate, has a clean look and feel,
                  and provides information relevant to your industry or
                  audience. We will work with you through every step of the
                  process, from concepting to launch and beyond. In addition, we
                  provide ongoing support for any issues that may arise after
                  launch.
                </p>
              </div>
              {/* <div className="about_srevice">
                                <div className="about_service_main_title">
                                    <h2>UI/UX Design Services</h2>
                                    <div className="service_card_subtitle">
                                        <img src={require("../images/left_icon.png")} alt="left icon" />
                                        <span>Web UI/Ux Design</span>
                                    </div>
                                    <div className="service_card_subtitle">
                                        <img src={require("../images/left_icon.png")} alt="left icon" />
                                        <span>Application UI/Ux Design</span>
                                    </div>
                                    <div className="service_card_subtitle">
                                        <img src={require("../images/left_icon.png")} alt="left icon" />
                                        <span>Dashboard UI/Ux Design</span>
                                    </div>
                                    <div className="service_card_subtitle">
                                        <img src={require("../images/left_icon.png")} alt="left icon" />
                                        <span>User-friendly UI/Ux Design</span>
                                    </div>
                                    <div className="service_card_subtitle">
                                        <img src={require("../images/left_icon.png")} alt="left icon" />
                                        <span>Interactivity</span>
                                    </div>
                                    <div className="service_card_subtitle">
                                        <img src={require("../images/left_icon.png")} alt="left icon" />
                                        <span>Prototype</span>
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
        <div className="assuranve_service_wrapper wow fadeInUp">
          <div className="assurance_service container">
            <div className="row">
              <div className="assurance_service_box col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="assurance_service_box_wrapper">
                  <div className="assurance_service_img">
                    <img
                      src={require("../images/about_history.png")}
                      alt="assurance_service_img"
                    />
                  </div>
                  <div className=" assurance_service_detail">
                    <h2>our History</h2>
                    <h6>
                      We have over three years of expertise in IT development,
                      design and have a team of experts in several vertical
                      sectors. They are experienced with all levels of
                      development, from small startups to large enterprises, as
                      well as in web and app design, front-end and back-end
                      coding languages.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="assurance_service_box col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="assurance_service_box_wrapper">
                  <div className="assurance_service_img">
                    <img
                      src={require("../images/about_mission.png")}
                      alt="assurance_service_img"
                    />
                  </div>
                  <div className=" assurance_service_detail">
                    <h2>Our Mission</h2>
                    <h6>
                      To deliver world-class products & services at competitive
                      rates. We are well-known for providing high-quality, 24/7
                      support, dependable & timely delivery of IT services with
                      tailor-made requirements for all facets of the business
                      development to a vast collection of clientele.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="assurance_service_box col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="assurance_service_box_wrapper">
                  <div className="assurance_service_img">
                    <img
                      src={require("../images/about_vission.png")}
                      alt="assurance_service_img"
                    />
                  </div>
                  <div className=" assurance_service_detail">
                    <h2>Our Vission</h2>
                    <h6>
                      The vision of our company is to become the world's most
                      user-friendly digital solution by providing customers with
                      an eye-catching and smooth experience, good customer
                      service, and quick response times. We aim to help you
                      innovate and use technology to create ideas that can
                      change the world.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customer_service wow fadeInUp">
          <div className="container">
            <div className="row service_warapper">
              <div className="customer_service_sec col-md-6 col-xs-12">
                <div className="sub_title">
                  <h4>WHY CHOOES US</h4>
                </div>
                <div className="main_title">
                  <h2>
                    We Provide truly prominent it solutions for your success
                  </h2>
                </div>
                <div className="row">
                  <div className="cutomer_service_wrapper col-md-6 col-sm-6">
                    <div className="service_image">
                      <img
                        src={require("../images/service_1.png")}
                        alt="service image"
                      />
                    </div>
                    <div className="service_description">
                      <h2>24/7 Support</h2>
                      <p>
                        You’ll take your business to a whole new level, complete
                        with high security, 24/7 accessibility, and increased
                        productivity.
                      </p>
                    </div>
                  </div>
                  <div className="cutomer_service_wrapper col-md-6 col-sm-6">
                    <div className="service_image">
                      <img
                        src={require("../images/service_2.png")}
                        alt="service image"
                      />
                    </div>
                    <div className="service_description">
                      <h2>Faster, Quality &amp; Trusted</h2>
                      <p>
                        We Create eye-catching, faster, quality, efficient and
                        secure web application according to your unique needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="service-images">
                  <section className="main-container">
                    <div className="main">
                      <div className="big-circle">
                        <div className="icon-block">
                          <img
                            src={require("../images/services_image_8.png")}
                            alt="web design icon"
                          />
                        </div>
                        <div className="icon-block">
                          <img
                            src={require("../images/services_image_7.png")}
                            alt="game design icon"
                          />
                        </div>
                        <div className="icon-block">
                          <img
                            src={require("../images/services_image_6.png")}
                            alt="game dev icon"
                          />
                        </div>
                        <div className="icon-block">
                          <img
                            src={require("../images/services_image_5.png")}
                            alt="ui-ux icon"
                          />
                        </div>
                      </div>
                      <div className="circle">
                        <div className="icon-block">
                          <img
                            src={require("../images/services_image_4.png")}
                            alt="app icon"
                          />
                        </div>
                        <div className="icon-block">
                          <img
                            src={require("../images/services_image_3.png")}
                            alt="blockchain icon"
                          />
                        </div>
                        <div className="icon-block">
                          <img
                            src={require("../images/services_image_1.png")}
                            alt="ar-vr icon"
                          />
                        </div>
                        <div className="icon-block">
                          <img
                            src={require("../images/services_image_2.png")}
                            alt="artificial intelligence icon"
                          />
                        </div>
                      </div>
                      <div className="center-logo">
                        <img
                          src={require("../images/services_logo.png")}
                          alt="logo"
                        />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---testimonial start--- */}
        {/* <div className="testimonial ">
          <div className="container">
            <div className="sub_title wow fadeInUp">
              <h4>LATEST PROJECTS</h4>
            </div>
            <div className="main_title wow fadeInUp">
              <h2>
                Proud Projects That Make <br />
                Us Stand Out
              </h2>
            </div>
            <div className="owl-carousel owl-theme wow fadeInUp">
              <div className="item">
                <div className="testimonial_items">
                  <div className="testimonial_wrapper">
                    <div className="testimonial_img">
                      <img src={require("../images/team_1.png")} alt="owner" />
                    </div>
                    <div className="testimonial_detail">
                      <h2>Divya Umraliya</h2>
                      <h6>Owner Of Gurukrupa Furniture</h6>
                      <div className="star_icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.50016 10.3334L2.58149 12.7267L3.64682 8.26008L0.160156 5.27341L4.73682 4.90675L6.50016 0.666748L8.26349 4.90675L12.8408 5.27341L9.35349 8.26008L10.4188 12.7267L6.50016 10.3334Z"
                            fill="url(#paint0_linear_111_270)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_111_270"
                              x1="7.57715"
                              y1="12.7267"
                              x2="7.57715"
                              y2="0.666747"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="2.44532e-07" stopColor="#0052D4" />
                              <stop offset="0.4805" stopColor="#4364F7" />
                              <stop offset={1} stopColor="#0052D4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.50016 10.3334L2.58149 12.7267L3.64682 8.26008L0.160156 5.27341L4.73682 4.90675L6.50016 0.666748L8.26349 4.90675L12.8408 5.27341L9.35349 8.26008L10.4188 12.7267L6.50016 10.3334Z"
                            fill="url(#paint0_linear_111_270)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_111_270"
                              x1="7.57715"
                              y1="12.7267"
                              x2="7.57715"
                              y2="0.666747"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="2.44532e-07" stopColor="#0052D4" />
                              <stop offset="0.4805" stopColor="#4364F7" />
                              <stop offset={1} stopColor="#0052D4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.50016 10.3334L2.58149 12.7267L3.64682 8.26008L0.160156 5.27341L4.73682 4.90675L6.50016 0.666748L8.26349 4.90675L12.8408 5.27341L9.35349 8.26008L10.4188 12.7267L6.50016 10.3334Z"
                            fill="url(#paint0_linear_111_270)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_111_270"
                              x1="7.57715"
                              y1="12.7267"
                              x2="7.57715"
                              y2="0.666747"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="2.44532e-07" stopColor="#0052D4" />
                              <stop offset="0.4805" stopColor="#4364F7" />
                              <stop offset={1} stopColor="#0052D4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.50016 10.3334L2.58149 12.7267L3.64682 8.26008L0.160156 5.27341L4.73682 4.90675L6.50016 0.666748L8.26349 4.90675L12.8408 5.27341L9.35349 8.26008L10.4188 12.7267L6.50016 10.3334Z"
                            fill="url(#paint0_linear_111_270)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_111_270"
                              x1="7.57715"
                              y1="12.7267"
                              x2="7.57715"
                              y2="0.666747"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="2.44532e-07" stopColor="#0052D4" />
                              <stop offset="0.4805" stopColor="#4364F7" />
                              <stop offset={1} stopColor="#0052D4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13}
                          height={13}
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M6.50016 10.3334L2.58149 12.7267L3.64682 8.26008L0.160156 5.27341L4.73682 4.90675L6.50016 0.666748L8.26349 4.90675L12.8408 5.27341L9.35349 8.26008L10.4188 12.7267L6.50016 10.3334Z"
                            fill="url(#paint0_linear_111_270)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_111_270"
                              x1="7.57715"
                              y1="12.7267"
                              x2="7.57715"
                              y2="0.666747"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="2.44532e-07" stopColor="#0052D4" />
                              <stop offset="0.4805" stopColor="#4364F7" />
                              <stop offset={1} stopColor="#0052D4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial_desc">
                    <h6>
                      “In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful conten.”
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* ---testimonial end--- */}
        {/* ---offer benner start--- */}
        <EndFooter />
      </div>
    </>
  );
}
