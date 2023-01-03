import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { DropdownDate } from "react-dropdown-date";


import Img from "Images/bg.png"
import Overlap1 from "Images/overlap1.png";
import Overlap2 from "Images/overlap2.png";
import { Main } from "./SignUpStyled";
import { Input } from "components"
import {Image, Google, Facebook, Linkedin} from "Utils/Images"

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
        <p>Sign up with</p>

        <ul className="media-link">
          <li>
            <a href="#">
              <Image src={Google} alt={"WAwa"} className="media-icon" />
            </a>
          </li>

          <li>
            <a href="#">
              <Image src={Facebook} alt={"WAwa"} className="media-icon" />
            </a>
          </li>

          <li>
            <a href="#">
              <Image src={Linkedin} alt={"WAwa"} className="media-icon" />
            </a>
          </li>
        </ul>

        <h3>OR</h3>

        <form className="form">
          {/* FirstName fieldset */}
          <fieldset>
            <label>First Name </label>
            <Input
              type="text"
              placeholder={"Enter first Name"}
              name={"firstname"}
              value={data.name}
              onChange={""}
              className="styled"
            />
          </fieldset>

          {/* Email fieldset */}
          <fieldset>
            <label>Email </label>
            <Input
              type="email"
              placeholder={"Enter Email address"}
              name={"email"}
              value={"Eric@gmail.com"}
              onChange={""}
              className="styled"
            />
          </fieldset>

          {/* Password fieldset */}
          <fieldset>
            <label>Password</label>
            <Input
              type="password"
              placeholder={"Enter Password"}
              name={"password"}
              value={"Eric"}
              onChange={""}
              className="styled"
            />
          </fieldset>

          <Input type="submit" value="SIGN UP" className="signup" />
        </form>
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
