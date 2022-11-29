import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --nav-normal-height: 3.75rem;
    --nav-mobile-height: 3.125rem;
    --announcement-normal-height: 2rem;
    --announcement-mobile-height: 1.375rem;
    --animation: 0.4s ease;
  }

  * {
    font-family: 'Urbanist', sans-serif;

    margin: 0;
    padding: 0;

    box-sizing: border-box;
    scroll-behavior: smooth;
    
    border: none;
    outline: none;
    list-style: none;

    text-decoration: none;
    text-transform: capitalize;
  }

  html {
    @media screen and (max-width: 768px) { font-size: 14px}
    @media screen and (max-width: 425px) { font-size: 13px}
    @media screen and (max-width: 320px) { font-size: 12px}
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  button, select {
    cursor: pointer;
  }

`;
