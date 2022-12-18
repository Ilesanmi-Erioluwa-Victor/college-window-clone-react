import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { DropdownDate } from "react-dropdown-date";


import Img from "../../Images/bg.png"
import Overlap1 from "../../Images/overlap1.png";
import Overlap2 from "../../Images/overlap2.png";
import { Main } from "./SignUpStyled";

const Signup = () => {
  const naviagte = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [img, setImg] = useState("");

   const [data, setData] = useState({
     name: "",
     email: "",
     password: "",
     isMemberType: "student",
     dateOfBirth: "",
   });

     const [date, setDate] = useState({
       year: "select year",
       month: "select month",
       day: "select day",
     });

  return (
    <Main>
      <section className="signup__form">
        <h2>Create Account</h2>
      </section>

      <section className="signup__intro">
        <figure className="signup__intro--img">
          <img src={Img} loading="lazy" alt="background" />
        </figure>

        <div className="signup__intro--writeups">
          <img
            src={Overlap1}
            loading="lazy"
            alt="background"
            className="absolute first"
          />

          <h2>Welcome to College</h2>
          <p>
            Sign up to tutor and get tutor <span>services. </span>
          </p>

          <img
            src={Overlap2}
            loading="lazy"
            alt="background"
            className="absolute second"
          />
        </div>
      </section>
    </Main>
  );
};

export default Signup;
