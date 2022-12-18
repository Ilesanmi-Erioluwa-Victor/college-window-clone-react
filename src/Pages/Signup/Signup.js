import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { DropdownDate } from "react-dropdown-date";


const Signup = () => {
  const naviagte = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [img, setImg] = useState("");
  
  return (
    <div>

    </div>
  );
};

export default Signup;
