import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap');

   ${normalize()}
  
    *, *:before, *:after {
        box-sizing: border-box;
        margin : 0;
        padding : 0;  
    }

    :root {
        font-family: 'Fira Sans', sans-serif;
        font-size : 62.5%;
    }

img {
    max-width: 100%;
    height: auto;
    object-fit : cover;
}

li {
    list-style-type : none;
}


a {
    display : block;
    text-decoration : none;
}

/* font-family: 'Fira Sans', sans-serif; */
/* font-family: 'Signika Negative', sans-serif; */
`;