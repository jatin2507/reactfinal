import React from 'react'
import { Link } from 'react-router-dom'
export default function ServicesCard() {
  return (
    <div><div className="customer-services wow fadeInUp">
          <div className="container">
            <div className="sub_title">
              <h4>OUR SERVICES</h4>
              <div className="main_title">
                <h2>
                  We Offer Professional IT Solutions
                  <br />
                  For Business
                </h2>
              </div>
              <div className="row">
                <div className="service_card_wrapper col-lg-4 col-md-6 col-xs-12">
                  <div className="service_card">
                    <div className="service_card_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={47}
                        viewBox="0 0 47 47"
                        fill="none"
                      >
                        <path
                          d="M42.3216 5.14989H45.5927C45.9846 5.14989 46.3053 4.82915 46.3053 4.43725V1.16613C46.3053 0.774144 45.9846 0.453491 45.5927 0.453491H42.3216C41.9296 0.453491 41.609 0.774144 41.609 1.16613V2.0926H25.845V1.16613C25.845 0.774144 25.5315 0.453491 25.1324 0.453491H21.8683C21.4693 0.453491 21.1557 0.774144 21.1557 1.16613V2.0926H5.39172V1.16613C5.39172 0.774144 5.07097 0.453491 4.67907 0.453491H1.40795C1.01596 0.453491 0.695312 0.774144 0.695312 1.16613V4.43716C0.695312 4.82915 1.01605 5.1498 1.40795 5.1498H4.67907C5.07106 5.1498 5.39172 4.82906 5.39172 4.43716V3.51788H15.8891C8.22098 6.48964 2.71213 13.8301 2.42705 22.4675H1.48639C1.0944 22.4675 0.773746 22.7882 0.773746 23.1801V26.4512C0.773746 26.8432 1.09449 27.1639 1.48639 27.1639H4.75751C5.1495 27.1639 5.47015 26.8431 5.47015 26.4512V23.1801C5.47015 22.7881 5.14941 22.4675 4.75751 22.4675H3.85242C4.20164 12.7397 11.6418 4.80067 21.1558 3.66046V4.43725C21.1558 4.82924 21.4693 5.14989 21.8684 5.14989H25.1325C25.5315 5.14989 25.8451 4.82915 25.8451 4.43725V3.66046C35.3591 4.79357 42.7992 12.7397 43.1484 22.4675H42.3217C41.9297 22.4675 41.6091 22.7882 41.6091 23.1801V26.4512C41.6091 26.8432 41.9297 27.1639 42.3217 27.1639H45.5928C45.9847 27.1639 46.3054 26.8431 46.3054 26.4512V23.1801C46.3054 22.7881 45.9847 22.4675 45.5928 22.4675H44.5737C44.2886 13.8301 38.7797 6.48964 31.1116 3.51788H41.609V4.43716C41.609 4.82915 41.9296 5.14989 42.3216 5.14989ZM44.8801 23.8927V25.7386H43.0344V23.8927H44.8801Z"
                          fill="#0052D4"
                        />
                        <path
                          d="M34.5325 21.7263L24.0707 7.59428C24.0636 7.58718 24.0493 7.58008 24.0422 7.5729C23.9139 7.41612 23.7215 7.3092 23.5005 7.3092C23.3865 7.3092 23.2796 7.34487 23.1798 7.38755C23.1798 7.39465 23.1727 7.39465 23.1727 7.39465C23.0943 7.43741 23.023 7.49446 22.966 7.56571C22.9518 7.57999 22.9375 7.57999 22.9232 7.59419L12.4686 21.7263C12.3189 21.9188 12.2834 22.1753 12.3688 22.4034L16.7516 33.9769H16.4309C14.9913 33.9769 13.8155 35.1528 13.8155 36.5923V39.4573C13.8155 40.8042 14.8417 41.9017 16.1458 42.0442V45.3509C16.1458 45.7429 16.4666 46.0636 16.8585 46.0636H30.1424C30.5344 46.0636 30.855 45.7428 30.855 45.3509V42.0442C32.1592 41.9017 33.1854 40.8042 33.1854 39.4573V36.5923C33.1854 35.1528 32.0095 33.9769 30.57 33.9769H30.2492L34.6321 22.4033C34.7178 22.1753 34.6821 21.9187 34.5325 21.7263ZM23.5005 20.9424C23.8996 20.9424 24.2275 21.2701 24.2275 21.6693C24.2275 22.0755 23.8996 22.3962 23.5005 22.3962C23.1014 22.3962 22.7737 22.0755 22.7737 21.6693C22.7737 21.2702 23.1014 20.9424 23.5005 20.9424ZM29.4299 44.6383H17.5712V42.0727H29.4299V44.6383ZM28.7243 33.9769H18.2767L13.844 22.2608L22.7879 10.1741V19.6525C21.954 19.9447 21.3483 20.7357 21.3483 21.6693C21.3483 22.8595 22.3104 23.8215 23.5005 23.8215C24.6907 23.8215 25.6527 22.8595 25.6527 21.6693C25.6527 20.7357 25.047 19.9447 24.2132 19.6525V10.1812L33.157 22.2608L28.7243 33.9769Z"
                          fill="#0052D4"
                        />
                      </svg>
                    </div>
                    <div className="service_card_desc">
                      <h2>Graphics design</h2>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Brand Identity</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Design System</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Social Media Design</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Promotion Banner</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Business Card</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Brochure Design</span>
                    </div>
                    <div className="service_card_btn">
                      <span>
                        <Link to="/Services/Graphic-Design">Read More</Link>
                      </span>
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
                    </div>
                  </div>
                </div>
                <div className="service_card_wrapper col-lg-4 col-md-6 col-xs-12">
                  <div className="service_card">
                    <div className="service_card_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={47}
                        viewBox="0 0 47 47"
                        fill="none"
                      >
                        <path
                          d="M6.50642 26.8114H27.2389C27.6146 26.8114 27.9186 26.5074 27.9186 26.1317C27.9186 25.7559 27.6146 25.4519 27.2389 25.4519H6.50642C6.13069 25.4519 5.82666 25.7559 5.82666 26.1317C5.82666 26.5074 6.13069 26.8114 6.50642 26.8114Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M6.50642 31.658H27.2389C27.6146 31.658 27.9186 31.3539 27.9186 30.9782C27.9186 30.6025 27.6146 30.2985 27.2389 30.2985H6.50642C6.13069 30.2985 5.82666 30.6025 5.82666 30.9782C5.82666 31.3539 6.13069 31.658 6.50642 31.658Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M6.50642 36.5045H27.2389C27.6146 36.5045 27.9186 36.2005 27.9186 35.8248C27.9186 35.4491 27.6146 35.145 27.2389 35.145H6.50642C6.13069 35.145 5.82666 35.4491 5.82666 35.8248C5.82666 36.2005 6.13069 36.5045 6.50642 36.5045Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M6.50642 41.3511H27.2389C27.6146 41.3511 27.9186 41.0471 27.9186 40.6713C27.9186 40.2956 27.6146 39.9916 27.2389 39.9916H6.50642C6.13069 39.9916 5.82666 40.2956 5.82666 40.6713C5.82666 41.0471 6.13069 41.3511 6.50642 41.3511Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M41.9758 1.08838H5.02447C3.21636 1.08838 1.74805 2.5567 1.74805 4.35806V42.1522C1.74805 43.9603 3.21627 45.4286 5.02447 45.4286H41.9757C43.7839 45.4286 45.2521 43.9602 45.2521 42.1522V4.35806C45.2522 2.5567 43.7839 1.08838 41.9758 1.08838V1.08838ZM43.8927 42.1522C43.8927 43.2059 43.0362 44.0691 41.9758 44.0691H5.02447C3.96404 44.0691 3.10756 43.2058 3.10756 42.1522V11.3254H43.8926V42.1522H43.8927ZM43.8927 9.96593H3.10756V4.35806C3.10756 3.30438 3.96404 2.44789 5.02447 2.44789H41.9757C43.0361 2.44789 43.8926 3.30438 43.8926 4.35806V9.96593H43.8927Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M41.1739 26.1303V40.6703C41.1739 41.0441 40.8679 41.35 40.4941 41.35H31.3175C30.9436 41.35 30.6377 41.0441 30.6377 40.6703V26.1303C30.6377 25.7565 30.9436 25.4506 31.3175 25.4506H40.4941C40.8679 25.4506 41.1739 25.7566 41.1739 26.1303Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M41.1737 14.7242V22.0518C41.1737 22.4325 40.8678 22.7316 40.4939 22.7316H6.50642C6.13258 22.7316 5.82666 22.4325 5.82666 22.0518V14.7242C5.82666 14.3503 6.13258 14.0444 6.50642 14.0444H40.4939C40.8678 14.0444 41.1737 14.3503 41.1737 14.7242Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M8.85842 6.20696C8.85842 7.30135 7.96798 8.19188 6.8735 8.19188C5.77911 8.19188 4.88867 7.30135 4.88867 6.20696C4.88867 5.11258 5.77911 4.22205 6.8735 4.22205C7.96798 4.22205 8.85842 5.11258 8.85842 6.20696Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M13.4805 6.20696C13.4805 7.30135 12.59 8.19188 11.4957 8.19188C10.4013 8.19188 9.51074 7.30135 9.51074 6.20696C9.51074 5.11258 10.4012 4.22205 11.4957 4.22205C12.59 4.22205 13.4805 5.11258 13.4805 6.20696Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M18.1099 6.20696C18.1099 7.30135 17.2194 8.19188 16.1251 8.19188C15.0307 8.19188 14.1401 7.30135 14.1401 6.20696C14.1401 5.11258 15.0306 4.22205 16.1251 4.22205C17.2194 4.22205 18.1099 5.11258 18.1099 6.20696Z"
                          fill="#1E5AE4"
                        />
                        <path
                          d="M42.1118 6.20696C42.1118 7.30135 41.2214 8.19188 40.127 8.19188H28.1089C27.0146 8.19188 26.124 7.30135 26.124 6.20696C26.124 5.11258 27.0145 4.22205 28.1089 4.22205H40.1269C41.2214 4.22205 42.1118 5.11258 42.1118 6.20696V6.20696Z"
                          fill="#1E5AE4"
                        />
                      </svg>
                    </div>
                    <div className="service_card_desc">
                      <h2>UI/UX Design</h2>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Web UI/UX Design</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>App UI/UX Design</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Dashboard UI/UX Design</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>User-friendly Experience</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Interactivity</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Prototype</span>
                    </div>
                    <div className="service_card_btn">
                      <span>
                        <Link to="/Services/UI/UX-Design">Read More</Link>
                      </span>
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
                    </div>
                  </div>
                </div>
                <div className="service_card_wrapper col-lg-4 col-md-6 col-xs-12">
                  <div className="service_card">
                    <div className="service_card_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={47}
                        viewBox="0 0 47 47"
                        fill="none"
                      >
                        <path
                          d="M41.3502 9.9561L33.3631 1.96225C33.2408 1.83989 33.0301 1.76514 32.8805 1.76514H13.6232C12.0462 1.76514 10.7682 3.04981 10.7682 4.62684V26.8275H8.52511C6.83255 26.8275 5.45264 28.2074 5.45264 29.9067V35.6914C5.45264 37.384 6.83255 38.7639 8.52511 38.7639H10.7682V42.4141C10.7682 43.9912 12.0462 45.2691 13.6232 45.2691H38.6924C40.2694 45.2691 41.5474 43.9912 41.5474 42.4141V10.4319C41.5474 10.296 41.4794 10.0852 41.3502 9.9561ZM40.1878 42.4142C40.1878 43.2367 39.5149 43.9097 38.6924 43.9097H13.6232C12.8007 43.9097 12.1278 43.2367 12.1278 42.4142V38.764H25.1178C26.8172 38.764 28.1971 37.3841 28.1971 35.6915V29.9068C28.1971 28.2074 26.8172 26.8276 25.1178 26.8276H12.1278V4.62684C12.1278 3.79758 12.8007 3.12465 13.6232 3.12465H32.2007V8.2568C32.2007 9.83382 33.4855 11.1118 35.0625 11.1118H40.1878V42.4142ZM13.1611 32.7957C13.1611 32.4219 13.4601 32.116 13.8408 32.116H19.809C20.1829 32.116 20.4888 32.4219 20.4888 32.7957C20.4888 33.1697 20.1829 33.4755 19.809 33.4755H13.8408C13.4601 33.4754 13.1611 33.1696 13.1611 32.7957Z"
                          fill="url(#paint0_linear_1_348)"
                        />
                        <path
                          d="M23.5918 14.4652C23.3264 14.1997 22.8962 14.1997 22.6306 14.4652L19.1957 17.9001C18.9302 18.1656 18.9302 18.5958 19.1957 18.8614L22.6306 22.2963C22.7634 22.4291 22.9373 22.4955 23.1112 22.4955C23.2851 22.4955 23.4591 22.4291 23.5918 22.2963C23.8572 22.0308 23.8572 21.6006 23.5918 21.335L20.6375 18.3807L23.5918 15.4264C23.8574 15.1609 23.8574 14.7307 23.5918 14.4652Z"
                          fill="url(#paint1_linear_1_348)"
                        />
                        <path
                          d="M28.7251 22.2963C28.8579 22.4291 29.0318 22.4955 29.2057 22.4955C29.3796 22.4955 29.5535 22.4291 29.6862 22.2963L33.1211 18.8614C33.3866 18.5959 33.3866 18.1657 33.1211 17.9001L29.6862 14.4652C29.4207 14.1997 28.9906 14.1997 28.725 14.4652C28.4595 14.7307 28.4595 15.1609 28.725 15.4265L31.6793 18.3808L28.725 21.3351C28.4595 21.6006 28.4595 22.0307 28.7251 22.2963Z"
                          fill="url(#paint2_linear_1_348)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_348"
                            x1="26.5646"
                            y1="45.2691"
                            x2="26.5647"
                            y2="1.76513"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_348"
                            x1="21.8009"
                            y1="22.4955"
                            x2="21.8009"
                            y2="14.2661"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_348"
                            x1="31.3301"
                            y1="22.4955"
                            x2="31.3301"
                            y2="14.2661"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="service_card_desc">
                      <h2>Frontend Development</h2>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>HTML5 &amp; CSS, CSS3</span>
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
                      <span>Responsive Web Design</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Interactive Animation Website</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Email Template</span>
                    </div>
                    <div className="service_card_btn">
                      <span>
                        <Link to="/Services/FrontEnd-Dev">Read More</Link>
                      </span>
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
                    </div>
                  </div>
                </div>
                <div className="service_card_wrapper col-lg-4 col-md-6 col-xs-12">
                  <div className="service_card">
                    <div className="service_card_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={47}
                        viewBox="0 0 47 47"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_375)">
                          <path
                            d="M41.22 3.55744C41.22 1.66749 39.6835 0.130981 37.7936 0.130981H9.19892C7.30888 0.130981 5.77246 1.66749 5.77246 3.55744V42.5109C5.77246 44.4009 7.30888 45.9374 9.19892 45.9374H37.8009C39.6836 45.9374 41.2273 44.4009 41.2273 42.5109C41.2273 39.3153 41.22 10.3454 41.22 3.55744ZM28.8415 4.49514H37.57C37.8657 4.49514 38.111 4.74042 38.111 5.03618C38.111 5.33913 37.8657 5.57722 37.57 5.57722H28.8415C28.5458 5.57722 28.3005 5.33913 28.3005 5.03618C28.3005 4.74042 28.5458 4.49514 28.8415 4.49514ZM19.2186 3.43472C20.0987 3.43472 20.82 4.15607 20.82 5.03618C20.82 5.92348 20.0987 6.63756 19.2186 6.63756C18.3313 6.63756 17.6099 5.92339 17.6099 5.03618C17.61 4.15607 18.3314 3.43472 19.2186 3.43472ZM14.8544 3.43472C15.7345 3.43472 16.4559 4.15607 16.4559 5.03618C16.4559 5.92348 15.7345 6.63756 14.8544 6.63756C13.9671 6.63756 13.2458 5.92339 13.2458 5.03618C13.2458 4.15607 13.9671 3.43472 14.8544 3.43472ZM10.4973 3.43472C11.3774 3.43472 12.0915 4.15607 12.0915 5.03618C12.0915 5.92348 11.3774 6.63756 10.4973 6.63756C9.61005 6.63756 8.88869 5.92339 8.88869 5.03618C8.88869 4.15607 9.61005 3.43472 10.4973 3.43472ZM40.1452 42.5108C40.1452 43.8021 39.092 44.8552 37.8009 44.8552H9.19892C7.90041 44.8552 6.85454 43.802 6.85454 42.5108V9.94866H40.1452V42.5108Z"
                            fill="url(#paint0_linear_1_375)"
                          />
                          <path
                            d="M11.0095 5.03623C11.0095 5.32481 10.7787 5.55562 10.4974 5.55562C10.2016 5.55562 9.9707 5.32481 9.9707 5.03623C9.9707 4.75493 10.2015 4.51685 10.4974 4.51685C10.7786 4.51685 11.0095 4.75493 11.0095 5.03623Z"
                            fill="url(#paint1_linear_1_375)"
                          />
                          <path
                            d="M15.3741 5.03623C15.3741 5.32481 15.1433 5.55562 14.8547 5.55562C14.5661 5.55562 14.3281 5.32481 14.3281 5.03623C14.3281 4.75493 14.5661 4.51685 14.8547 4.51685C15.1433 4.51685 15.3741 4.75493 15.3741 5.03623Z"
                            fill="url(#paint2_linear_1_375)"
                          />
                          <path
                            d="M19.7383 5.03623C19.7383 5.32481 19.5003 5.55562 19.219 5.55562C18.9305 5.55562 18.6924 5.32481 18.6924 5.03623C18.6924 4.75493 18.9305 4.51685 19.219 4.51685C19.5003 4.51685 19.7383 4.75493 19.7383 5.03623Z"
                            fill="url(#paint3_linear_1_375)"
                          />
                          <path
                            d="M15.6918 23.7967C15.939 23.9706 16.2756 23.9089 16.4456 23.667C16.6182 23.4233 16.5597 23.0851 16.3159 22.9132L12.0089 19.8714L16.3159 16.8296C16.5597 16.6577 16.6182 16.3195 16.4456 16.0758C16.2744 15.832 15.9363 15.7735 15.6918 15.9461L10.7592 19.4296C10.6154 19.5311 10.5303 19.6959 10.5303 19.8713C10.5303 20.0467 10.6155 20.2116 10.7592 20.313L15.6918 23.7967Z"
                            fill="url(#paint4_linear_1_375)"
                          />
                          <path
                            d="M30.5475 23.6671C30.7171 23.9084 31.0535 23.9711 31.3012 23.7968L36.2346 20.3133C36.5395 20.098 36.5396 19.6452 36.2346 19.4299L31.3012 15.9464C31.0554 15.7731 30.7187 15.8316 30.5475 16.076C30.3749 16.3198 30.4333 16.658 30.6771 16.8298L34.9848 19.8717L30.6771 22.9135C30.4333 23.0852 30.3749 23.4234 30.5475 23.6671Z"
                            fill="url(#paint5_linear_1_375)"
                          />
                          <path
                            d="M29.808 18.5472C29.772 18.3886 29.6782 18.2587 29.5339 18.1793C29.3969 18.1072 29.2382 18.0928 29.0867 18.1505C27.7089 18.677 26.6485 16.852 27.7954 15.9071C27.9181 15.8133 27.9902 15.6618 27.9902 15.5031C27.9974 15.3444 27.9325 15.193 27.8099 15.0919C27.1319 14.4787 26.3527 14.0243 25.4944 13.743C25.3357 13.6925 25.1769 13.7142 25.0399 13.7935C24.9028 13.88 24.8091 14.0171 24.7875 14.1758C24.5639 15.6401 22.4431 15.6474 22.205 14.1686C22.1834 14.0171 22.0896 13.8801 21.9525 13.7935C21.8154 13.7141 21.6568 13.6925 21.5053 13.743C20.6397 14.0243 19.8606 14.4787 19.1898 15.0919C19.0671 15.2001 19.0022 15.3516 19.0094 15.5103C19.0166 15.6618 19.0888 15.8133 19.2114 15.9143C20.3512 16.8376 19.3124 18.677 17.9202 18.1433C17.7687 18.0856 17.6028 18.1 17.4657 18.1721C17.3286 18.2515 17.2277 18.3813 17.1988 18.5399C17.004 19.4561 17.004 20.2857 17.1988 21.2017C17.2277 21.3605 17.3286 21.4903 17.4657 21.5697C17.6028 21.6418 17.7687 21.6562 17.9202 21.5985C19.298 21.0718 20.3584 22.8897 19.2042 23.8347C19.0888 23.9285 19.0166 24.08 19.0094 24.2386C19.0023 24.3973 19.0671 24.5416 19.1898 24.6499C19.8606 25.2629 20.6397 25.7175 21.5053 25.9988C21.8227 26.0998 22.1545 25.8978 22.205 25.5732C22.4431 24.1088 24.5494 24.1016 24.7875 25.5732C24.8452 25.8978 25.1698 26.0998 25.4944 25.9988C26.3528 25.7175 27.1319 25.2629 27.8099 24.6499C27.9325 24.5489 27.9975 24.3974 27.9902 24.2386C27.9902 24.08 27.9181 23.9285 27.7954 23.8347C26.634 22.8825 27.7089 21.0863 29.0795 21.5913C29.231 21.649 29.3896 21.6346 29.5267 21.5625C29.6709 21.4831 29.7647 21.3533 29.8008 21.1946C29.9955 20.2713 29.9812 19.3696 29.808 18.5472ZM23.4961 21.1225C22.8036 21.1225 22.2482 20.5599 22.2482 19.8746C22.2482 19.1821 22.8037 18.6195 23.4961 18.6195C24.1887 18.6195 24.7442 19.1821 24.7442 19.8746C24.7441 20.5598 24.1887 21.1225 23.4961 21.1225Z"
                            fill="url(#paint6_linear_1_375)"
                          />
                          <path
                            d="M11.0713 31.7421H35.9224C36.2211 31.7421 36.4634 31.4998 36.4634 31.2011C36.4634 30.9023 36.2211 30.66 35.9224 30.66H11.0713C10.7726 30.66 10.5303 30.9023 10.5303 31.2011C10.5303 31.4998 10.7727 31.7421 11.0713 31.7421Z"
                            fill="url(#paint7_linear_1_375)"
                          />
                          <path
                            d="M11.0713 36.4134H35.9224C36.2211 36.4134 36.4634 36.1711 36.4634 35.8723C36.4634 35.5736 36.2211 35.3313 35.9224 35.3313H11.0713C10.7726 35.3313 10.5303 35.5736 10.5303 35.8723C10.5303 36.1711 10.7727 36.4134 11.0713 36.4134Z"
                            fill="url(#paint8_linear_1_375)"
                          />
                          <path
                            d="M11.0713 41.0846H25.2879C25.5866 41.0846 25.829 40.8423 25.829 40.5436C25.829 40.2449 25.5866 40.0026 25.2879 40.0026H11.0713C10.7726 40.0026 10.5303 40.2449 10.5303 40.5436C10.5303 40.8423 10.7727 41.0846 11.0713 41.0846Z"
                            fill="url(#paint9_linear_1_375)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_375"
                            x1="26.5102"
                            y1="45.9374"
                            x2="26.5102"
                            y2="0.130978"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_375"
                            x1="10.5783"
                            y1="5.55562"
                            x2="10.5783"
                            y2="4.51685"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_375"
                            x1="14.9399"
                            y1="5.55562"
                            x2="14.9399"
                            y2="4.51685"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_375"
                            x1="19.3042"
                            y1="5.55562"
                            x2="19.3042"
                            y2="4.51685"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_1_375"
                            x1="14.0482"
                            y1="23.896"
                            x2="14.0482"
                            y2="15.8469"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_1_375"
                            x1="33.9665"
                            y1="23.8961"
                            x2="33.9665"
                            y2="15.8467"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_1_375"
                            x1="24.592"
                            y1="26.0249"
                            x2="24.592"
                            y2="13.7158"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_1_375"
                            x1="25.6987"
                            y1="31.7421"
                            x2="25.6987"
                            y2="30.66"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint8_linear_1_375"
                            x1="25.6987"
                            y1="36.4134"
                            x2="25.6987"
                            y2="35.3313"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint9_linear_1_375"
                            x1="19.4786"
                            y1="41.0846"
                            x2="19.4786"
                            y2="40.0026"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <clipPath id="clip0_1_375">
                            <rect
                              width={46}
                              height={46}
                              fill="white"
                              transform="translate(0.5 0.0341797)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="service_card_desc">
                      <h2>Backend Development</h2>
                    </div>
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
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>AWS services</span>
                    </div>
                    <div className="service_card_btn">
                      <span>
                        <Link to="/Services/BackEnd-Dev">Read More</Link>
                      </span>
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
                    </div>
                  </div>
                </div>
                <div className="service_card_wrapper col-lg-4 col-md-6 col-xs-12">
                  <div className="service_card">
                    <div className="service_card_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={47}
                        viewBox="0 0 47 47"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_407)">
                          <path
                            d="M41.9758 0.864014H5.02447C3.21636 0.864014 1.74805 2.33233 1.74805 4.1337V41.9278C1.74805 43.7359 3.21627 45.2042 5.02447 45.2042H41.9757C43.7839 45.2042 45.2521 43.7358 45.2521 41.9278V4.1337C45.2522 2.33233 43.7839 0.864014 41.9758 0.864014ZM43.8927 41.9278C43.8927 42.9815 43.0362 43.8447 41.9758 43.8447H5.02447C3.96404 43.8447 3.10756 42.9814 3.10756 41.9278V11.1011H43.8926V41.9278H43.8927ZM43.8927 9.74156H3.10756V4.1337C3.10756 3.08001 3.96404 2.22353 5.02447 2.22353H41.9757C43.0361 2.22353 43.8926 3.08001 43.8926 4.1337V9.74156H43.8927Z"
                            fill="url(#paint0_linear_1_407)"
                          />
                          <path
                            d="M8.85842 5.9826C8.85842 7.07699 7.96798 7.96752 6.8735 7.96752C5.77911 7.96752 4.88867 7.07699 4.88867 5.9826C4.88867 4.88821 5.77911 3.99768 6.8735 3.99768C7.96798 3.99768 8.85842 4.88821 8.85842 5.9826Z"
                            fill="url(#paint1_linear_1_407)"
                          />
                          <path
                            d="M13.4805 5.9826C13.4805 7.07699 12.59 7.96752 11.4957 7.96752C10.4013 7.96752 9.51074 7.07699 9.51074 5.9826C9.51074 4.88821 10.4012 3.99768 11.4957 3.99768C12.59 3.99768 13.4805 4.88821 13.4805 5.9826Z"
                            fill="url(#paint2_linear_1_407)"
                          />
                          <path
                            d="M18.1099 5.9826C18.1099 7.07699 17.2194 7.96752 16.1251 7.96752C15.0307 7.96752 14.1401 7.07699 14.1401 5.9826C14.1401 4.88821 15.0306 3.99768 16.1251 3.99768C17.2194 3.99768 18.1099 4.88821 18.1099 5.9826Z"
                            fill="url(#paint3_linear_1_407)"
                          />
                          <path
                            d="M42.1118 5.9826C42.1118 7.07699 41.2214 7.96752 40.127 7.96752H28.1089C27.0146 7.96752 26.124 7.07699 26.124 5.9826C26.124 4.88821 27.0145 3.99768 28.1089 3.99768H40.1269C41.2214 3.99768 42.1118 4.88821 42.1118 5.9826Z"
                            fill="url(#paint4_linear_1_407)"
                          />
                          <path
                            d="M23.5001 14.8533C19.0749 14.8533 15.479 18.4492 15.479 22.8743C15.479 27.3132 19.0749 30.8954 23.5001 30.8954C27.9184 30.8954 31.5211 27.3131 31.5211 22.8743C31.5211 18.4492 27.9252 14.8533 23.5001 14.8533ZM28.9993 26.6267C28.6322 25.2875 27.4223 24.2951 25.9676 24.2951H21.0326C19.5779 24.2951 18.368 25.2875 18.0009 26.6267C17.2532 25.5323 16.8386 24.2271 16.8386 22.8744C16.8386 19.2039 19.8228 16.2129 23.5002 16.2129C27.1776 16.2129 30.1617 19.2039 30.1617 22.8744C30.1616 24.2271 29.747 25.5323 28.9993 26.6267Z"
                            fill="url(#paint5_linear_1_407)"
                          />
                          <path
                            d="M25.8591 20.2166V21.3313C25.8591 22.6297 24.7987 23.6901 23.5004 23.6901C22.202 23.6901 21.1416 22.6298 21.1416 21.3313V20.2166C21.1416 18.9183 22.202 17.8646 23.5004 17.8646C24.7987 17.8646 25.8591 18.9182 25.8591 20.2166Z"
                            fill="url(#paint6_linear_1_407)"
                          />
                          <path
                            d="M14.5943 35.5287H32.4059C32.7816 35.5287 33.0857 35.2247 33.0857 34.8489C33.0857 34.4732 32.7816 34.1692 32.4059 34.1692H14.5943C14.2186 34.1692 13.9146 34.4732 13.9146 34.8489C13.9146 35.2247 14.2186 35.5287 14.5943 35.5287Z"
                            fill="url(#paint7_linear_1_407)"
                          />
                          <path
                            d="M14.5943 40.0932H32.4059C32.7816 40.0932 33.0857 39.7891 33.0857 39.4134C33.0857 39.0377 32.7816 38.7336 32.4059 38.7336H14.5943C14.2186 38.7336 13.9146 39.0377 13.9146 39.4134C13.9146 39.7891 14.2186 40.0932 14.5943 40.0932Z"
                            fill="url(#paint8_linear_1_407)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_407"
                            x1="27.1938"
                            y1="45.2042"
                            x2="27.1938"
                            y2="0.86401"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_407"
                            x1="7.2106"
                            y1="7.96752"
                            x2="7.2106"
                            y2="3.99768"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_407"
                            x1="11.8327"
                            y1="7.96752"
                            x2="11.8327"
                            y2="3.99768"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_407"
                            x1="16.4621"
                            y1="7.96752"
                            x2="16.4621"
                            y2="3.99768"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_1_407"
                            x1="35.4754"
                            y1="7.96752"
                            x2="35.4754"
                            y2="3.99768"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_1_407"
                            x1="24.8621"
                            y1="30.8954"
                            x2="24.8621"
                            y2="14.8533"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_1_407"
                            x1="23.9009"
                            y1="23.6901"
                            x2="23.9009"
                            y2="17.8646"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_1_407"
                            x1="25.1279"
                            y1="35.5287"
                            x2="25.1279"
                            y2="34.1692"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint8_linear_1_407"
                            x1="25.1279"
                            y1="40.0932"
                            x2="25.1279"
                            y2="38.7336"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <clipPath id="clip0_1_407">
                            <rect
                              width={46}
                              height={46}
                              fill="white"
                              transform="translate(0.5 0.0341797)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="service_card_desc">
                      <h2>software devlopment</h2>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Customer Relationship Management</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Data Management Systems</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Dashboard Devlopment</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Enterprise Resource Planning</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Human Resources Management</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Management System</span>
                    </div>
                    <div className="service_card_btn">
                      <span>
                        <Link to="/Services/Software-Dev">Read More</Link>
                      </span>
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
                    </div>
                  </div>
                </div>
                <div className="service_card_wrapper col-lg-4 col-md-6 col-xs-12">
                  <div className="service_card">
                    <div className="service_card_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={47}
                        height={47}
                        viewBox="0 0 47 47"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1_438)">
                          <path
                            d="M26.0423 0.484985H7.99632C5.5169 0.484985 3.5 2.50198 3.5 4.98131V41.0809C3.5 43.5637 5.51699 45.5834 7.99632 45.5834H26.0423C28.5252 45.5834 30.5456 43.5637 30.5456 41.0809V31.0395C30.5456 30.65 30.2304 30.3349 29.8409 30.3349C29.4515 30.3349 29.1363 30.65 29.1363 31.0395V41.081C29.1363 42.7869 27.7483 44.1742 26.0423 44.1742H7.99632C6.29387 44.1742 4.90929 42.7869 4.90929 41.081V4.9814C4.90929 3.27895 6.29387 1.89436 7.99632 1.89436H26.0423C27.7483 1.89436 29.1363 3.27895 29.1363 4.9814V10.3222C29.1363 10.7116 29.4515 11.0268 29.8409 11.0268C30.2304 11.0268 30.5456 10.7116 30.5456 10.3222V4.9814C30.5456 2.50198 28.5252 0.484985 26.0423 0.484985Z"
                            fill="url(#paint0_linear_1_438)"
                          />
                          <path
                            d="M26.7335 33.9283V31.0395C26.7335 30.65 26.4183 30.3348 26.0288 30.3348C25.6394 30.3348 25.3242 30.65 25.3242 31.0395V33.9283C25.3242 34.8883 24.5404 35.6693 23.5763 35.6693H10.4485C9.48922 35.6693 8.70812 34.8855 8.70812 33.9221L8.72186 7.43322C8.72186 6.47621 9.48652 5.69286 10.4532 5.69286H10.4622L23.5941 5.69978C24.5555 5.70463 25.3379 6.48905 25.3379 7.44769V10.3221C25.3379 10.7115 25.6531 11.0267 26.0426 11.0267C26.432 11.0267 26.7472 10.7115 26.7472 10.3221V7.44769C26.7472 5.71559 25.3359 4.29938 23.5983 4.29049L10.4664 4.28357C10.4609 4.28357 10.4553 4.28357 10.4498 4.28357C8.72851 4.28357 7.31257 5.67893 7.31257 7.4325L7.29883 33.9214C7.29883 35.6624 8.71162 37.0786 10.4485 37.0786H23.5763C25.3173 37.0787 26.7335 35.6652 26.7335 33.9283Z"
                            fill="url(#paint1_linear_1_438)"
                          />
                          <path
                            d="M15.3594 40.3536C14.97 40.3536 14.6548 40.6688 14.6548 41.0583C14.6548 41.4478 14.97 41.7629 15.3594 41.7629H18.6804C19.0699 41.7629 19.3851 41.4478 19.3851 41.0583C19.3851 40.6688 19.0699 40.3536 18.6804 40.3536H15.3594Z"
                            fill="url(#paint2_linear_1_438)"
                          />
                          <path
                            d="M38.4234 14.0777C36.6551 14.0777 35.0194 14.8804 33.9327 16.2776C33.3269 17.0614 32.49 16.8948 32.3727 16.9175V12.9039C32.3727 12.1504 32.9861 11.537 33.7396 11.537H37.8176C38.9914 11.537 39.9418 10.5866 39.9418 9.41283C39.9418 9.20461 39.7752 9.03418 39.5631 9.03418C39.3549 9.03418 39.1845 9.20455 39.1845 9.41283C39.1845 10.1663 38.5711 10.7798 37.8176 10.7798H33.7396C32.5696 10.7798 31.6154 11.7339 31.6154 12.904V16.9176C31.5169 16.8987 30.6688 17.0615 30.0592 16.2777C28.9725 14.8805 27.3329 14.0778 25.5685 14.0778C22.4295 14.0778 19.8774 16.6298 19.8774 19.7688C19.8774 22.8585 22.3386 29.0342 25.5685 29.0342C27.7229 29.0342 29.495 26.2852 30.434 23.7105C30.9603 22.2603 33.0277 22.2565 33.5578 23.7105C34.4968 26.2852 36.2689 29.0342 38.4233 29.0342C41.6532 29.0342 44.1106 22.8585 44.1106 19.7688C44.1106 16.6297 41.5586 14.0777 38.4234 14.0777ZM36.0417 19.7687C36.0417 19.5604 36.2121 19.39 36.4204 19.39H36.8331C37.0413 19.39 37.2118 19.5604 37.2118 19.7687C37.2118 19.9769 37.0414 20.1473 36.8331 20.1473H36.4204C36.2121 20.1473 36.0417 19.977 36.0417 19.7687ZM38.8058 17.7619V18.1746C38.8058 18.3828 38.6355 18.5533 38.4272 18.5533C38.2152 18.5533 38.0485 18.3829 38.0485 18.1746V17.7619C38.0485 17.5537 38.2152 17.3832 38.4272 17.3832C38.6355 17.3832 38.8058 17.5536 38.8058 17.7619ZM38.0485 21.7717V21.3628C38.0485 21.1546 38.2152 20.9842 38.4272 20.9842C38.6355 20.9842 38.8058 21.1545 38.8058 21.3628V21.7717C38.8058 21.9838 38.6355 22.1504 38.4272 22.1504C38.2152 22.1504 38.0485 21.9838 38.0485 21.7717ZM39.6427 19.7687C39.6427 19.5604 39.8093 19.39 40.0213 19.39H40.4302C40.6423 19.39 40.8089 19.5604 40.8089 19.7687C40.8089 19.9769 40.6423 20.1473 40.4302 20.1473H40.0213C39.8092 20.1473 39.6427 19.977 39.6427 19.7687ZM25.9433 21.7717C25.9433 21.9838 25.7767 22.1504 25.5647 22.1504C25.3565 22.1504 25.186 21.9838 25.186 21.7717V20.1473H23.5616C23.3496 20.1473 23.183 19.977 23.183 19.7687C23.183 19.5566 23.3496 19.39 23.5616 19.39H25.186V17.7618C25.186 17.5536 25.3564 17.3832 25.5647 17.3832C25.7767 17.3832 25.9433 17.5536 25.9433 17.7618V19.39H27.5715C27.7797 19.39 27.9501 19.5604 27.9501 19.7687C27.9501 19.9769 27.7798 20.1473 27.5715 20.1473H25.9433V21.7717Z"
                            fill="url(#paint3_linear_1_438)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_438"
                            x1="19.3191"
                            y1="45.5834"
                            x2="19.3191"
                            y2="0.484982"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_1_438"
                            x1="18.6743"
                            y1="37.0786"
                            x2="18.6743"
                            y2="4.28357"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_1_438"
                            x1="17.4215"
                            y1="41.7629"
                            x2="17.4215"
                            y2="40.3536"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_1_438"
                            x1="34.0515"
                            y1="29.0342"
                            x2="34.0515"
                            y2="9.03418"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="2.44532e-07" stopColor="#0052D4" />
                            <stop offset="0.4805" stopColor="#4364F7" />
                            <stop offset={1} stopColor="#0052D4" />
                          </linearGradient>
                          <clipPath id="clip0_1_438">
                            <rect
                              width={46}
                              height={46}
                              fill="white"
                              transform="translate(0.5 0.0341797)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="service_card_desc">
                      <h2>Game Devlopment</h2>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Distributed Engineering Resources</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                       <span>Porting and Re-mastering</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Co-Development</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Platform Support</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                     <span>Full SKU Development</span>
                    </div>
                    <div className="service_card_subtitle">
                      <img
                        src={require("../images/left_icon.png")}
                        alt="left icon"
                      />
                      <span>Live Ops Partnering & Development</span>
                    </div>
                    <div className="service_card_btn">
                      <span>
                        <Link to="/Services/Game-Dev">Read More</Link>
                      </span>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
  )
}
