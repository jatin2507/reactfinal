import React, { useEffect } from "react";
import Navbars from "../component/Navbars";
import WOW from "wow.js";
import Particless from "../component/Particles";
import { Link } from "react-router-dom";
import EndFooter from "../component/EndFooter";
import ServicesCard from "../component/ServicesCard";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";
export default function Services() {
const [loader, setloader] = React.useState(true);
  React.useEffect(() => {
    setloader(false); let wow = new WOW();
    wow.init();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Loader loader={loader} />
      <Cursor />
      <Navbars active="services" />
      <Particless />
      <div className="contact_section wow fadeInUp">
        <div className="service_title">
          <h2>Services</h2>
        </div>
        <div class="service_inner_pages">
          <span>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Darkninja
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="9"
              viewBox="0 0 7 9"
              fill="none"
            >
              <path
                d="M3.67202 4.50008L0.843018 1.67208L2.25702 0.25708L6.50002 4.50008L2.25702 8.74308L0.843018 7.32808L3.67202 4.50008Z"
                fill="#E0DEDE"
              />
            </svg>
            Services Details
          </span>
        </div>
      </div>
      <div className="info_section">
        <ServicesCard />
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
    </div>
  );
}
