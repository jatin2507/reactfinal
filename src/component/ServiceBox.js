import React, { useState } from "react";
import { Link } from "react-router-dom";
import axioscon from "axios";

import { ToastContainer, toast } from "react-toastify";
//var axios = axioscon.create({ baseURL: "http://localhost:2507" });
var axios = axioscon.create({ baseURL: "http://147.182.178.0:2507" });
export default function ServiceBox() {
  const [output, setoutput] = useState({
    phonenum: "0101010101",
    phonecode: "FEEDBACK",
    serviceType: "FEEDBACK",
  });
  return (
    <div>
      <div className="about_service_box_detail">
        <div className="about_service_title">
          <h2>Services</h2>
          <div className="service_sub_desc">
            <Link to="/Services/Graphic-Design">
              <span>01. Graphic Design</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={13}
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M9.129 5.75L5.106 1.727L6.1665 0.666504L12 6.5L6.1665 12.3335L5.106 11.273L9.129 7.25H0V5.75H9.129Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="service_sub_desc">
            <Link to="/Services/UI/UX-Design">
              <span>02. UI/UX Design</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={13}
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M9.129 5.75L5.106 1.727L6.1665 0.666504L12 6.5L6.1665 12.3335L5.106 11.273L9.129 7.25H0V5.75H9.129Z"
                  fill="white"
                />
              </svg>{" "}
            </Link>
          </div>
          <div className="service_sub_desc">
            <Link to="/Services/FrontEnd-Dev">
              <span>03. Frontend Development</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={13}
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M9.129 5.75L5.106 1.727L6.1665 0.666504L12 6.5L6.1665 12.3335L5.106 11.273L9.129 7.25H0V5.75H9.129Z"
                  fill="white"
                />
              </svg>{" "}
            </Link>
          </div>
          <div className="service_sub_desc">
            <Link to="/Services/BackEnd-Dev">
              <span>04. Backend Development</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={13}
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M9.129 5.75L5.106 1.727L6.1665 0.666504L12 6.5L6.1665 12.3335L5.106 11.273L9.129 7.25H0V5.75H9.129Z"
                  fill="white"
                />
              </svg>{" "}
            </Link>
          </div>
          <div className="service_sub_desc">
            <Link to="/Services/Software-Dev">
              <span>05. Software Development</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={13}
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M9.129 5.75L5.106 1.727L6.1665 0.666504L12 6.5L6.1665 12.3335L5.106 11.273L9.129 7.25H0V5.75H9.129Z"
                  fill="white"
                />
              </svg>{" "}
            </Link>
          </div>
          <div className="service_sub_desc">
            <Link to="/Services/Game-Dev">
              <span>06. Game Development</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={13}
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M9.129 5.75L5.106 1.727L6.1665 0.666504L12 6.5L6.1665 12.3335L5.106 11.273L9.129 7.25H0V5.75H9.129Z"
                  fill="white"
                />
              </svg>{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="about_quote_wrapper">
        <div className="about_quote">
          <h2>Get a quote</h2>
        </div>
        <form type="submit">
          <label className="contact_title" htmlFor="fname">
            Your Name
          </label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setoutput({ ...output, name: e.target.value });
            }}
          />
          <label className="contact_title" htmlFor="Email">
            Email Address
          </label>
          <input
            type="text"
            id="fname"
            name="Email"
            placeholder="Enter Your Email Address"
            onChange={(e) => {
              setoutput({ ...output, email: e.target.value });
            }}
          />
          <label className="contact_title" htmlFor="Comment">
            Message
          </label>
          <textarea
            id="Comment"
            name="Comment"
            placeholder="Enter Your Message"
            defaultValue={""}
            onChange={(e) => {
              setoutput({ ...output, message: e.target.value });
            }}
          />
          <button
            type="submit"
            className="about_det_submit"
            onClick={(evetnt) => {
              evetnt.preventDefault();
              console.log(output);
              axios.post("/entry", output).then((e) => {
                if (e.data.code === 200) {
                  toast("Thanks For Feedback");
                } else {
                  toast.info(e.data.data);
                }
              });
            }}
          >
            <span>Submit Now</span>
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
          </button>
        </form>
      </div>
      <div className="company_profile_wrapper">
        <div className="profile_title">
          <h2>company profile</h2>
        </div>
        <button type="submit" className="profile_det_submit ">
          <Link href="#">
            <span>
              Download PDF{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={18}
                viewBox="0 0 15 18"
                fill="none"
              >
                <path
                  d="M7.5 12.3334H4.16667V5.66675H7.5C8.38406 5.66675 9.2319 6.01794 9.85702 6.64306C10.4821 7.26818 10.8333 8.11603 10.8333 9.00008C10.8333 9.88414 10.4821 10.732 9.85702 11.3571C9.2319 11.9822 8.38406 12.3334 7.5 12.3334ZM5.83333 7.33341V10.6667H7.5C7.94203 10.6667 8.36595 10.4912 8.67851 10.1786C8.99107 9.86603 9.16667 9.44211 9.16667 9.00008C9.16667 8.55805 8.99107 8.13413 8.67851 7.82157C8.36595 7.50901 7.94203 7.33341 7.5 7.33341H5.83333ZM10 2.33341H1.66667V15.6667H13.3333V5.66675H10V2.33341ZM0 1.49341C0 1.03675 0.3725 0.666748 0.8325 0.666748H10.8333L15 4.83341V16.4942C15.0008 16.6037 14.98 16.7122 14.9388 16.8136C14.8976 16.915 14.8369 17.0073 14.7601 17.0852C14.6832 17.1631 14.5918 17.2252 14.491 17.2678C14.3902 17.3103 14.2819 17.3327 14.1725 17.3334H0.8275C0.608648 17.3319 0.399181 17.2443 0.244348 17.0897C0.0895149 16.935 0.00174554 16.7256 0 16.5067V1.49341Z"
                  fill="white"
                />
              </svg>
            </span>
          </Link>
        </button>
        <button
          type="submit"
          className=" profile_det_submit profile_det_submit_word "
        >
          <Link href="#">
            <span>
              Download Word File
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={18}
                viewBox="0 0 15 18"
                fill="none"
              >
                <path
                  d="M7.5 12.3334H4.16667V5.66675H7.5C8.38406 5.66675 9.2319 6.01794 9.85702 6.64306C10.4821 7.26818 10.8333 8.11603 10.8333 9.00008C10.8333 9.88414 10.4821 10.732 9.85702 11.3571C9.2319 11.9822 8.38406 12.3334 7.5 12.3334ZM5.83333 7.33341V10.6667H7.5C7.94203 10.6667 8.36595 10.4912 8.67851 10.1786C8.99107 9.86603 9.16667 9.44211 9.16667 9.00008C9.16667 8.55805 8.99107 8.13413 8.67851 7.82157C8.36595 7.50901 7.94203 7.33341 7.5 7.33341H5.83333ZM10 2.33341H1.66667V15.6667H13.3333V5.66675H10V2.33341ZM0 1.49341C0 1.03675 0.3725 0.666748 0.8325 0.666748H10.8333L15 4.83341V16.4942C15.0008 16.6037 14.98 16.7122 14.9388 16.8136C14.8976 16.915 14.8369 17.0073 14.7601 17.0852C14.6832 17.1631 14.5918 17.2252 14.491 17.2678C14.3902 17.3103 14.2819 17.3327 14.1725 17.3334H0.8275C0.608648 17.3319 0.399181 17.2443 0.244348 17.0897C0.0895149 16.935 0.00174554 16.7256 0 16.5067V1.49341Z"
                  fill="white"
                />
              </svg>
            </span>
          </Link>
        </button>
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
