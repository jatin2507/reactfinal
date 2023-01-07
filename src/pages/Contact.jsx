import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbars from "../component/Navbars";
import Particless from "../component/Particles";
import { Link, useNavigate } from "react-router-dom";
import cursor from "../component/cursor";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";
export default function Contact({ axios }) {
  const [data, setdata] = React.useState({});
  const [loader, setloader] = React.useState(true);
  React.useEffect(() => {
    setloader(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  let cData = [
    {
      name: "Country",
      code: "+0",
    },
    {
      name: "India",
      code: "+91",
    },

    {
      name: "Afghanistan",
      code: "+93",
    },
    {
      name: "Albania",
      code: "+355",
    },
    {
      name: "Algeria",
      code: "+213",
    },
    {
      name: "American Samoa",
      code: "+1-684",
    },
    {
      name: "Andorra",
      code: "+376",
    },
    {
      name: "Angola",
      code: "+244",
    },
    {
      name: "Anguilla",
      code: "+1-264",
    },
    {
      name: "Antarctica",
      code: "+672",
    },
    {
      name: "Antigua and Barbuda",
      code: "+1-268",
    },
    {
      name: "Argentina",
      code: "+54",
    },
    {
      name: "Armenia",
      code: "+374",
    },
    {
      name: "Aruba",
      code: "+297",
    },
    {
      name: "Australia",
      code: "+61",
    },
    {
      name: "Austria",
      code: "+43",
    },
    {
      name: "Azerbaijan",
      code: "+994",
    },
    {
      name: "Bahamas",
      code: "+1-242",
    },
    {
      name: "Bahrain",
      code: "+973",
    },
    {
      name: "Bangladesh",
      code: "+880",
    },
    {
      name: "Barbados",
      code: "+1-246",
    },
    {
      name: "Belarus",
      code: "+375",
    },
    {
      name: "Belgium",
      code: "+32",
    },
    {
      name: "Belize",
      code: "+501",
    },
    {
      name: "Benin",
      code: "+229",
    },
    {
      name: "Bermuda",
      code: "+1-441",
    },
    {
      name: "Bhutan",
      code: "+975",
    },
    {
      name: "Bolivia",
      code: "+591",
    },
    {
      name: "Bosnia and Herzegovina",
      code: "+387",
    },
    {
      name: "Botswana",
      code: "+267",
    },
    {
      name: "Brazil",
      code: "+55",
    },
    {
      name: "British Indian Ocean Territory",
      code: "+246",
    },
    {
      name: "British Virgin Islands",
      code: "+1-284",
    },
    {
      name: "Brunei",
      code: "+673",
    },
    {
      name: "Bulgaria",
      code: "+359",
    },
    {
      name: "Burkina Faso",
      code: "+226",
    },
    {
      name: "Burundi",
      code: "+257",
    },
    {
      name: "Cambodia",
      code: "+855",
    },
    {
      name: "Cameroon",
      code: "+237",
    },
    {
      name: "Canada",
      code: "+1",
    },
    {
      name: "Cape Verde",
      code: "+238",
    },
    {
      name: "Cayman Islands",
      code: "+1-345",
    },
    {
      name: "Central African Republic",
      code: "+236",
    },
    {
      name: "Chad",
      code: "+235",
    },
    {
      name: "Chile",
      code: "+56",
    },
    {
      name: "China",
      code: "+86",
    },
    {
      name: "Christmas Island",
      code: "+61",
    },
    {
      name: "Cocos Islands",
      code: "+61",
    },
    {
      name: "Colombia",
      code: "+57",
    },
    {
      name: "Comoros",
      code: "+269",
    },
    {
      name: "Cook Islands",
      code: "+682",
    },
    {
      name: "Costa Rica",
      code: "+506",
    },
    {
      name: "Croatia",
      code: "+385",
    },
    {
      name: "Cuba",
      code: "+53",
    },
    {
      name: "Curacao",
      code: "+599",
    },
    {
      name: "Cyprus",
      code: "+357",
    },
    {
      name: "Czech Republic",
      code: "+420",
    },
    {
      name: "Democratic Republic of the Congo",
      code: "+243",
    },
    {
      name: "Denmark",
      code: "+45",
    },
    {
      name: "Djibouti",
      code: "+253",
    },
    {
      name: "Dominica",
      code: "+1-767",
    },
    {
      name: "Dominican Republic",
      code: "+1-809, 1-829, 1-849",
    },
    {
      name: "East Timor",
      code: "+670",
    },
    {
      name: "Ecuador",
      code: "+593",
    },
    {
      name: "Egypt",
      code: "+20",
    },
    {
      name: "El Salvador",
      code: "+503",
    },
    {
      name: "Equatorial Guinea",
      code: "+240",
    },
    {
      name: "Eritrea",
      code: "+291",
    },
    {
      name: "Estonia",
      code: "+372",
    },
    {
      name: "Ethiopia",
      code: "+251",
    },
    {
      name: "Falkland Islands",
      code: "+500",
    },
    {
      name: "Faroe Islands",
      code: "+298",
    },
    {
      name: "Fiji",
      code: "+679",
    },
    {
      name: "Finland",
      code: "+358",
    },
    {
      name: "France",
      code: "+33",
    },
    {
      name: "French Polynesia",
      code: "+689",
    },
    {
      name: "Gabon",
      code: "+241",
    },
    {
      name: "Gambia",
      code: "+220",
    },
    {
      name: "Georgia",
      code: "+995",
    },
    {
      name: "Germany",
      code: "+49",
    },
    {
      name: "Ghana",
      code: "+233",
    },
    {
      name: "Gibraltar",
      code: "+350",
    },
    {
      name: "Greece",
      code: "+30",
    },
    {
      name: "Greenland",
      code: "+299",
    },
    {
      name: "Grenada",
      code: "+1-473",
    },
    {
      name: "Guam",
      code: "+1-671",
    },
    {
      name: "Guatemala",
      code: "+502",
    },
    {
      name: "Guernsey",
      code: "+44-1481",
    },
    {
      name: "Guinea",
      code: "+224",
    },
    {
      name: "Guinea-Bissau",
      code: "+245",
    },
    {
      name: "Guyana",
      code: "+592",
    },
    {
      name: "Haiti",
      code: "+509",
    },
    {
      name: "Honduras",
      code: "+504",
    },
    {
      name: "Hong Kong",
      code: "+852",
    },
    {
      name: "Hungary",
      code: "+36",
    },
    {
      name: "Iceland",
      code: "+354",
    },

    {
      name: "Indonesia",
      code: "+62",
    },
    {
      name: "Iran",
      code: "+98",
    },
    {
      name: "Iraq",
      code: "+964",
    },
    {
      name: "Ireland",
      code: "+353",
    },
    {
      name: "Isle of Man",
      code: "+44-1624",
    },
    {
      name: "Israel",
      code: "+972",
    },
    {
      name: "Italy",
      code: "+39",
    },
    {
      name: "Ivory Coast",
      code: "+225",
    },
    {
      name: "Jamaica",
      code: "+1-876",
    },
    {
      name: "Japan",
      code: "+81",
    },
    {
      name: "Jersey",
      code: "+44-1534",
    },
    {
      name: "Jordan",
      code: "+962",
    },
    {
      name: "Kazakhstan",
      code: "+7",
    },
    {
      name: "Kenya",
      code: "+254",
    },
    {
      name: "Kiribati",
      code: "+686",
    },
    {
      name: "Kosovo",
      code: "+383",
    },
    {
      name: "Kuwait",
      code: "+965",
    },
    {
      name: "Kyrgyzstan",
      code: "+996",
    },
    {
      name: "Laos",
      code: "+856",
    },
    {
      name: "Latvia",
      code: "+371",
    },
    {
      name: "Lebanon",
      code: "+961",
    },
    {
      name: "Lesotho",
      code: "+266",
    },
    {
      name: "Liberia",
      code: "+231",
    },
    {
      name: "Libya",
      code: "+218",
    },
    {
      name: "Liechtenstein",
      code: "+423",
    },
    {
      name: "Lithuania",
      code: "+370",
    },
    {
      name: "Luxembourg",
      code: "+352",
    },
    {
      name: "Macau",
      code: "+853",
    },
    {
      name: "Macedonia",
      code: "+389",
    },
    {
      name: "Madagascar",
      code: "+261",
    },
    {
      name: "Malawi",
      code: "+265",
    },
    {
      name: "Malaysia",
      code: "+60",
    },
    {
      name: "Maldives",
      code: "+960",
    },
    {
      name: "Mali",
      code: "+223",
    },
    {
      name: "Malta",
      code: "+356",
    },
    {
      name: "Marshall Islands",
      code: "+692",
    },
    {
      name: "Mauritania",
      code: "+222",
    },
    {
      name: "Mauritius",
      code: "+230",
    },
    {
      name: "Mayotte",
      code: "+262",
    },
    {
      name: "Mexico",
      code: "+52",
    },
    {
      name: "Micronesia",
      code: "+691",
    },
    {
      name: "Moldova",
      code: "+373",
    },
    {
      name: "Monaco",
      code: "+377",
    },
    {
      name: "Mongolia",
      code: "+976",
    },
    {
      name: "Montenegro",
      code: "+382",
    },
    {
      name: "Montserrat",
      code: "+1-664",
    },
    {
      name: "Morocco",
      code: "+212",
    },
    {
      name: "Mozambique",
      code: "+258",
    },
    {
      name: "Myanmar",
      code: "+95",
    },
    {
      name: "Namibia",
      code: "+264",
    },
    {
      name: "Nauru",
      code: "+674",
    },
    {
      name: "Nepal",
      code: "+977",
    },
    {
      name: "Netherlands",
      code: "+31",
    },
    {
      name: "Netherlands Antilles",
      code: "+599",
    },
    {
      name: "New Caledonia",
      code: "+687",
    },
    {
      name: "New Zealand",
      code: "+64",
    },
    {
      name: "Nicaragua",
      code: "+505",
    },
    {
      name: "Niger",
      code: "+227",
    },
    {
      name: "Nigeria",
      code: "+234",
    },
    {
      name: "Niue",
      code: "+683",
    },
    {
      name: "North Korea",
      code: "+850",
    },
    {
      name: "Northern Mariana Islands",
      code: "+1-670",
    },
    {
      name: "Norway",
      code: "+47",
    },
    {
      name: "Oman",
      code: "+968",
    },
    {
      name: "Pakistan",
      code: "+92",
    },
    {
      name: "Palau",
      code: "+680",
    },
    {
      name: "Palestine",
      code: "+970",
    },
    {
      name: "Panama",
      code: "+507",
    },
    {
      name: "Papua New Guinea",
      code: "+675",
    },
    {
      name: "Paraguay",
      code: "+595",
    },
    {
      name: "Peru",
      code: "+51",
    },
    {
      name: "Philippines",
      code: "+63",
    },
    {
      name: "Pitcairn",
      code: "+64",
    },
    {
      name: "Poland",
      code: "+48",
    },
    {
      name: "Portugal",
      code: "+351",
    },
    {
      name: "Puerto Rico",
      code: "+1-787, 1-939",
    },
    {
      name: "Qatar",
      code: "+974",
    },
    {
      name: "Republic of the Congo",
      code: "+242",
    },
    {
      name: "Reunion",
      code: "+262",
    },
    {
      name: "Romania",
      code: "+40",
    },
    {
      name: "Russia",
      code: "+7",
    },
    {
      name: "Rwanda",
      code: "+250",
    },
    {
      name: "Saint Barthelemy",
      code: "+590",
    },
    {
      name: "Saint Helena",
      code: "+290",
    },
    {
      name: "Saint Kitts and Nevis",
      code: "+1-869",
    },
    {
      name: "Saint Lucia",
      code: "+1-758",
    },
    {
      name: "Saint Martin",
      code: "+590",
    },
    {
      name: "Saint Pierre and Miquelon",
      code: "+508",
    },
    {
      name: "Saint Vincent and the Grenadines",
      code: "+1-784",
    },
    {
      name: "Samoa",
      code: "+685",
    },
    {
      name: "San Marino",
      code: "+378",
    },
    {
      name: "Sao Tome and Principe",
      code: "+239",
    },
    {
      name: "Saudi Arabia",
      code: "+966",
    },
    {
      name: "Senegal",
      code: "+221",
    },
    {
      name: "Serbia",
      code: "+381",
    },
    {
      name: "Seychelles",
      code: "+248",
    },
    {
      name: "Sierra Leone",
      code: "+232",
    },
    {
      name: "Singapore",
      code: "+65",
    },
    {
      name: "Sint Maarten",
      code: "+1-721",
    },
    {
      name: "Slovakia",
      code: "+421",
    },
    {
      name: "Slovenia",
      code: "+386",
    },
    {
      name: "Solomon Islands",
      code: "+677",
    },
    {
      name: "Somalia",
      code: "+252",
    },
    {
      name: "South Africa",
      code: "+27",
    },
    {
      name: "South Korea",
      code: "+82",
    },
    {
      name: "South Sudan",
      code: "+211",
    },
    {
      name: "Spain",
      code: "+34",
    },
    {
      name: "Sri Lanka",
      code: "+94",
    },
    {
      name: "Sudan",
      code: "+249",
    },
    {
      name: "Suriname",
      code: "+597",
    },
    {
      name: "Svalbard and Jan Mayen",
      code: "+47",
    },
    {
      name: "Swaziland",
      code: "+268",
    },
    {
      name: "Sweden",
      code: "+46",
    },
    {
      name: "Switzerland",
      code: "+41",
    },
    {
      name: "Syria",
      code: "+963",
    },
    {
      name: "Taiwan",
      code: "+886",
    },
    {
      name: "Tajikistan",
      code: "+992",
    },
    {
      name: "Tanzania",
      code: "+255",
    },
    {
      name: "Thailand",
      code: "+66",
    },
    {
      name: "Togo",
      code: "+228",
    },
    {
      name: "Tokelau",
      code: "+690",
    },
    {
      name: "Tonga",
      code: "+676",
    },
    {
      name: "Trinidad and Tobago",
      code: "+1-868",
    },
    {
      name: "Tunisia",
      code: "+216",
    },
    {
      name: "Turkey",
      code: "+90",
    },
    {
      name: "Turkmenistan",
      code: "+993",
    },
    {
      name: "Turks and Caicos Islands",
      code: "+1-649",
    },
    {
      name: "Tuvalu",
      code: "+688",
    },
    {
      name: "U.S. Virgin Islands",
      code: "+1-340",
    },
    {
      name: "Uganda",
      code: "+256",
    },
    {
      name: "Ukraine",
      code: "+380",
    },
    {
      name: "United Arab Emirates",
      code: "+971",
    },
    {
      name: "United Kingdom",
      code: "+44",
    },
    {
      name: "United States",
      code: "+1",
    },
    {
      name: "Uruguay",
      code: "+598",
    },
    {
      name: "Uzbekistan",
      code: "+998",
    },
    {
      name: "Vanuatu",
      code: "+678",
    },
    {
      name: "Vatican",
      code: "+379",
    },
    {
      name: "Venezuela",
      code: "+58",
    },
    {
      name: "Vietnam",
      code: "+84",
    },
    {
      name: "Wallis and Futuna",
      code: "+681",
    },
    {
      name: "Western Sahara",
      code: "+212",
    },
    {
      name: "Yemen",
      code: "+967",
    },
    {
      name: "Zambia",
      code: "+260",
    },
    {
      name: "Zimbabwe",
      code: "+263",
    },
  ];
  const nevi = useNavigate();
  return (
    <div>
      <Loader loader={loader} />
      <Cursor />
      <Navbars active="contact" />

      <Particless />
      <div className="contact_section ">
        <div className="contact_title wow fadeInUp">
          <h2>Contact Us</h2>
        </div>
        <div className="contact_inner_pages wow fadeInUp">
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
            Contact Us
          </span>
        </div>
      </div>
      <div className="info_section">
        <div className="contact_form_wrapper container wow fadeInUp">
          <div className="contact_form" style={{ cursor: "none" }}>
            <div className="contact_form_title">
              <h2>Get a quote</h2>
            </div>
            <div className="contct_form_wrap col-md-8 m-auto">
              <form type="submit" style={{ cursor: "none" }}>
                <label className="contact_title" htmlFor="fname">
                  Your Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    setdata({ ...data, name: e.target.value });
                  }}
                />
                <label className="contact_title" htmlFor="lname">
                  Email Address
                </label>
                <input
                  type="email"
                  id="lname"
                  name="lastname"
                  placeholder="Enter Your Email Address"
                  onChange={(e) => {
                    setdata({ ...data, email: e.target.value });
                  }}
                />
                <label htmlFor="services" className="contact_title">
                  Choose a Services:
                </label>
                <select
                  id="services-item"
                  onChange={(e) => {
                    setdata({ ...data, serviceType: e.target.value });
                  }}
                >
                  <option value="">--- select services ---</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Frontend Development">
                    Frontend Development
                  </option>
                  <option value="Backend Development">
                    Backend Development
                  </option>
                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value="Game Development">Game Development</option>
                </select>
                <div className="contact_code">
                  <label className="contact_title" htmlFor="phoneno">
                    Phone Number
                  </label>
                  <div className="code_select">
                    <select
                      id="phoneno"
                      name="phoneno"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setdata({
                          ...data,
                          phonecode:
                            e.target.value === "+0,Country"
                              ? null
                              : e.target.value,
                        });
                      }}
                    >
                      {cData.map((data, i) => {
                        return (
                          <option key={i} value={data.code + "," + data.name}>
                            {data.code}, {data.name}
                          </option>
                        );
                      })}
                    </select>
                    <input
                      type="number"
                      id="mono"
                      name="lastname"
                      placeholder="Enter Your Mobile No"
                      onChange={(e) => {
                        setdata({ ...data, phonenum: e.target.value });
                      }}
                    />
                  </div>
                </div>
                {/* <label className="contact_title" htmlFor="Budget">
                  Budget
                </label>
                <select id="Budget" name="Budget">
                  <option value="$1.00">$1.00</option>
                  <option value="$5.00">$5.00</option>
                  <option value="$20.00">$20.00</option>
                </select> */}
                <label className="contact_title" htmlFor="Message">
                  Message
                </label>
                <textarea
                  id="Message"
                  name="Message"
                  placeholder="Enter Your Message"
                  defaultValue={""}
                  onChange={(e) => {
                    setdata({ ...data, message: e.target.value });
                  }}
                />
                <button
                  type="submit"
                  className="contact_det_submit theme_btn"
                  onClick={(evetnt) => {
                    evetnt.preventDefault();
                    console.log(data);
                    axios.post("/entry", data).then((e) => {
                      if (e.data.code === 200) {
                        toast(e.data.data);
                        nevi("/");
                      } else {
                        toast.info(e.data.data);
                      }
                    });
                  }}
                >
                  <span>
                    Submit Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={16}
                      viewBox="0 0 15 16"
                      fill="none"
                    >
                      <path
                        d="M11.3244 7.08328L6.40741 2.16628L7.70358 0.870117L14.8334 7.99995L7.70358 15.1298L6.40741 13.8336L11.3244 8.91662H0.166748V7.08328H11.3244Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* ---offer benner start--- */}
        {/* ---offer benner end--- */}
        <>
          {/* ---offer benner end--- */}
          <div className="help_footer_sec wow fadeInUp">
            {/* ---help section start--- */}
            <div className="help_section_wrapper">
              <div className="container">
                <div className="row">
                  <div className="help_box col-md-4 col-sm-6 col-xs-12">
                    <div className="help_detail_box">
                      <div className="contact_icon">
                        <img
                          src={require("../images/phone.png")}
                          alt="contact"
                        />
                      </div>
                      <div className="help_detail">
                        <h6>FREE CONSULTATION</h6>
                        <h3>
                          Schedule a free consultation with our specialist
                        </h3>
                        <div className="theme_btn">
                          <Link
                            onClick={() => {
                              const newWindow = window.open(
                                "https://api.whatsapp.com/send?phone=+919409911772&text=Hello, Dark ninja solutions",
                                "_blank"
                              );
                            }}
                          >
                            <span>Schedule Now</span>
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
                  <div className="help_box col-md-4 col-sm-6 col-xs-12">
                    <div className="help_detail_box">
                      <div className="contact_icon">
                        <img
                          src={require("../images/request.png")}
                          alt="request"
                        />
                      </div>
                      <div className="help_detail help_request">
                        <h6>PROJECT REQUEST</h6>
                        <h3>
                          Begin your adventure with experienced professionals
                        </h3>
                        <div className="theme_btn">
                          <Link
                            onClick={() => {
                              const newWindow = window.open(
                                "mailto: info@darkninjasolutions.com",
                                "_blank"
                              );
                            }}
                          >
                            <span>Request Now</span>
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
                  <div className="help_box col-md-4 col-sm-6 col-xs-12">
                    <div className="help_detail_box">
                      <div className="contact_icon">
                        <img
                          src={require("../images/help_desk.png")}
                          alt="help_desk"
                        />
                      </div>
                      <div className="help_detail help_desk">
                        <h6>HELP DECK</h6>
                        <h3>
                          Do you have questions or more information? call now
                        </h3>
                        <div className="contact_now">
                          <img
                            src={require("../images/phone-call.png")}
                            className="img-fluid"
                            alt="phone call"
                          />
                          <Link
                            onClick={() => {
                              const newWindow = window.open(
                                "tel:9409911772",
                                "_self",
                                "_blank"
                              );
                            }}
                          >
                            <span>+91 94099 11772</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---help section end--- */}
            {/* ---footer section start--- */}
            <div className="footer-bottom wow fadeInUp">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="footer-bottom-inner">
                      <p className="footer-bottom-copy-right">
                        <Link
                          onClick={() => {
                            const newWindow = window.open(
                              "mailto: info@darkninjasolutions.com",
                              "_blank"
                            );
                          }}
                        >
                          © Copyrights 2022 Darkninja All rights reserved.
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="footer-top-bottom top-move">
                      <div className="top-to-bottom">
                        <Link
                          onClick={() => {
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          Go to top
                        </Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={6}
                          viewBox="0 0 9 6"
                          fill="none"
                        >
                          <path
                            d="M4.49984 2.828L1.67184 5.657L0.256836 4.243L4.49984 0L8.74284 4.243L7.32784 5.657L4.49984 2.828Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ---footer section end--- */}
          </div>
          <div className="footer-bottom wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="footer-bottom-inner">
                    <p className="footer-bottom-copy-right">
                      <Link
                        onClick={() => {
                          const newWindow = window.open(
                            "mailto: info@darkninjasolutions.com",
                            "_blank"
                          );
                        }}
                      >
                        © Copyrights 2022 Darkninja All rights reserved.
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="footer-top-bottom top-move">
                    <div className="top-to-bottom">
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Go to top
                      </Link>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={9}
                        height={6}
                        viewBox="0 0 9 6"
                        fill="none"
                      >
                        <path
                          d="M4.49984 2.828L1.67184 5.657L0.256836 4.243L4.49984 0L8.74284 4.243L7.32784 5.657L4.49984 2.828Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-move-btn top-move wow fadeInUp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={9}
              height={6}
              viewBox="0 0 9 6"
              fill="none"
            >
              <path
                d="M4.49984 2.828L1.67184 5.657L0.256836 4.243L4.49984 0L8.74284 4.243L7.32784 5.657L4.49984 2.828Z"
                fill="white"
              />
            </svg>
          </div>
        </>
        {/* ---footer copy-right start--- */}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
