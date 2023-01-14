import {React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import VerificationInput from "react-verification-input";
import { VerifyWrap } from "./VerifyStyles";


const Verifyaccount = () => {
  const navigate = useNavigate();
  const {email } = useParams();
  const [code, setCode] = useState("");

  console.log(email)

  return <VerifyWrap className="sec-flex">
    <h4>Hello verify your email</h4>
     <VerificationInput
            length={7}
            validChars={[/0-9/]}
            onChange={setCode}
            autoFocus={true}
            classNames={{
              container: "container",
              character: "character",
              characterInactive: "character--inactive",
              characterSelected: "character--selected",
            }}
          />
  </VerifyWrap>;
};

export default Verifyaccount;
