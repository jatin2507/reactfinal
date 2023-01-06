import React, { useEffect, useState } from "react";
import Navbars from "../component/Navbars";
import WOW from "wow.js";
import Particless from "../component/Particles";
import { Link } from "react-router-dom";

import EndFooter from "../component/EndFooter";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";
export default function OurWork() {
  const [loader, setloader] = useState(true);
  React.useEffect(() => {
    setloader(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Loader loader={loader} />
      <Cursor />
      <Navbars active="our work" />
      <Particless />
      <div className="contact_section wow fadeInUp">
        <div className="service_title">
          <h2>Our Work</h2>
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
            Latest Project
          </span>
        </div>
      </div>
      <div className="info_section">
        <div className="image_filter wow fadeInUp">
          <div className="container">
            <div className="sub_title">
              <h4>Latest Project</h4>
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
							<h4>Latest Project</h4>
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
											<img
												src={require("../images/team_1.png")}
												alt="owner"
											/>
										</div>
										<div className="testimonial_detail">
											<h2>Divya Umraliya</h2>
											<h6>
												Owner Of Gurukrupa
												Furniture
											</h6>
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
															<stop
																offset="2.44532e-07"
																stopColor="#0052D4"
															/>
															<stop
																offset="0.4805"
																stopColor="#4364F7"
															/>
															<stop
																offset={1}
																stopColor="#0052D4"
															/>
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
															<stop
																offset="2.44532e-07"
																stopColor="#0052D4"
															/>
															<stop
																offset="0.4805"
																stopColor="#4364F7"
															/>
															<stop
																offset={1}
																stopColor="#0052D4"
															/>
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
															<stop
																offset="2.44532e-07"
																stopColor="#0052D4"
															/>
															<stop
																offset="0.4805"
																stopColor="#4364F7"
															/>
															<stop
																offset={1}
																stopColor="#0052D4"
															/>
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
															<stop
																offset="2.44532e-07"
																stopColor="#0052D4"
															/>
															<stop
																offset="0.4805"
																stopColor="#4364F7"
															/>
															<stop
																offset={1}
																stopColor="#0052D4"
															/>
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
															<stop
																offset="2.44532e-07"
																stopColor="#0052D4"
															/>
															<stop
																offset="0.4805"
																stopColor="#4364F7"
															/>
															<stop
																offset={1}
																stopColor="#0052D4"
															/>
														</linearGradient>
													</defs>
												</svg>
											</div>
										</div>
									</div>
									<div className="testimonial_desc">
										<h6>
											“In publishing and graphic
											design, Lorem ipsum is a
											placeholder text commonly
											used to demonstrate the
											visual form of a document or
											a typeface without relying
											on meaningful conten.”
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
