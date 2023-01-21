import styled from "styled-components";
import { green, grey, TypeScale, red } from "../../Css-Styled";
import { mediaMaxdevice } from "Utils";

export const FormImage = styled.section`
    height : 100%;
    background-color : ${green[100]};
    height : inherit;
    width : 50%;
    position : relative;
     
    gap : 0;
    justify-content : center;
    padding : 5rem 3rem 3rem 4rem;

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

`