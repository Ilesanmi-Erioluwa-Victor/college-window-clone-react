import { React, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import VerificationInput from "react-verification-input";
import { VerifyWrap } from "./VerifyStyles";
import { verifyCode } from "Auths/General/General";

const Verifyaccount = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const [code, setCode] = useState("");

  const HandleSubmit = async () => {
    try {
      const Response = await verifyCode(code, email);
      if (Response.message === "OK") {
        toast.success("Account verified successfully", {
          toastId: "Verify-success-id",
        });
        navigate("/login");
      } else if ((Response.message = "code not found")) {
        toast.error(Response.message, {
          toastId: "Verify-success-id",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VerifyWrap className="sec-flex">
      <h1>Hello verify your email</h1>
      <p> Please, kindly verify your account with the code sent to you </p>
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

      <div className="Btn_Div">
        <button className="button" onClick={() => HandleSubmit()}>
          Verify Now
        </button>
      </div>
    </VerifyWrap>
  );
};

export default Verifyaccount;
