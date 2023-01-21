import React, {useState} from 'react'
import { toast } from "react-toastify";
import { NavLink, Navigate, useNavigate, Link } from "react-router-dom";
import { DropdownDate } from "react-dropdown-date";

import Overlap1 from "Images/overlap1.png";
import { Input } from "components"
import {Image, Google, Facebook, Linkedin} from "Utils/Images"
import { registerUser, Signup_Tutor } from "Auths";
import upload from 'Aws/Upload';
import { Form } from './Styled';


const CreateAccountSignUp = () => {
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

     const HandleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, password, isMemberType } = data;
    try {
      let res;
      if (isMemberType === "student") {
        res = await registerUser({ email, name, password });
      } else {
        res = await Signup_Tutor({
          email: email,
          name: name,
          password: password,
          dateOfBirth: `${date.day} ${date.month} ${date.year}`,
          profileImage: img,
        });
      }
      console.log(res);
      if (res.message === "ok") {
        setData({ name: "", email: "", password: "" });
        toast.success("Account created successfully...", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        setTimeout(() => {
          if (data.isMemberType === "student") {
            naviagte(`/verify-account/student_verification/${email}`);
          } else {
            naviagte(`/verify-account/tutor_verification/${email}`);
          }
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ToggleMember = (type) => {
    setData({ ...data, isMemberType: type });
  };

  const HandleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setData({ ...data, [name]: value });
  };

    const handleUpload = (uploadEvent) => {
    uploadEvent.persist();
    setUploading(true);
    const [file] = uploadEvent.target.files;
    const reader = new FileReader();
    reader.onloadend = async (onLoadEndEvent) => {
      const data = onLoadEndEvent.target.result.split(",")[1];
      const key = file.name;
      const res = await upload(key, data);
      if (res) {
        setImg(res.url);
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>

      <Form className="signup__form">
          <h2 className="form__section--title">
          {data.isMemberType === "student"
            ? "Create account as Student"
            : "Create account as Tutor"}
        </h2>
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

        <form className="form sec-flex" onSubmit={HandleSubmit}>
          {/* FirstName fieldset */}
          <fieldset className="sec-flex">
            <label>First Name </label>
            <Input
              type="text"
              placeholder={"Enter first Name"}
              name={"name"}
              value={data.name}
              onChange={HandleChange}
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
              onChange={HandleChange}
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
              onChange={HandleChange}
              className="styled"
            />
          </fieldset>

          <input type="submit" value="SIGN UP" className="signup" />
        </form>
        <p className="login-p">Already a member ? <Link to={"/login"}>Login</Link></p>
        
      </Form>
    </>
  )
}

export default CreateAccountSignUp
