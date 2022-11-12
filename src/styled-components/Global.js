import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@1&display=swap');
   ${normalize()}
  
    *, *:before, *:after {
        box-sizing: inherit;
      
    }


img {
    max-width: 100%;
    height: auto;
}
`;