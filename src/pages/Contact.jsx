import React from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbars from "../component/Navbars";
import Particless from "../component/Particles";
import { Link, useNavigate } from "react-router-dom";
import WOW from "wow.js";
import cursor from "../component/cursor";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";
import useMediaQuery from "../component/useMediaQuery";
import Logo from "../component/Logo";
export default function Contact({ axios }) {
  const [data, setdata] = React.useState({});
  const [loader, setloader] = React.useState(true);
  let fream = useMediaQuery("(max-width: 1024px)");
  React.useEffect(() => {
    setloader(false);
    let wow = new WOW();
    wow.init();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  let cData = [
    {
      name: "Afghanistan",
      dial_code: "+00",
      code: "---",
    },
    {
      name: "Afghanistan",
      dial_code: "+93",
      code: "AF",
    },
    {
      name: "Aland Islands",
      dial_code: "+358",
      code: "AX",
    },
    {
      name: "Albania",
      dial_code: "+355",
      code: "AL",
    },
    {
      name: "Algeria",
      dial_code: "+213",
      code: "DZ",
    },
    {
      name: "AmericanSamoa",
      dial_code: "+1684",
      code: "AS",
    },
    {
      name: "Andorra",
      dial_code: "+376",
      code: "AD",
    },
    {
      name: "Angola",
      dial_code: "+244",
      code: "AO",
    },
    {
      name: "Anguilla",
      dial_code: "+1264",
      code: "AI",
    },
    {
      name: "Antarctica",
      dial_code: "+672",
      code: "AQ",
    },
    {
      name: "Antigua and Barbuda",
      dial_code: "+1268",
      code: "AG",
    },
    {
      name: "Argentina",
      dial_code: "+54",
      code: "AR",
    },
    {
      name: "Armenia",
      dial_code: "+374",
      code: "AM",
    },
    {
      name: "Aruba",
      dial_code: "+297",
      code: "AW",
    },
    {
      name: "Australia",
      dial_code: "+61",
      code: "AU",
    },
    {
      name: "Austria",
      dial_code: "+43",
      code: "AT",
    },
    {
      name: "Azerbaijan",
      dial_code: "+994",
      code: "AZ",
    },
    {
      name: "Bahamas",
      dial_code: "+1242",
      code: "BS",
    },
    {
      name: "Bahrain",
      dial_code: "+973",
      code: "BH",
    },
    {
      name: "Bangladesh",
      dial_code: "+880",
      code: "BD",
    },
    {
      name: "Barbados",
      dial_code: "+1246",
      code: "BB",
    },
    {
      name: "Belarus",
      dial_code: "+375",
      code: "BY",
    },
    {
      name: "Belgium",
      dial_code: "+32",
      code: "BE",
    },
    {
      name: "Belize",
      dial_code: "+501",
      code: "BZ",
    },
    {
      name: "Benin",
      dial_code: "+229",
      code: "BJ",
    },
    {
      name: "Bermuda",
      dial_code: "+1441",
      code: "BM",
    },
    {
      name: "Bhutan",
      dial_code: "+975",
      code: "BT",
    },
    {
      name: "Bolivia, Plurinational State of",
      dial_code: "+591",
      code: "BO",
    },
    {
      name: "Bosnia and Herzegovina",
      dial_code: "+387",
      code: "BA",
    },
    {
      name: "Botswana",
      dial_code: "+267",
      code: "BW",
    },
    {
      name: "Brazil",
      dial_code: "+55",
      code: "BR",
    },
    {
      name: "British Indian Ocean Territory",
      dial_code: "+246",
      code: "IO",
    },
    {
      name: "Brunei Darussalam",
      dial_code: "+673",
      code: "BN",
    },
    {
      name: "Bulgaria",
      dial_code: "+359",
      code: "BG",
    },
    {
      name: "Burkina Faso",
      dial_code: "+226",
      code: "BF",
    },
    {
      name: "Burundi",
      dial_code: "+257",
      code: "BI",
    },
    {
      name: "Cambodia",
      dial_code: "+855",
      code: "KH",
    },
    {
      name: "Cameroon",
      dial_code: "+237",
      code: "CM",
    },
    {
      name: "Canada",
      dial_code: "+1",
      code: "CA",
    },
    {
      name: "Cape Verde",
      dial_code: "+238",
      code: "CV",
    },
    {
      name: "Cayman Islands",
      dial_code: "+ 345",
      code: "KY",
    },
    {
      name: "Central African Republic",
      dial_code: "+236",
      code: "CF",
    },
    {
      name: "Chad",
      dial_code: "+235",
      code: "TD",
    },
    {
      name: "Chile",
      dial_code: "+56",
      code: "CL",
    },
    {
      name: "China",
      dial_code: "+86",
      code: "CN",
    },
    {
      name: "Christmas Island",
      dial_code: "+61",
      code: "CX",
    },
    {
      name: "Cocos (Keeling) Islands",
      dial_code: "+61",
      code: "CC",
    },
    {
      name: "Colombia",
      dial_code: "+57",
      code: "CO",
    },
    {
      name: "Comoros",
      dial_code: "+269",
      code: "KM",
    },
    {
      name: "Congo",
      dial_code: "+242",
      code: "CG",
    },
    {
      name: "Congo, The Democratic Republic of the Congo",
      dial_code: "+243",
      code: "CD",
    },
    {
      name: "Cook Islands",
      dial_code: "+682",
      code: "CK",
    },
    {
      name: "Costa Rica",
      dial_code: "+506",
      code: "CR",
    },
    {
      name: "Cote d'Ivoire",
      dial_code: "+225",
      code: "CI",
    },
    {
      name: "Croatia",
      dial_code: "+385",
      code: "HR",
    },
    {
      name: "Cuba",
      dial_code: "+53",
      code: "CU",
    },
    {
      name: "Cyprus",
      dial_code: "+357",
      code: "CY",
    },
    {
      name: "Czech Republic",
      dial_code: "+420",
      code: "CZ",
    },
    {
      name: "Denmark",
      dial_code: "+45",
      code: "DK",
    },
    {
      name: "Djibouti",
      dial_code: "+253",
      code: "DJ",
    },
    {
      name: "Dominica",
      dial_code: "+1767",
      code: "DM",
    },
    {
      name: "Dominican Republic",
      dial_code: "+1849",
      code: "DO",
    },
    {
      name: "Ecuador",
      dial_code: "+593",
      code: "EC",
    },
    {
      name: "Egypt",
      dial_code: "+20",
      code: "EG",
    },
    {
      name: "El Salvador",
      dial_code: "+503",
      code: "SV",
    },
    {
      name: "Equatorial Guinea",
      dial_code: "+240",
      code: "GQ",
    },
    {
      name: "Eritrea",
      dial_code: "+291",
      code: "ER",
    },
    {
      name: "Estonia",
      dial_code: "+372",
      code: "EE",
    },
    {
      name: "Ethiopia",
      dial_code: "+251",
      code: "ET",
    },
    {
      name: "Falkland Islands (Malvinas)",
      dial_code: "+500",
      code: "FK",
    },
    {
      name: "Faroe Islands",
      dial_code: "+298",
      code: "FO",
    },
    {
      name: "Fiji",
      dial_code: "+679",
      code: "FJ",
    },
    {
      name: "Finland",
      dial_code: "+358",
      code: "FI",
    },
    {
      name: "France",
      dial_code: "+33",
      code: "FR",
    },
    {
      name: "French Guiana",
      dial_code: "+594",
      code: "GF",
    },
    {
      name: "French Polynesia",
      dial_code: "+689",
      code: "PF",
    },
    {
      name: "Gabon",
      dial_code: "+241",
      code: "GA",
    },
    {
      name: "Gambia",
      dial_code: "+220",
      code: "GM",
    },
    {
      name: "Georgia",
      dial_code: "+995",
      code: "GE",
    },
    {
      name: "Germany",
      dial_code: "+49",
      code: "DE",
    },
    {
      name: "Ghana",
      dial_code: "+233",
      code: "GH",
    },
    {
      name: "Gibraltar",
      dial_code: "+350",
      code: "GI",
    },
    {
      name: "Greece",
      dial_code: "+30",
      code: "GR",
    },
    {
      name: "Greenland",
      dial_code: "+299",
      code: "GL",
    },
    {
      name: "Grenada",
      dial_code: "+1473",
      code: "GD",
    },
    {
      name: "Guadeloupe",
      dial_code: "+590",
      code: "GP",
    },
    {
      name: "Guam",
      dial_code: "+1671",
      code: "GU",
    },
    {
      name: "Guatemala",
      dial_code: "+502",
      code: "GT",
    },
    {
      name: "Guernsey",
      dial_code: "+44",
      code: "GG",
    },
    {
      name: "Guinea",
      dial_code: "+224",
      code: "GN",
    },
    {
      name: "Guinea-Bissau",
      dial_code: "+245",
      code: "GW",
    },
    {
      name: "Guyana",
      dial_code: "+595",
      code: "GY",
    },
    {
      name: "Haiti",
      dial_code: "+509",
      code: "HT",
    },
    {
      name: "Holy See (Vatican City State)",
      dial_code: "+379",
      code: "VA",
    },
    {
      name: "Honduras",
      dial_code: "+504",
      code: "HN",
    },
    {
      name: "Hong Kong",
      dial_code: "+852",
      code: "HK",
    },
    {
      name: "Hungary",
      dial_code: "+36",
      code: "HU",
    },
    {
      name: "Iceland",
      dial_code: "+354",
      code: "IS",
    },
    {
      name: "India",
      dial_code: "+91",
      code: "IN",
    },
    {
      name: "Indonesia",
      dial_code: "+62",
      code: "ID",
    },
    {
      name: "Iran, Islamic Republic of Persian Gulf",
      dial_code: "+98",
      code: "IR",
    },
    {
      name: "Iraq",
      dial_code: "+964",
      code: "IQ",
    },
    {
      name: "Ireland",
      dial_code: "+353",
      code: "IE",
    },
    {
      name: "Isle of Man",
      dial_code: "+44",
      code: "IM",
    },
    {
      name: "Israel",
      dial_code: "+972",
      code: "IL",
    },
    {
      name: "Italy",
      dial_code: "+39",
      code: "IT",
    },
    {
      name: "Jamaica",
      dial_code: "+1876",
      code: "JM",
    },
    {
      name: "Japan",
      dial_code: "+81",
      code: "JP",
    },
    {
      name: "Jersey",
      dial_code: "+44",
      code: "JE",
    },
    {
      name: "Jordan",
      dial_code: "+962",
      code: "JO",
    },
    {
      name: "Kazakhstan",
      dial_code: "+77",
      code: "KZ",
    },
    {
      name: "Kenya",
      dial_code: "+254",
      code: "KE",
    },
    {
      name: "Kiribati",
      dial_code: "+686",
      code: "KI",
    },
    {
      name: "Korea, Democratic People's Republic of Korea",
      dial_code: "+850",
      code: "KP",
    },
    {
      name: "Korea, Republic of South Korea",
      dial_code: "+82",
      code: "KR",
    },
    {
      name: "Kuwait",
      dial_code: "+965",
      code: "KW",
    },
    {
      name: "Kyrgyzstan",
      dial_code: "+996",
      code: "KG",
    },
    {
      name: "Laos",
      dial_code: "+856",
      code: "LA",
    },
    {
      name: "Latvia",
      dial_code: "+371",
      code: "LV",
    },
    {
      name: "Lebanon",
      dial_code: "+961",
      code: "LB",
    },
    {
      name: "Lesotho",
      dial_code: "+266",
      code: "LS",
    },
    {
      name: "Liberia",
      dial_code: "+231",
      code: "LR",
    },
    {
      name: "Libyan Arab Jamahiriya",
      dial_code: "+218",
      code: "LY",
    },
    {
      name: "Liechtenstein",
      dial_code: "+423",
      code: "LI",
    },
    {
      name: "Lithuania",
      dial_code: "+370",
      code: "LT",
    },
    {
      name: "Luxembourg",
      dial_code: "+352",
      code: "LU",
    },
    {
      name: "Macao",
      dial_code: "+853",
      code: "MO",
    },
    {
      name: "Macedonia",
      dial_code: "+389",
      code: "MK",
    },
    {
      name: "Madagascar",
      dial_code: "+261",
      code: "MG",
    },
    {
      name: "Malawi",
      dial_code: "+265",
      code: "MW",
    },
    {
      name: "Malaysia",
      dial_code: "+60",
      code: "MY",
    },
    {
      name: "Maldives",
      dial_code: "+960",
      code: "MV",
    },
    {
      name: "Mali",
      dial_code: "+223",
      code: "ML",
    },
    {
      name: "Malta",
      dial_code: "+356",
      code: "MT",
    },
    {
      name: "Marshall Islands",
      dial_code: "+692",
      code: "MH",
    },
    {
      name: "Martinique",
      dial_code: "+596",
      code: "MQ",
    },
    {
      name: "Mauritania",
      dial_code: "+222",
      code: "MR",
    },
    {
      name: "Mauritius",
      dial_code: "+230",
      code: "MU",
    },
    {
      name: "Mayotte",
      dial_code: "+262",
      code: "YT",
    },
    {
      name: "Mexico",
      dial_code: "+52",
      code: "MX",
    },
    {
      name: "Micronesia, Federated States of Micronesia",
      dial_code: "+691",
      code: "FM",
    },
    {
      name: "Moldova",
      dial_code: "+373",
      code: "MD",
    },
    {
      name: "Monaco",
      dial_code: "+377",
      code: "MC",
    },
    {
      name: "Mongolia",
      dial_code: "+976",
      code: "MN",
    },
    {
      name: "Montenegro",
      dial_code: "+382",
      code: "ME",
    },
    {
      name: "Montserrat",
      dial_code: "+1664",
      code: "MS",
    },
    {
      name: "Morocco",
      dial_code: "+212",
      code: "MA",
    },
    {
      name: "Mozambique",
      dial_code: "+258",
      code: "MZ",
    },
    {
      name: "Myanmar",
      dial_code: "+95",
      code: "MM",
    },
    {
      name: "Namibia",
      dial_code: "+264",
      code: "NA",
    },
    {
      name: "Nauru",
      dial_code: "+674",
      code: "NR",
    },
    {
      name: "Nepal",
      dial_code: "+977",
      code: "NP",
    },
    {
      name: "Netherlands",
      dial_code: "+31",
      code: "NL",
    },
    {
      name: "Netherlands Antilles",
      dial_code: "+599",
      code: "AN",
    },
    {
      name: "New Caledonia",
      dial_code: "+687",
      code: "NC",
    },
    {
      name: "New Zealand",
      dial_code: "+64",
      code: "NZ",
    },
    {
      name: "Nicaragua",
      dial_code: "+505",
      code: "NI",
    },
    {
      name: "Niger",
      dial_code: "+227",
      code: "NE",
    },
    {
      name: "Nigeria",
      dial_code: "+234",
      code: "NG",
    },
    {
      name: "Niue",
      dial_code: "+683",
      code: "NU",
    },
    {
      name: "Norfolk Island",
      dial_code: "+672",
      code: "NF",
    },
    {
      name: "Northern Mariana Islands",
      dial_code: "+1670",
      code: "MP",
    },
    {
      name: "Norway",
      dial_code: "+47",
      code: "NO",
    },
    {
      name: "Oman",
      dial_code: "+968",
      code: "OM",
    },
    {
      name: "Pakistan",
      dial_code: "+92",
      code: "PK",
    },
    {
      name: "Palau",
      dial_code: "+680",
      code: "PW",
    },
    {
      name: "Palestinian Territory, Occupied",
      dial_code: "+970",
      code: "PS",
    },
    {
      name: "Panama",
      dial_code: "+507",
      code: "PA",
    },
    {
      name: "Papua New Guinea",
      dial_code: "+675",
      code: "PG",
    },
    {
      name: "Paraguay",
      dial_code: "+595",
      code: "PY",
    },
    {
      name: "Peru",
      dial_code: "+51",
      code: "PE",
    },
    {
      name: "Philippines",
      dial_code: "+63",
      code: "PH",
    },
    {
      name: "Pitcairn",
      dial_code: "+872",
      code: "PN",
    },
    {
      name: "Poland",
      dial_code: "+48",
      code: "PL",
    },
    {
      name: "Portugal",
      dial_code: "+351",
      code: "PT",
    },
    {
      name: "Puerto Rico",
      dial_code: "+1939",
      code: "PR",
    },
    {
      name: "Qatar",
      dial_code: "+974",
      code: "QA",
    },
    {
      name: "Romania",
      dial_code: "+40",
      code: "RO",
    },
    {
      name: "Russia",
      dial_code: "+7",
      code: "RU",
    },
    {
      name: "Rwanda",
      dial_code: "+250",
      code: "RW",
    },
    {
      name: "Reunion",
      dial_code: "+262",
      code: "RE",
    },
    {
      name: "Saint Barthelemy",
      dial_code: "+590",
      code: "BL",
    },
    {
      name: "Saint Helena, Ascension and Tristan Da Cunha",
      dial_code: "+290",
      code: "SH",
    },
    {
      name: "Saint Kitts and Nevis",
      dial_code: "+1869",
      code: "KN",
    },
    {
      name: "Saint Lucia",
      dial_code: "+1758",
      code: "LC",
    },
    {
      name: "Saint Martin",
      dial_code: "+590",
      code: "MF",
    },
    {
      name: "Saint Pierre and Miquelon",
      dial_code: "+508",
      code: "PM",
    },
    {
      name: "Saint Vincent and the Grenadines",
      dial_code: "+1784",
      code: "VC",
    },
    {
      name: "Samoa",
      dial_code: "+685",
      code: "WS",
    },
    {
      name: "San Marino",
      dial_code: "+378",
      code: "SM",
    },
    {
      name: "Sao Tome and Principe",
      dial_code: "+239",
      code: "ST",
    },
    {
      name: "Saudi Arabia",
      dial_code: "+966",
      code: "SA",
    },
    {
      name: "Senegal",
      dial_code: "+221",
      code: "SN",
    },
    {
      name: "Serbia",
      dial_code: "+381",
      code: "RS",
    },
    {
      name: "Seychelles",
      dial_code: "+248",
      code: "SC",
    },
    {
      name: "Sierra Leone",
      dial_code: "+232",
      code: "SL",
    },
    {
      name: "Singapore",
      dial_code: "+65",
      code: "SG",
    },
    {
      name: "Slovakia",
      dial_code: "+421",
      code: "SK",
    },
    {
      name: "Slovenia",
      dial_code: "+386",
      code: "SI",
    },
    {
      name: "Solomon Islands",
      dial_code: "+677",
      code: "SB",
    },
    {
      name: "Somalia",
      dial_code: "+252",
      code: "SO",
    },
    {
      name: "South Africa",
      dial_code: "+27",
      code: "ZA",
    },
    {
      name: "South Sudan",
      dial_code: "+211",
      code: "SS",
    },
    {
      name: "South Georgia and the South Sandwich Islands",
      dial_code: "+500",
      code: "GS",
    },
    {
      name: "Spain",
      dial_code: "+34",
      code: "ES",
    },
    {
      name: "Sri Lanka",
      dial_code: "+94",
      code: "LK",
    },
    {
      name: "Sudan",
      dial_code: "+249",
      code: "SD",
    },
    {
      name: "Suriname",
      dial_code: "+597",
      code: "SR",
    },
    {
      name: "Svalbard and Jan Mayen",
      dial_code: "+47",
      code: "SJ",
    },
    {
      name: "Swaziland",
      dial_code: "+268",
      code: "SZ",
    },
    {
      name: "Sweden",
      dial_code: "+46",
      code: "SE",
    },
    {
      name: "Switzerland",
      dial_code: "+41",
      code: "CH",
    },
    {
      name: "Syrian Arab Republic",
      dial_code: "+963",
      code: "SY",
    },
    {
      name: "Taiwan",
      dial_code: "+886",
      code: "TW",
    },
    {
      name: "Tajikistan",
      dial_code: "+992",
      code: "TJ",
    },
    {
      name: "Tanzania, United Republic of Tanzania",
      dial_code: "+255",
      code: "TZ",
    },
    {
      name: "Thailand",
      dial_code: "+66",
      code: "TH",
    },
    {
      name: "Timor-Leste",
      dial_code: "+670",
      code: "TL",
    },
    {
      name: "Togo",
      dial_code: "+228",
      code: "TG",
    },
    {
      name: "Tokelau",
      dial_code: "+690",
      code: "TK",
    },
    {
      name: "Tonga",
      dial_code: "+676",
      code: "TO",
    },
    {
      name: "Trinidad and Tobago",
      dial_code: "+1868",
      code: "TT",
    },
    {
      name: "Tunisia",
      dial_code: "+216",
      code: "TN",
    },
    {
      name: "Turkey",
      dial_code: "+90",
      code: "TR",
    },
    {
      name: "Turkmenistan",
      dial_code: "+993",
      code: "TM",
    },
    {
      name: "Turks and Caicos Islands",
      dial_code: "+1649",
      code: "TC",
    },
    {
      name: "Tuvalu",
      dial_code: "+688",
      code: "TV",
    },
    {
      name: "Uganda",
      dial_code: "+256",
      code: "UG",
    },
    {
      name: "Ukraine",
      dial_code: "+380",
      code: "UA",
    },
    {
      name: "United Arab Emirates",
      dial_code: "+971",
      code: "AE",
    },
    {
      name: "United Kingdom",
      dial_code: "+44",
      code: "GB",
    },
    {
      name: "United States",
      dial_code: "+1",
      code: "US",
    },
    {
      name: "Uruguay",
      dial_code: "+598",
      code: "UY",
    },
    {
      name: "Uzbekistan",
      dial_code: "+998",
      code: "UZ",
    },
    {
      name: "Vanuatu",
      dial_code: "+678",
      code: "VU",
    },
    {
      name: "Venezuela, Bolivarian Republic of Venezuela",
      dial_code: "+58",
      code: "VE",
    },
    {
      name: "Vietnam",
      dial_code: "+84",
      code: "VN",
    },
    {
      name: "Virgin Islands, British",
      dial_code: "+1284",
      code: "VG",
    },
    {
      name: "Virgin Islands, U.S.",
      dial_code: "+1340",
      code: "VI",
    },
    {
      name: "Wallis and Futuna",
      dial_code: "+681",
      code: "WF",
    },
    {
      name: "Yemen",
      dial_code: "+967",
      code: "YE",
    },
    {
      name: "Zambia",
      dial_code: "+260",
      code: "ZM",
    },
    {
      name: "Zimbabwe",
      dial_code: "+263",
      code: "ZW",
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
                            e.target.value ===
                            cData[0].dial_code + "," + cData[0].code
                              ? null
                              : e.target.value,
                        });
                      }}
                    >
                      {cData.map((data, i) => {
                        return (
                          <option
                            key={i}
                            value={data.dial_code + "," + data.code}
                          >
                            {data.code}, {data.dial_code}
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
                        toast.success(e.data.data);
                        nevi("/");
                      } else {
                        toast(e.data.data);
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
            <div className="footer_section container">
              <div className="row">
                <div className="footer_address col-md-4 col-sm-6 col-xs-12">
                  <div className="footer_logo">
                    <Link to="/">
                      <Logo />
                    </Link>
                  </div>
                  <div className="footer_email">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={21}
                      height={18}
                      viewBox="0 0 21 18"
                      fill="none"
                    >
                      <path
                        d="M1.5 0H19.5C19.7652 0 20.0196 0.105357 20.2071 0.292893C20.3946 0.48043 20.5 0.734784 20.5 1V17C20.5 17.2652 20.3946 17.5196 20.2071 17.7071C20.0196 17.8946 19.7652 18 19.5 18H1.5C1.23478 18 0.98043 17.8946 0.792893 17.7071C0.605357 17.5196 0.5 17.2652 0.5 17V1C0.5 0.734784 0.605357 0.48043 0.792893 0.292893C0.98043 0.105357 1.23478 0 1.5 0ZM18.5 4.238L10.572 11.338L2.5 4.216V16H18.5V4.238ZM3.011 2L10.561 8.662L18.002 2H3.011Z"
                        fill="#E0DEDE"
                      />
                    </svg>
                    <Link
                      onClick={() => {
                        const newWindow = window.open(
                          "mailto: info@darkninjasolutions.com",
                          "_blank"
                        );
                      }}
                    >
                      <span>info@darkninjasolution.com</span>
                    </Link>
                  </div>
                  <div className="footer_location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={24}
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_1_788)">
                        <path
                          d="M12.5 23.7279L6.136 17.3639C4.87734 16.1052 4.02019 14.5016 3.67293 12.7558C3.32567 11.0099 3.50391 9.20035 4.1851 7.55582C4.86629 5.91129 6.01984 4.50569 7.49988 3.51677C8.97992 2.52784 10.72 2 12.5 2C14.28 2 16.0201 2.52784 17.5001 3.51677C18.9802 4.50569 20.1337 5.91129 20.8149 7.55582C21.4961 9.20035 21.6743 11.0099 21.3271 12.7558C20.9798 14.5016 20.1227 16.1052 18.864 17.3639L12.5 23.7279ZM17.45 15.9499C18.4289 14.9709 19.0955 13.7236 19.3656 12.3658C19.6356 11.0079 19.4969 9.60052 18.9671 8.32148C18.4373 7.04244 17.54 5.94923 16.3889 5.18009C15.2378 4.41095 13.8844 4.00043 12.5 4.00043C11.1156 4.00043 9.76222 4.41095 8.61109 5.18009C7.45996 5.94923 6.56275 7.04244 6.03292 8.32148C5.50308 9.60052 5.36442 11.0079 5.63445 12.3658C5.90449 13.7236 6.57111 14.9709 7.55 15.9499L12.5 20.8999L17.45 15.9499ZM12.5 12.9999C11.9696 12.9999 11.4609 12.7892 11.0858 12.4141C10.7107 12.0391 10.5 11.5304 10.5 10.9999C10.5 10.4695 10.7107 9.96078 11.0858 9.58571C11.4609 9.21064 11.9696 8.99992 12.5 8.99992C13.0304 8.99992 13.5391 9.21064 13.9142 9.58571C14.2893 9.96078 14.5 10.4695 14.5 10.9999C14.5 11.5304 14.2893 12.0391 13.9142 12.4141C13.5391 12.7892 13.0304 12.9999 12.5 12.9999Z"
                          fill="#E0DEDE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_788">
                          <rect
                            width={24}
                            height={24}
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Gujrat, India</span>
                  </div>
                  <div className="footer_social_media">
                    <li className="linkedin">
                      <Link
                        onClick={() => {
                          const newWindow = window.open(
                            "https://www.linkedin.com/in/dark-ninja-solutions/",
                            "_blank"
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={18}
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_792)">
                            <path
                              d="M5.70508 3.75002C5.70488 4.14784 5.54665 4.52929 5.26521 4.81046C4.98376 5.09162 4.60215 5.24947 4.20433 5.24927C3.8065 5.24907 3.42505 5.09084 3.14389 4.8094C2.86272 4.52795 2.70488 4.14634 2.70508 3.74852C2.70528 3.35069 2.8635 2.96924 3.14495 2.68808C3.42639 2.40691 3.808 2.24907 4.20583 2.24927C4.60365 2.24947 4.98511 2.40769 5.26627 2.68914C5.54743 2.97058 5.70528 3.35219 5.70508 3.75002ZM5.75008 6.36002H2.75008V15.75H5.75008V6.36002ZM10.4901 6.36002H7.50508V15.75H10.4601V10.8225C10.4601 8.07752 14.0376 7.82252 14.0376 10.8225V15.75H17.0001V9.80252C17.0001 5.17502 11.7051 5.34752 10.4601 7.62002L10.4901 6.36002Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_792">
                              <rect
                                width={18}
                                height={18}
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li className="facebook">
                      <Link
                        onClick={() => {
                          const newWindow = window.open(
                            "https://www.facebook.com/profile.php?id=100088042112767",
                            "_blank"
                          );
                        }}
                      >
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={16}
                          viewBox="0 0 9 16"
                          fill="none"
                        >
                          <path
                            d="M6 9.125H7.875L8.625 6.125H6V4.625C6 3.8525 6 3.125 7.5 3.125H8.625V0.605C8.3805 0.57275 7.45725 0.5 6.48225 0.5C4.446 0.5 3 1.74275 3 4.025V6.125H0.75V9.125H3V15.5H6V9.125Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="instragram">
                      <Link
                        onClick={() => {
                          const newWindow = window.open(
                            "https://www.instagram.com/darkninjasolutions/",
                            "_blank"
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={19}
                          height={18}
                          viewBox="0 0 19 18"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1_798)">
                            <path
                              d="M9.5 6.75C8.90326 6.75 8.33097 6.98705 7.90901 7.40901C7.48705 7.83097 7.25 8.40326 7.25 9C7.25 9.59674 7.48705 10.169 7.90901 10.591C8.33097 11.0129 8.90326 11.25 9.5 11.25C10.0967 11.25 10.669 11.0129 11.091 10.591C11.5129 10.169 11.75 9.59674 11.75 9C11.75 8.40326 11.5129 7.83097 11.091 7.40901C10.669 6.98705 10.0967 6.75 9.5 6.75ZM9.5 5.25C10.4946 5.25 11.4484 5.64509 12.1517 6.34835C12.8549 7.05161 13.25 8.00544 13.25 9C13.25 9.99456 12.8549 10.9484 12.1517 11.6517C11.4484 12.3549 10.4946 12.75 9.5 12.75C8.50544 12.75 7.55161 12.3549 6.84835 11.6517C6.14509 10.9484 5.75 9.99456 5.75 9C5.75 8.00544 6.14509 7.05161 6.84835 6.34835C7.55161 5.64509 8.50544 5.25 9.5 5.25ZM14.375 5.0625C14.375 5.31114 14.2762 5.5496 14.1004 5.72541C13.9246 5.90123 13.6861 6 13.4375 6C13.1889 6 12.9504 5.90123 12.7746 5.72541C12.5988 5.5496 12.5 5.31114 12.5 5.0625C12.5 4.81386 12.5988 4.5754 12.7746 4.39959C12.9504 4.22377 13.1889 4.125 13.4375 4.125C13.6861 4.125 13.9246 4.22377 14.1004 4.39959C14.2762 4.5754 14.375 4.81386 14.375 5.0625ZM9.5 3C7.6445 3 7.3415 3.00525 6.47825 3.0435C5.89025 3.07125 5.49575 3.15 5.12975 3.2925C4.80425 3.4185 4.5695 3.56925 4.31975 3.81975C4.08501 4.04655 3.90451 4.32344 3.79175 4.62975C3.64925 4.99725 3.5705 5.391 3.5435 5.97825C3.5045 6.80625 3.5 7.09575 3.5 9C3.5 10.8555 3.50525 11.1585 3.5435 12.0217C3.57125 12.609 3.65 13.0043 3.79175 13.3695C3.91925 13.6958 4.06925 13.9305 4.31825 14.1795C4.571 14.4315 4.80575 14.5822 5.12825 14.7067C5.49875 14.85 5.89325 14.9295 6.47825 14.9565C7.30625 14.9955 7.59575 15 9.5 15C11.3555 15 11.6585 14.9948 12.5217 14.9565C13.1082 14.9288 13.5035 14.85 13.8695 14.7083C14.1943 14.5815 14.4305 14.4307 14.6795 14.1818C14.9323 13.929 15.083 13.6943 15.2075 13.3717C15.35 13.002 15.4295 12.6067 15.4565 12.0217C15.4955 11.1937 15.5 10.9043 15.5 9C15.5 7.1445 15.4948 6.8415 15.4565 5.97825C15.4288 5.39175 15.35 4.99575 15.2075 4.62975C15.0945 4.32375 14.9143 4.04697 14.6803 3.81975C14.4536 3.58488 14.1766 3.40438 13.8702 3.29175C13.5027 3.14925 13.1082 3.0705 12.5217 3.0435C11.6937 3.0045 11.4043 3 9.5 3ZM9.5 1.5C11.5378 1.5 11.792 1.5075 12.5915 1.545C13.3903 1.5825 13.934 1.70775 14.4125 1.89375C14.9075 2.08425 15.3245 2.34225 15.7415 2.7585C16.1229 3.13342 16.418 3.58694 16.6063 4.0875C16.7915 4.56525 16.9175 5.10975 16.955 5.9085C16.9903 6.708 17 6.96225 17 9C17 11.0378 16.9925 11.292 16.955 12.0915C16.9175 12.8903 16.7915 13.434 16.6063 13.9125C16.4185 14.4133 16.1233 14.867 15.7415 15.2415C15.3665 15.6227 14.913 15.9178 14.4125 16.1063C13.9347 16.2915 13.3903 16.4175 12.5915 16.455C11.792 16.4903 11.5378 16.5 9.5 16.5C7.46225 16.5 7.208 16.4925 6.4085 16.455C5.60975 16.4175 5.066 16.2915 4.5875 16.1063C4.08674 15.9184 3.63315 15.6232 3.2585 15.2415C2.87705 14.8666 2.58195 14.4131 2.39375 13.9125C2.20775 13.4347 2.0825 12.8903 2.045 12.0915C2.00975 11.292 2 11.0378 2 9C2 6.96225 2.0075 6.708 2.045 5.9085C2.0825 5.109 2.20775 4.566 2.39375 4.0875C2.58143 3.58663 2.8766 3.13299 3.2585 2.7585C3.63325 2.37692 4.08682 2.0818 4.5875 1.89375C5.066 1.70775 5.609 1.5825 6.4085 1.545C7.208 1.50975 7.46225 1.5 9.5 1.5Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_798">
                              <rect
                                width={18}
                                height={18}
                                fill="white"
                                transform="translate(0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </li>
                    <li className="behance">
                      <Link
                        onClick={() => {
                          const newWindow = window.open(
                            "https://www.behance.net/darknindarknin",
                            "_blank"
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={17}
                          height={11}
                          viewBox="0 0 17 11"
                          fill="none"
                        >
                          <path
                            d="M5.08225 0.0124512C5.5615 0.0124512 6.00475 0.0499511 6.40975 0.160951C6.77726 0.228485 7.12806 0.367074 7.4425 0.568951C7.738 0.754201 7.95925 1.01445 8.10625 1.3482C8.254 1.68195 8.3275 2.0907 8.3275 2.53545C8.3275 3.0552 8.21725 3.49995 7.95925 3.8337C7.738 4.1682 7.369 4.46445 6.9265 4.6872C7.5535 4.8732 8.03275 5.20695 8.3275 5.6517C8.623 6.0972 8.8075 6.6537 8.8075 7.28445C8.8075 7.8042 8.6965 8.24895 8.512 8.6202C8.3275 8.99145 8.03275 9.3252 7.7005 9.54795C7.33959 9.78672 6.94063 9.96223 6.52075 10.067C6.07825 10.1787 5.63575 10.253 5.19325 10.253H0.25V0.0124512H5.08225ZM4.78675 4.16745C5.1925 4.16745 5.52475 4.05645 5.78275 3.8712C6.04075 3.68595 6.15175 3.35145 6.15175 2.94345C6.15175 2.7207 6.11425 2.49795 6.04075 2.3502C5.96725 2.2017 5.85625 2.08995 5.70925 1.97895C5.5615 1.9047 5.41375 1.83045 5.22925 1.7937C5.04475 1.7562 4.861 1.7562 4.639 1.7562H2.5V4.1682H4.7875L4.78675 4.16745ZM4.89775 8.54595C5.119 8.54595 5.34025 8.50845 5.52475 8.4717C5.71103 8.43628 5.88721 8.36022 6.04075 8.24895C6.19104 8.14038 6.31677 8.00136 6.40975 7.84095C6.48325 7.6557 6.5575 7.43295 6.5575 7.17345C6.5575 6.6537 6.40975 6.28245 6.115 6.02295C5.8195 5.8002 5.41375 5.6892 4.9345 5.6892H2.5V8.5467H4.89775V8.54595ZM12.0167 8.50845C12.3115 8.80545 12.754 8.95395 13.3442 8.95395C13.75 8.95395 14.119 8.84295 14.4137 8.6577C14.7093 8.43495 14.8937 8.2122 14.9672 7.98945H16.7747C16.4792 8.8797 16.0368 9.51045 15.4473 9.91845C14.8563 10.2897 14.1558 10.5125 13.3075 10.5125C12.7648 10.5141 12.2266 10.4133 11.7213 10.2155C11.2665 10.0449 10.861 9.76455 10.5407 9.39945C10.1982 9.05788 9.94503 8.63726 9.8035 8.1747C9.619 7.69245 9.54475 7.17345 9.54475 6.57945C9.54475 6.02295 9.619 5.50395 9.8035 5.02095C9.98089 4.55602 10.2434 4.12821 10.5775 3.75945C10.9097 3.4257 11.3155 3.12945 11.758 2.94345C12.2505 2.7455 12.7767 2.64465 13.3075 2.64645C13.9345 2.64645 14.488 2.7582 14.9672 3.0177C15.4472 3.2772 15.8155 3.5742 16.111 4.0197C16.4124 4.4476 16.637 4.92473 16.7747 5.4297C16.8483 5.9487 16.885 6.46845 16.8483 7.0617H11.5C11.5 7.6557 11.7212 8.2122 12.0167 8.5092V8.50845ZM14.3403 4.61295C14.0823 4.35345 13.6765 4.20495 13.1965 4.20495C12.865 4.20495 12.6062 4.2792 12.385 4.3902C12.1638 4.50195 12.0168 4.65045 11.869 4.79895C11.7332 4.94239 11.6434 5.12312 11.611 5.31795C11.5735 5.50395 11.5367 5.6517 11.5367 5.8002H14.8563C14.7828 5.2437 14.5983 4.8732 14.3403 4.61295ZM11.0942 0.717451H15.2252V1.71945H11.095V0.717451H11.0942Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li className="pintrest">
                      <Link
                        onClick={() => {
                          const newWindow = window.open(
                            "https://www.pinterest.ca/darkninjasolution00/",
                            "_blank"
                          );
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={16}
                          viewBox="0 0 15 16"
                          fill="none"
                        >
                          <path
                            d="M4.8675 13.3932C4.8855 13.1412 4.9215 12.89 4.9755 12.6425C5.02275 12.4213 5.166 11.795 5.376 10.8875L5.38125 10.865L5.6715 9.614C5.73075 9.359 5.7765 9.161 5.80725 9.095C5.66161 8.7583 5.58902 8.39456 5.59425 8.02775C5.59425 7.025 6.16125 6.248 6.89625 6.248C7.16625 6.2435 7.42425 6.3605 7.60275 6.5675C7.78125 6.77375 7.86375 7.0505 7.82925 7.3145C7.82925 7.65425 7.7655 7.913 7.4895 8.84075C7.43625 9.01925 7.3995 9.14375 7.365 9.269C7.32675 9.41 7.29375 9.5375 7.266 9.6605C7.194 9.95 7.26 10.2583 7.44375 10.49C7.53293 10.6033 7.64801 10.6935 7.77931 10.753C7.91061 10.8125 8.05429 10.8396 8.19825 10.832C9.31725 10.832 10.1483 9.34325 10.1483 7.421C10.1483 5.9435 9.18075 4.9655 7.57425 4.9655C7.17209 4.95055 6.77121 5.01922 6.39696 5.16716C6.02271 5.31511 5.68323 5.53911 5.4 5.825C5.1107 6.11715 4.88245 6.46398 4.72858 6.84526C4.5747 7.22653 4.49827 7.63463 4.50375 8.04575C4.48511 8.48882 4.62083 8.92462 4.88775 9.27875C5.0235 9.38375 5.07525 9.566 5.019 9.72125C4.98825 9.84725 4.914 10.1353 4.887 10.2313C4.87917 10.2784 4.86046 10.3231 4.83233 10.3618C4.80421 10.4004 4.76746 10.432 4.725 10.454C4.68394 10.4754 4.63836 10.4867 4.59206 10.487C4.54575 10.4872 4.50005 10.4765 4.45875 10.4555C3.58875 10.0963 3.11175 9.122 3.11175 7.8755C3.11175 5.63675 4.98 3.6875 7.75575 3.6875C10.107 3.6875 11.8665 5.43425 11.8665 7.5425C11.8665 10.1915 10.4175 12.1205 8.349 12.1205C8.05479 12.129 7.76267 12.0684 7.49616 11.9435C7.22965 11.8186 6.99617 11.6328 6.8145 11.4012L6.78225 11.534L6.627 12.173L6.6255 12.1782C6.516 12.6282 6.4395 12.941 6.4095 13.0588C6.33 13.325 6.2295 13.586 6.1095 13.8387C7.60191 14.194 9.17372 13.9641 10.5019 13.1964C11.83 12.4286 12.8137 11.1812 13.2506 9.7106C13.6875 8.24 13.5445 6.65792 12.8509 5.28951C12.1574 3.92109 10.9661 2.87031 9.52178 2.35311C8.07747 1.83592 6.48992 1.8916 5.0854 2.50873C3.68088 3.12586 2.5661 4.25754 1.97018 5.67119C1.37426 7.08483 1.34247 8.67305 1.88134 10.1094C2.42021 11.5458 3.4888 12.7212 4.8675 13.394V13.3932ZM7.5 15.5C3.35775 15.5 0 12.1423 0 8C0 3.85775 3.35775 0.5 7.5 0.5C11.6423 0.5 15 3.85775 15 8C15 12.1423 11.6423 15.5 7.5 15.5Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="footer-all-title col-md-4 col-sm-6 col-xs-12">
                  <div className="footer-title">Company</div>
                  <div className="footer_category">
                    <li>
                      <Link to="/About">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>About Darkninja</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>Top Services</span>
                      </Link>
                    </li>
                    {/* <li>
                    <Link to="/PrivacyPolice">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={11}
                        height={13}
                        viewBox="0 0 11 13"
                        fill="none"
                      >
                        <path
                          opacity="0.35"
                          d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                          fill="#E0DEDE"
                        />
                      </svg>{" "}
                      <span>Privacy Policy</span>
                    </Link>
                  </li> */}
                    <li>
                      <Link to="/Our-Works">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>Our Work</span>
                      </Link>
                    </li>
                  </div>
                </div>
                <div className="footer-all-title col-md-4 col-sm-6 col-xs-12">
                  <div className="footer-title">Services</div>
                  <div className="footer_category">
                    <li>
                      <Link to="/Services/Graphic-Design">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>Graphics Designing </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/UI/UX-Design">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>UI/UX Designing </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/FrontEnd-Dev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>Front-end Design &amp; Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/BackEnd-Dev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>
                          Back-end Development &amp; Database Management{" "}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/Software-Dev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>Software Design &amp; Development</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Services/Game-Dev">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={11}
                          height={13}
                          viewBox="0 0 11 13"
                          fill="none"
                        >
                          <path
                            opacity="0.35"
                            d="M10.0708 5.64255C10.7182 6.03096 10.7182 6.96914 10.0708 7.35754L1.89073 12.2656C1.08617 12.7483 0.119693 11.9572 0.434024 11.0731L1.94089 6.83506C2.01793 6.61836 2.01793 6.38173 1.94088 6.16504L0.434024 1.92699C0.119694 1.04294 1.08617 0.251752 1.89073 0.734489L10.0708 5.64255Z"
                            fill="#E0DEDE"
                          />
                        </svg>{" "}
                        <span>Game Management</span>
                      </Link>
                    </li>
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
    </div>
  );
}
