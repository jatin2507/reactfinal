import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Cursor from "../component/cursor";
import Loader from "../component/Loader";

export default function Admin(props) {
  const [data, setdata] = useState({});
  const nevi = useNavigate();
  console.log(props.route);

 const [loader, setloader] = useState(true);
 
 useEffect(() => {
   setloader(false);
   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
 }, []);
 return (
   <><Cursor/>
     <Loader loader={loader} />
     <div
       style={{
         height: "100vh",
         width: "100vw",
         background: "#121B2E",
         border: "none",
       }}
     >
       <div className="contct_form_wrap col-md-8 m-auto">
         <form>
           <label className="contact_title" htmlFor="fname">
             Username
           </label>
           <input
             type="text"
             id="fname"
             name="firstname"
             placeholder="Enter Your Name"
             onChange={(e) => {
               setdata({ ...data, username: e.target.value });
             }}
           />
           <label className="contact_title" htmlFor="lname">
             Password
           </label>
           <input
             type="text"
             id="lname"
             name="lastname"
             placeholder="enter your password"
             onChange={(e) => {
               setdata({ ...data, password: e.target.value });
             }}
           />

           <button
             type="submit"
             className="contact_det_submit theme_btn"
             onClick={(event) => {
               event.preventDefault();
               props.axios
                 .post("/admin/radheykrishna/login", data)
                 .then((e) => {
                   toast.info(e.data.data);
                   if (e.data.code === 200 && !e.data.error) {
                     nevi("/admin/radheykrishna/" + props.route);
                     toast.success(e.data.data);
                   }
                 })
                 .catch((error) => console.log(error));
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
   </>
 );
}
