import React from "react";
import Particless from "../component/Particles";
import Navbars from "../component/Navbars";
import { Link } from "react-router-dom";
import EndFooter from "../component/EndFooter";
import ServiceBox from "../component/ServiceBox";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";
import WOW from "wow.js";
const Services4 = () => {
const [loader, setloader] = React.useState(true);
React.useEffect(() => {
  setloader(false);   let wow = new WOW();
  wow.init();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}, []);
return (
  <div>
    <Loader loader={loader} />
    <Cursor />
    <Navbars active="services4" />
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
            to="/Services"
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
          Backend Development{" "}
        </span>
      </div>
    </div>
    <div className="info_section">
      <div className="about_blog container wow fadeInUp">
        <div className="row">
          <div className="about_blog_left col-lg-8 col-md-12 col-sm-12">
            <div className="about_blog_img">
              <img
                src={require("../images/services_page_4.png")}
                alt="about imag"
                className="img-fluid"
              />
            </div>
            <div className="about_blog_detail">
              <h2>Backend Development The Power Behind the Performance</h2>
              <p>
                There are a variety of scripting languages and web frameworks to
                choose from when thinking about back end web development. Every
                technology has its own business use and things such as technical
                expertise might be a factor when thinking of your team's ongoing
                capabilities. The characteristics of the language, such as the
                support and communities, might be a factor for you. In either
                case, The Creative Momentum’s web development can help with a
                variety of choices like those below and will help partner with
                you to make the best decision for your business.
              </p>
              <p>
                Whether you’re replacing a legacy system or developing a new
                enterprise application, we can create a custom solution that
                best suits your business.
              </p>
              <p>
                Through our use of emerging technology and our comprehensive
                experience as a web application development company, we build
                with speed and agility. That ensures your business needs are met
                now and in the future.
              </p>
              <p>
                Our web applications can help your business get ahead of the
                competition, better serve your customers, and improve the way
                your team works. Reach your business goals with a web
                application expressly designed to meet your needs.
              </p>
            </div>
            <div className="about_srevice">
              <div className="about_service_main_title">
                <h2>Backend Development Services</h2>
                <div className="service_card_subtitle">
                  <img
                    src={require("../images/left_icon.png")}
                    alt="left icon"
                  />
                  <span>Database Management</span>
                </div>
                <div className="service_card_subtitle">
                  <img
                    src={require("../images/left_icon.png")}
                    alt="left icon"
                  />
                  <span>APIs</span>
                </div>
                <div className="service_card_subtitle">
                  <img
                    src={require("../images/left_icon.png")}
                    alt="left icon"
                  />
                  <span>Server Management</span>
                </div>
                <div className="service_card_subtitle">
                  <img
                    src={require("../images/left_icon.png")}
                    alt="left icon"
                  />
                  <span>Security and Infrastructure</span>
                </div>
                <div className="service_card_subtitle">
                  <img
                    src={require("../images/left_icon.png")}
                    alt="left icon"
                  />
                  <span>Python, Node.js. Java. C++, C#</span>
                </div>
                <div className="service_card_subtitle">
                  <img
                    src={require("../images/left_icon.png")}
                    alt="left icon"
                  />
                  <span>PHP & Ruby</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about_blog_left col-lg-4 col-md-d-none col-sm-12">
            <ServiceBox show={"4"}/>
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

export default Services4;
