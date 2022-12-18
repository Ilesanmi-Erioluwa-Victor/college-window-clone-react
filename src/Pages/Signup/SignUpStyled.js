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

    display : flex;
    flex-direction : column;
    /* justify-content : center; */

    padding : 5rem 3rem 3rem 4rem;
    row-gap : 1rem;

    h2 {
        font-weight: 700;
        font-size: ${TypeScale.headerl};
        letter-spacing: 0.04em;
        color: ${grey[100]};
    }

    p {
        align-self : center;
        font-weight: 400;
        font-size: ${TypeScale.paragraph};
        color: ${grey[100]};
    }

    .media-link {
        align-self : center;

        display : flex;
        align-items : center;
        justify-content : center;
        gap : 1rem;
    }

    h3 {
        align-self : center;

        font-weight: 400;
        font-size: ${TypeScale.paragraph};     
        text-align: center;
        color: ${grey[100]};
    }
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
        top : 2rem;
        left : 2rem;
    }

    .second {
        bottom: 1rem;
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
