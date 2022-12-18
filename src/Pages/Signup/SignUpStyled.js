import styled from "styled-components";
import { green, grey, TypeScale } from "../../styled-components";

export const Main = styled.main`
  height : 100vh;
  display : flex;
  /* align-items : center;
  justify-content : center; */
  background-color :${grey[1200]};



  .signup__form {
    width : 50%;
  }

  .signup__intro {
    background-color : ${green[100]}
    height : inherit;
    width : 50%;
    position : relative;

    display: flex;
    flex-direction : column;
    justify-content : center;
    padding : 5rem 3rem 3rem 4rem;
  }


  .signup__intro--writeups {
    text-align: center;

    display : flex;
    flex-direction : column;
    justify-content : center;
    row-gap : 1rem;

    .absolute {
        position : absolute;
        display : block;
    }

    .first {
        top : 4rem;
        left : 2rem;
    }

    .second {
        bottom: 2rem;
        right : 2rem
    }

    h2 {
       font-weight: 700;
       font-size:${TypeScale.headerl} ;
       letter-spacing: 0.04em;
       color:${grey[1200]};
    }

    p {
        font-weight: 400;
        font-size:${TypeScale.paragraph} ;
        letter-spacing: 0.03em;
        color:${grey[1200]};
        margin-bottom : 0.4rem;

        span { display : block;}
    }
  }

`;
