import styled from "styled-components";

export const VerifyWrap = styled.div`
 height : 100vh;
 gap : 1rem;
 justify-content : center;
 align-items : center;

  P {
    font-size : 1.5rem;
  }

 .Btn_Div .button{
    padding : 1rem;
    cursor : pointer;
    outline : none;
    border : none;
    background : red;
    color : white;
    border-radius : 5px;
    transition : all .3s ease-in-out;
    &:hover {
        background : black;
    }
 }

`