import { createGlobalStyle } from "styled-components";
import introBackgroundImg from '../assets/intro-background.png'
import { rgba } from "polished";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body{
        color: ${({ theme }) => theme.colors["base-text"]};
        -webkit-font-smoothing: antialiased;
         @media(max-width: 1200px){
            margin: 1rem;
         }
    }

    body, input, textarea, button {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-weight: 400;
        font-size: ${({theme}) => theme.textSizes["text-regular-m"]}
    }
    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    @media (max-width: 1020px){
        section{
            padding: 0 1.5rem;
        }
    }
    
    input::-webkit-out-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
    -moz-appearance: textfield;
    -webkit-appearance: initial;
    }
    ::-webkit-scrollbar {
        width: 0.4rem;
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors["base-button"]}
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 2rem;
        background: ${({ theme }) => theme.colors["brand-purple"]}
    }
`;