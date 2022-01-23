import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  backgroundColor: 'white',
  fontColor: 'black',
  toggleColor: '#1c2128'
};

export const darkTheme = {
  backgroundColor: '#1c2128',
  fontColor: '#9da7b2',
  toggleColor: 'skyblue'
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({theme}) => theme.backgroundColor};
  }
`;
