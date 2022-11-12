import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap');

   ${normalize()}
  
    *, *:before, *:after {
        box-sizing: border-box;
        margin : 0;
        padding : 0;  
    }


img {
    max-width: 100%;
    height: auto;
    object-fit : cover;
}

a {
    display : block;
    text-decoration : none;
}
`;