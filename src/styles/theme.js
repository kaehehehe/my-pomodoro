import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  backgroundColor: 'white',
  fontColor: 'black',
};

export const darkTheme = {
  backgroundColor: '#1c2128',
  fontColor: '#9da7b2',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.backgroundColor};
  }
`;
