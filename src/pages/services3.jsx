import React from "react";
import Particless from "../component/Particles";
import Navbars from "../component/Navbars";
import { Link } from "react-router-dom";
import EndFooter from "../component/EndFooter";
import ServiceBox from "../component/ServiceBox";

const Services2 = () => {
	React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
	return (
    <div>
      <Navbars active="services3" />
      <Particless />
      <div className="contact_section wow fadeInUp">
        <div className="service_title">
          <h2>Services Details</h2>
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
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "white" }}
            >
              Services Details
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
            Frontend Development{" "}
          </span>
        </div>
      </div>
      <div className="info_section">
        <div className="about_blog container wow fadeInUp">
          <div className="row">
            <div className="about_blog_left col-lg-8 col-md-7 col-sm-12">
              <div className="about_blog_img">
                <img
                  src={require("../images/services_page_3.png")}
                  alt="about imag"
                  className="img-fluid"
                />
              </div>
              <div className="about_blog_detail">
                <h2>All-In-One Frontend Development Services</h2>
                <p>
                  Deploy front-end development experts with a visionary approach
                  to designing the most engaging user interfaces. Build highly
                  customized, well-thought-out, and exceptionally intuitive
                  digital products infused with the very best functionalities
                  and features for excellent user experiences across devices of
                  all shapes and sizes.
                </p>
                <p>
                  Powered by the latest trends, emerging technologies, and
                  best-in-class skills, create stable, modern, and
                  high-performing front-end assets that are not only fully
                  functional but also provide brand-enhancing user experiences.
                </p>
                <p>
                  As a leading front end company, we will help you achieve
                  customer success for your application by building sustainable
                  and maintainable assets that run smoothly with both functional
                  and visual consistency anywhere, anytime. Acquire bespoke
                  front-end development services to push your application to be
                  simplistic yet appealing, responsive, and dynamic.
                </p>
              </div>
              <div className="about_srevice">
                <div className="about_service_main_title">
                  <h2>Our Range Of Front End Development Services Include</h2>
                  <div className="service_card_subtitle">
                    <img
                      src={require("../images/left_icon.png")}
                      alt="left icon"
                    />
                    <span>HTML & CSS Responsive Web Design</span>
                  </div>
                  <div className="service_card_subtitle">
                    <img
                      src={require("../images/left_icon.png")}
                      alt="left icon"
                    />
                    <span>React JS Development</span>
                  </div>
                  <div className="service_card_subtitle">
                    <img
                      src={require("../images/left_icon.png")}
                      alt="left icon"
                    />
                    <span>Jquery &amp; Javascript</span>
                  </div>
                  <div className="service_card_subtitle">
                    <img
                      src={require("../images/left_icon.png")}
                      alt="left icon"
                    />
                    <span>Javascript Development</span>
                  </div>
                  <div className="service_card_subtitle">
                    <img
                      src={require("../images/left_icon.png")}
                      alt="left icon"
                    />
                    <span>PSD To Bootstrap Services</span>
                  </div>
                  <div className="service_card_subtitle">
                    <img
                      src={require("../images/left_icon.png")}
                      alt="left icon"
                    />
                    <span>CMS Theming Services</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about_blog_left col-lg-4 col-md-5 col-sm-12">
              <ServiceBox />
            </div>
          </div>
        </div>
        <div className="assuranve_service_wrapper wow fadeInUp">
          <div className="assurance_service container">
            <div className="assurance_title">
              <h2>Explore Our Audit &amp; Assurance Services</h2>
            </div>
            <div className="row">
              <div className="assurance_service_box col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="assurance_service_box_wrapper">
                  <div className="assurance_service_img">
                    <img
                      src={require("../images/services_detail_page_1.png")}
                      alt="assurance_service_img"
                    />
                  </div>
                  <div className=" assurance_service_detail">
                    <h2>Time Saving</h2>
                    <h6>
                      The time usually needed to do something a time saving.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="assurance_service_box col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="assurance_service_box_wrapper">
                  <div className="assurance_service_img">
                    <img
                      src={require("../images/services_detail_page_2.png")}
                      alt="assurance_service_img"
                    />
                  </div>
                  <div className=" assurance_service_detail">
                    <h2>Management</h2>
                    <h6>
                      Be calm and manage your business with our management
                      services.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="team_working-process wow fadeInUp">
          <div className="container">
            <div className="sub_title">
              <h4>Our Team</h4>
            </div>
            <div className="main_title">
              <h2>Our Working Process</h2>
            </div>
            <div className="working_card_wrapper row">
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="work_card_detail ">
                  <div className="working_card ">
                    <div className="card_image">
                      <img src={require("../images/team_1.png")} alt="team 1" />
                    </div>
                    <div className="card_detail">
                      <h2>Divya Umraliya</h2>
                      <h6>Managing Director</h6>
                      <div className="service_card_btn">
                        <a href="#">
                          <span>Read More</span>
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="work_card_detail ">
                  <div className="working_card ">
                    <div className="card_image">
                      <img src={require("../images/team_1.png")} alt="team 1" />
                    </div>
                    <div className="card_detail">
                      <h2>Divya Umraliya</h2>
                      <h6>Managing Director</h6>
                      <div className="service_card_btn">
                        <a href="#">
                          <span>Read More</span>
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="work_card_detail ">
                  <div className="working_card ">
                    <div className="card_image">
                      <img src={require("../images/team_1.png")} alt="team 1" />
                    </div>
                    <div className="card_detail">
                      <h2>Divya Umraliya</h2>
                      <h6>Managing Director</h6>
                      <div className="service_card_btn">
                        <a href="#">
                          <span>Read More</span>
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="work_card_detail ">
                  <div className="working_card ">
                    <div className="card_image">
                      <img src={require("../images/team_1.png")} alt="team 1" />
                    </div>
                    <div className="card_detail">
                      <h2>Divya Umraliya</h2>
                      <h6>Managing Director</h6>
                      <div className="service_card_btn">
                        <a href="#">
                          <span>Read More</span>
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* ---offer benner start--- */}
        <EndFooter />
      </div>
    </div>
  );
};

export default Services2;