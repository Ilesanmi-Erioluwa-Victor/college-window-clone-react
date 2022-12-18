import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { DropdownDate } from "react-dropdown-date";


import Img from "../../Images/bg.png"
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
      <section></section>

      <section>
        <figure>
          <img src={Img} loading="lazy" alt="background" />
        </figure>

        <div>
          <h2>Welcome to college</h2>
          <p>
            Sign up to tutor and get tutor <span>services. </span>
          </p>
        </div>
      </section>
    </Main>
  );
};

export default Signup;
