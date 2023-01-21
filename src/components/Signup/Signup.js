
import React from 'react'
import Img from "Images/bg.png"
import Overlap1 from "Images/overlap1.png";
import Overlap2 from "Images/overlap2.png";

const SignupComp = () => {
  return (
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
  )
}

export default SignupComp
