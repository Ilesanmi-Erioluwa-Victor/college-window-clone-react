import styled from "styled-components";
import { green, grey, TypeScale, red } from "../../Css-Styled";
import { mediaMaxdevice } from "Utils";

export const Main = styled.main`
  display : flex;
  // align-items : center;
  justify-content : center;
  background-color :${grey[1200]};
  overflow : hidden;
   position: relative;

  .media {
    display : none;
  }

  


  .signup__intro {
    height : 100vh;
    background-color : ${green[100]};
    height : inherit;
    width : 50%;
    position : relative;
     
    gap : 0;
    justify-content : center;
    padding : 5rem 3rem 3rem 4rem;
  }


  .signup__intro--writeups {
    text-align: center;

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
       font-weight: 600;
       font-size: 2.3rem ;
       letter-spacing: 0.04em;
       color:${grey[1200]};
    }

    p {
        font-weight: 200;
        font-size:${TypeScale.paragraph} ;
        font-family : "Tahoma";
        letter-spacing: 0.03em;
        color:${grey[1200]};
        margin-bottom : 0.4rem;

        span { display : block;}
    }
  }

@media ${mediaMaxdevice.tabletL} {

  .signup__form {
    h2 {
         font-size: 2rem ;
    }
  }

  .signup__intro {
    &--writeups {
     h2 {
    font-size: 2rem ;
  }

  p {
    font-size : 1.3rem;
  }
    }
  } 
}

@media (max-width : 890px) {
   background-color : ${green[100]};
  
   .media {
    display: block;
    position: absolute;
   }

   .media-first {
    top: -1rem;
    left : 2rem;
   }

   .media-second {
    bottom: -1rem;
    right : 2rem;
   }
   .signup__form {
    padding-top : 2rem;
    width : 100%;
     color : white;

     h2 {
      color : white;
      font-size : ${TypeScale.headerxxl}
     }

     p, h3 {
      font-size : ${TypeScale.header1};
      color : white;
     }
    
     h3 {
      font-size : 1.3rem;
     }

     .form {
        fieldset {
      gap : 0.8rem;
      label {
        font-size : 1.4rem;
      }
      .styled {
        padding : 1rem;
      }
     }
     .signup {
      padding : 1rem;
     }
     }
     
   }

  .signup__intro {
    display : none;
 
  }
}

@media ${mediaMaxdevice.tabletM} {
   .signup__form {
     padding : 1rem;
     /* h2 {
      font-size : 2rem;
     } */

}
`;
