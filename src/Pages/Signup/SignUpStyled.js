import styled from "styled-components";
import { green, grey, TypeScale, red } from "../../Css-Styled";

export const Main = styled.main`
  display : flex;
  // align-items : center;
  justify-content : center;
  background-color :${grey[1200]};
  overflow : hidden;


  .signup__form {
    width : 50%;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : center;

    padding : 5rem 4rem 3rem 4rem;
    row-gap : 0.6rem;
    

    h2 {
      text-align : center;
        align-self : center;
         width : 90%;
        font-weight: 700;
        font-size: ${TypeScale.headerxl};
        letter-spacing: 0.04em;
        color: ${grey[100]};
        margin : 0 auto;
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

        .media-icon {
            width :1.5rem;
            height : 1.5rem;
            border-radius : 50%; 
        }
    }

    h3 {
        align-self : center;

        font-weight: 400;
        font-size: ${TypeScale.paragraph};     
        text-align: center;
        color: ${grey[100]};
        margin-bottom : 1rem;
    }

    .form{
      align-self : center;
      width : 100%;
      row-gap : 0.5rem;

      fieldset {
      
       row-gap : 0.3rem;

       .styled {
        border : 1px solid grey;
        padding : 0.7rem 1.2rem;
        border-radius : 0.2rem;
        width : 100%;
       }
      }

      .signup {
      border-radius : 0.2rem;
       padding: .7rem;
      font-weight: 700;
      width: 97%;
      margin : auto;
      font-size: ${TypeScale.paragraph};
      color: ${grey[1200]};
     background : ${red[100]};
     font-family : Arial, sans-serif;

     &:hover {
      background : black;
      color : white;
     }
      }
    }
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
       font-size:${TypeScale.headerxl} ;
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

`;
