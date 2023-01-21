import React from "react";
import { Main } from "./SignUpStyled";

import SignupComp from "components/Signup/Signup";
import CreateAccountSignUp from "components/CreateAccountSignup/CreateAccountSignUp";

const Signup = (props) => {
  return (
    <Main>
      
 <CreateAccountSignUp />
    <SignupComp />
    </Main>
  );
};

export default Signup;
