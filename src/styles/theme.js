import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  baseColor: '#ede8dc',
  mainColor: '#f37a8e',
  modal: '#ede8dc',
  modalBtn: '#f37a8e',
  modalBtnText: '#ede8dc',
  menu: '#ede8dc',
  dropdown: '#f37a8e',
  dropdownFont: '#ede8dc',
  dropdownHover: '#ede8dc',
  dropdownFontHover: '#f37a8e',
};

export const darkTheme = {
  baseColor: '#1c2128',
  mainColor: '#9da7b2',
  modal: '#9da7b2',
  modalBtn: '#1c2128',
  modalBtnText: '#9da7b2',
  menu: '#9da7b2',
  dropdown: '#1c2128',
  dropdownFont: '#9da7b2',
  dropdownHover: '#9da7b2',
  dropdownFontHover: '#1c2128',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.baseColor};
  }
`;
