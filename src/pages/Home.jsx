import React, { useEffect, useState } from "react";
import Navbars from "../component/Navbars";
import Particless from "../component/Particles";
import { Link } from "react-router-dom";
import WOW from "wow.js";
import Slider from "react-slick";
import { Triangle } from "react-loader-spinner";
import EndFooter from "../component/EndFooter";
import ServicesCard from "../component/ServicesCard";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";
export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    arrows: false,
  };
  const [loader, setloader] = React.useState(true);
  useEffect(() => {
    setloader(false);
    let wow = new WOW();
    wow.init();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Loader loader={loader} />
      <Cursor />
      <Navbars active="home" />
      <Particless />
      <div className="main_benner ">
        <div className="benner_image"></div>
        <div className="benner_content wow fadeInUp">
          <h6 className="benner_title">We Provide outsourced</h6>
          <Slider {...settings}>
            <div>
              <h2 className="benner_sub">
                <span className="benner_main_title">Web UI/UX Design</span>
              </h2>
            </div>
            <div>
              <h2 className="benner_sub">
                <span className="benner_main_title">Graphics Design</span>
              </h2>
            </div>
            <div>
              <h2 className="benner_sub">
                <span className="benner_main_title">Frontend Development</span>
              </h2>
            </div>
            <div>
              <h2 className="benner_sub">
                <span className="benner_main_title">Backend Development</span>
              </h2>
            </div>
            <div>
              <h2 className="benner_sub">
                <span className="benner_main_title">Software Development</span>
              </h2>
            </div>
            <div>
              <h2 className="benner_sub">
                <span className="benner_main_title">Game Development</span>
              </h2>
            </div>
          </Slider>
          {/* <h2 className="benner_sub">
            <span className="benner_main_title">
              Web UI/UX Design <br /> Graphics Design <br />
              Frontend Development <br />
              Backend Development <br /> Software Devlopment <br /> Game
              Devlopment
            </span>
          </h2> */}
          <h5 className="benner_main_title">
            For startups & midsized companies
          </h5>
          <div className="theme_btn">
            <Link to="/Contact">
              <span>Get In Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M11.8242 6.58328L6.90717 1.66628L8.20334 0.370117L15.3332 7.49995L8.20334 14.6298L6.90717 13.3336L11.8242 8.41662H0.666504V6.58328H11.8242Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="info_section">
        <div className="main_service">
          <div className="container">
            <div className="service_section row wow fadeInUp">
              <div className="service_detail col-md-4 col-sm-4 col-xs-12">
                <div className="service_img">
                  <img
                    src={require("../images/design_uiux.png")}
                    alt="design images"
                  />
                </div>
                <div className="service_name">
                  <span>UI/UX Design</span>
                </div>
              </div>
              <div className="service_detail col-md-4 col-sm-4 col-xs-12">
                <div className="service_img">
                  <img
                    src={require("../images/development.png")}
                    alt="design images"
                  />
                </div>
                <div className="service_name">
                  <span>Development</span>
                </div>
              </div>
              <div className="service_detail col-md-4 col-sm-4 col-xs-12">
                <div className="service_img">
                  <img
                    src={require("../images/design.png")}
                    alt="design images"
                  />
                </div>
                <div className="service_name">
                  <span>Graphic Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --services design end----- */}
        {/* --about section start----- */}
        <div className="about_block">
          <div className="container">
            <div className="about_block_wrapper row">
              <div className="about_block_image col-lg-6 col-md-12 wow fadeInLeft">
                <img
                  src={require("../images/about_iamge_1.png")}
                  className="img-fluid"
                  alt="advance images"
                />
              </div>
              <div className="about_block_content sub_title col-lg-6 col-md-12  wow fadeInRight">
                <h4>WHO WE ARE</h4>
                <div className="main_title">
                  <h2>We are professional team, passionate about your work</h2>
                  <p>
                    Accelerate innovation with world-class tech teams We’ll
                    match you to an entire remote team of incredible freelance
                    talent for all your software development needs.
                  </p>
                  <div className="about_subtitle">
                    <div className="about_icon">
                      <img
                        src={require("../images/about_iamge_star.png")}
                        alt="star"
                      />
                    </div>
                    <div className="about_description">
                      <span>Powerfull product strategy</span>
                    </div>
                  </div>
                  <div className="about_subtitle">
                    <div className="about_icon">
                      <img
                        src={require("../images/about_iamge_star.png")}
                        alt="star"
                      />
                    </div>
                    <div className="about_description">
                      <span>Expert team members</span>
                    </div>
                  </div>
                  <div className="about_subtitle">
                    <div className="about_icon">
                      <img
                        src={require("../images/about_iamge_star.png")}
                        alt="star"
                      />
                    </div>
                    <div className="about_description">
                      <span>Redy for your trusted services</span>
                    </div>
                  </div>
                  <div className="about_subtitle">
                    <div className="about_icon">
                      <img
                        src={require("../images/about_iamge_star.png")}
                        alt="star"
                      />
                    </div>
                    <div className="about_description">
                      <span>Help your business grow</span>
                    </div>
                  </div>
                  <div className="about_subtitle">
                    <div className="about_icon">
                      <img
                        src={require("../images/about_iamge_star.png")}
                        alt="star"
                      />
                    </div>
                    <div className="about_description">
                      <span>Best quality products</span>
                    </div>
                  </div>
                  <div className="about_subtitle">
                    <div className="about_icon">
                      <img
                        src={require("../images/about_iamge_star.png")}
                        alt="star"
                      />
                    </div>
                    <div className="about_description">
                      <span>Solving complex products</span>
                    </div>
                  </div>
                  <div className="theme_btn">
                    <Link to="/Contact">
                      <span>Get In Touch</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M11.8242 6.58328L6.90717 1.66628L8.20334 0.370117L15.3332 7.49995L8.20334 14.6298L6.90717 13.3336L11.8242 8.41662H0.666504V6.58328H11.8242Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="theme_btn_2 about_btn">
                    <Link to="/about">
                      <span>Learn More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={15}
                        viewBox="0 0 16 15"
                        fill="none"
                      >
                        <path
                          d="M11.8242 6.58328L6.90717 1.66628L8.20334 0.370117L15.3332 7.49995L8.20334 14.6298L6.90717 13.3336L11.8242 8.41662H0.666504V6.58328H11.8242Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --customer services section end----- */}
        <ServicesCard />
        {/* --customer services section end----- */}
        {/* ---working process starrt--- */}
        <div className="working-process wow fadeInUp">
          <div className="container">
            <div className="sub_title">
              <h4>HOW WE WORK</h4>
            </div>
            <div className="main_title">
              <h2>Our Working Process</h2>
            </div>
            <div className="row">
              <div className="work_process col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="work_process_img">
                  <img
                    src={require("../images/processes_1.png")}
                    className="working_images"
                    alt="process1"
                  />
                  <div className="work_count">
                    <span>01</span>
                  </div>
                </div>
                <div className="work_description">
                  <h2>Find New Idea</h2>
                  <p>
                    We are Creating new ideas & Translate your early vision &
                    business requirements into a project blueprint.
                  </p>
                </div>
              </div>
              <div className="work_process col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="work_process_img">
                  <img
                    src={require("../images/processes_2.png")}
                    className="working_images"
                    alt="process1"
                  />
                  <div className="work_count">
                    <span>02</span>
                  </div>
                </div>
                <div className="work_description">
                  <h2>Build &amp; Develop</h2>
                  <p>
                    We build the way you want. Iterative, collaborative feature
                    development is the key to building a successful website.
                  </p>
                </div>
              </div>
              <div className="work_process col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="work_process_img">
                  <img
                    src={require("../images/processes_3.png")}
                    className="working_images"
                    alt="process1"
                  />
                  <div className="work_count">
                    <span>03</span>
                  </div>
                </div>
                <div className="work_description">
                  <h2>check quality</h2>
                  <p>
                    Safety is the word. We are Quality Assurance and testing to
                    make sure you're ready for primetime.
                  </p>
                </div>
              </div>
              <div className="work_process col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="work_process_img">
                  <img
                    src={require("../images/processes_4.png")}
                    className="working_images"
                    alt="process1"
                  />
                  <div className="work_count">
                    <span>04</span>
                  </div>
                </div>
                <div className="work_description">
                  <h2>sale &amp; deploy</h2>
                  <p>
                    Upon approval, your project will be launched & promoted.
                    Then sit back and watch the momentum!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---working process end--- */}
        {/* ----- image filter start-------- */}
        <div className="image_filter wow fadeInUp">
          <div className="container">
            <div className="sub_title">
              <h4>LATEST PROJECTS</h4>
            </div>
            <div className="main_title">
              <h2>
                Proud Projects That Make <br />
                Us Stand Out
              </h2>
            </div>
            <div className="filter_gallary">
              {/* <div className="col-md-12">
								<div className="filter_menu_item">
									<ul className="filter_item">
										<li
											data-filter="*"
											className="active"
										>
											All
										</li>
										<li data-filter=".design">
											Design Project
										</li>
										<li data-filter=".development">
											Development Project
										</li>
									</ul>
								</div>
							</div> */}
              <div className="item_detail row">
                <div className="col-md-4 col-sm-6 col-xs-12 image_item design">
                  <Link
                    onClick={() => {
                      const newWindow = window.open(
                        "https://www.behance.net/gallery/160134339/Plantnest-Plant-Store-",
                        "_blank"
                      );
                    }}
                  >
                    {" "}
                    <div className="filter_img">
                      <img
                        src={require("../images/project_7.png")}
                        alt="project 1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="gallary_text">
                      <h2>DESIGN</h2>

                      <h4>Plantnest Plant Store</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 image_item design">
                  <Link
                    onClick={() => {
                      const newWindow = window.open(
                        "https://www.behance.net/gallery/159634135/luxury-JD-Jewellery",
                        "_blank"
                      );
                    }}
                  >
                    <div className="filter_img">
                      <img
                        src={require("../images/project_5.png")}
                        alt="project 1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="gallary_text">
                      <h2>DESIGN</h2>

                      <h4>luxury JD Jewellery</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 image_item development">
                  <Link
                    onClick={() => {
                      const newWindow = window.open(
                        "https://www.behance.net/gallery/158836333/Cloud-Storage-Management-Website",
                        "_blank"
                      );
                    }}
                  >
                    <div className="filter_img">
                      <img
                        src={require("../images/project_1.png")}
                        alt="project 1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="gallary_text">
                      <h2>DESIGN</h2>

                      <h4>Cloud Storage Management</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 image_item development">
                  <Link
                    onClick={() => {
                      const newWindow = window.open(
                        "https://www.behance.net/gallery/158680835/Digital-Agency-Solution-Website",
                        "_blank"
                      );
                    }}
                  >
                    <div className="filter_img">
                      <img
                        src={require("../images/project_9.png")}
                        alt="project 4"
                        className="img-fluid"
                      />
                    </div>
                    <div className="gallary_text">
                      <h2>DESIGN</h2>
                      <h4>Digital Agency Solution</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 image_item development">
                  <Link
                    onClick={() => {
                      const newWindow = window.open(
                        "https://www.behance.net/gallery/158518655/VS-Fashion-E-Commerce-Website",
                        "_blank"
                      );
                    }}
                  >
                    <div className="filter_img">
                      <img
                        src={require("../images/project_4 (1).png")}
                        alt="project 5"
                        className="img-fluid"
                      />
                    </div>
                    <div className="gallary_text">
                      <h2>DESIGN</h2>
                      <h4>VS Fashion E-Commerce</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 image_item development">
                  <Link
                    onClick={() => {
                      const newWindow = window.open(
                        "https://www.behance.net/gallery/157610769/Gym-Website",
                        "_blank"
                      );
                    }}
                  >
                    {" "}
                    <div className="filter_img">
                      <img
                        src={require("../images/project_6 (1).png")}
                        alt="project 6"
                        className="img-fluid"
                      />
                    </div>
                    <div className="gallary_text">
                      <h2>DESIGN</h2>
                      <h4>Gym Website</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----- image filter end-------- */}
        {/* ---customer services start--- */}
        {/* ---customer services end --- */}
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
