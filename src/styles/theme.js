import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  baseColor: '#ede8dc',
  mainColor: '#f37a8e',
  modal: '#ede8dc',
  modalBtn: '#f37a8e',
  modalBtnText: '#ede8dc',
};

export const darkTheme = {
  baseColor: '#1c2128',
  mainColor: '#9da7b2',
  modal: '#9da7b2',
  modalBtn: '#1c2128',
  modalBtnText: '#9da7b2',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.baseColor};
  }
`;
