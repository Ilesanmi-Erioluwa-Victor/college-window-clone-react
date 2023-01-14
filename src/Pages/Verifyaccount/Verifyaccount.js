import {React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import VerificationInput from "react-verification-input";


const Verifyaccount = () => {
  const navigate = useNavigate();
  const {email } = useParams();
  console.log(email)
  
  return <h1>Hello from Verifyaccount</h1>;
};

export default Verifyaccount;
