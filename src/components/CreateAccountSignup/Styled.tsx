import styled from "styled-components"
import { green, grey, TypeScale, red } from "../../Css-Styled";
import { mediaMaxdevice } from "Utils";

export const Form =  styled.section `
    width : 50%;
    display : flex;
    flex-direction : column;
    justify-content : center;

    padding : 5rem 4rem 3rem 4rem;
    row-gap : 0.6rem;
    

    h3 {
      text-align : center;
        align-self : center;
         width : 90%;
        font-weight: 700;
        font-size: ${TypeScale.headerl};
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

    .or {
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

    .login-p {
      align-self : flex-end;
      font-size : 1.1rem;
    }


`