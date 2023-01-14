import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { DropdownDate } from "react-dropdown-date";

import Img from "Images/bg.png"
import Overlap1 from "Images/overlap1.png";
import Overlap2 from "Images/overlap2.png";
import { Main } from "./SignUpStyled";
import { Input } from "components"
import {Image, Google, Facebook, Linkedin} from "Utils/Images"
import { registerUser } from "Auths/Users/users";

const Signup = (props) => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [img, setImg] = useState("");

   const [data, setData] = useState({
     name: "",
     email: "",
     password: "",
    //  isMemberType: "student",
    //  dateOfBirth: "",
   });

    //  const [date, setDate] = useState({
    //    year: "select year",
    //    month: "select month",
    //    day: "select day",
    //  });

     const handleInputChange = (e) => {
      const name =  e.target.name;
      const value = e.target.value;
      setData({...data, [name] : value})
     }

     const handleSubmit =async e => {
      e.preventDefault();
      const { name, email, password } = data;

      if(!name || !email || !password) {
        toast.error("All fields are required", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        return;
      }
       const response=  await registerUser({name, password, email});

       if(response.message === "email exists!") {
          toast.error("Your email already existed on our DB, login with your email", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        return;
       }

        if(response.message === "ok") {
        toast.success("Your account is created, wait few seconds, you will be redirected to your account..", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });

        setTimeout( ()=>{
          // Auto navigate to student_signup
          navigate(`verifyAccount/student_signup/${email}`)
        }, 5000)
       }
        
     }

  return (
    <Main>
       <img
            src={Overlap1}
            loading="lazy"
            alt="background"
            className="media media-first"
          />

           <img
            src={Overlap1}
            loading="lazy"
            alt="background"
            className="media media-second"
          />

      <section className="signup__form">
        <h2>Create Account</h2>
        <p>Sign up with</p>

        <ul className="media-link">
          <li>
            <a href="hhtps://ww.google.com">
              <Image src={Google} alt={"WAwa"} className="media-icon" />
            </a>
          </li>

          <li>
            <a href="hhtps://ww.google.com">
              <Image src={Facebook} alt={"WAwa"} className="media-icon" />
            </a>
          </li>

          <li>
            <a href="hhtps://ww.google.com">
              <Image src={Linkedin} alt={"WAwa"} className="media-icon" />
            </a>
          </li>
        </ul>

        <h3>OR</h3>

        <form className="form sec-flex" onSubmit={handleSubmit}>
          {/* FirstName fieldset */}
          <fieldset className="sec-flex">
            <label>First Name </label>
            <Input
              type="text"
              placeholder={"Enter first Name"}
              name={"name"}
              value={data.name}
              onChange={handleInputChange}
              className="styled"
            />
          </fieldset>

          {/* Email fieldset */}
          <fieldset className="sec-flex">
            <label>Email </label>
            <Input
              type="email"
              placeholder={"Enter Email address"}
              name={"email"}
              value={data.email}
              onChange={handleInputChange}
              className="styled"
            />
          </fieldset>

          {/* Password fieldset */}
          <fieldset className="sec-flex">
            <label>Password</label>
            <Input
              type="password"
              placeholder={"Enter Password"}
              name={"password"}
              value={data.password}
              onChange={handleInputChange}
              className="styled"
            />
          </fieldset>

          <input type="submit" value="SIGN UP" className="signup" />
        </form>
      </section>

      <section className="signup__intro sec-flex">
        <figure className="signup__intro--img">
          <img src={Img} loading="lazy" alt="background" />
        </figure>

        <div className="signup__intro--writeups sec-flex">
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
