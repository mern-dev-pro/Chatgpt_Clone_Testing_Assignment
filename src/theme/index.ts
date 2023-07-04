import { extendTheme } from '@chakra-ui/react';

export const colors = {
  primary: {
    50: '#DCECE4',
    100: '#CFE5D9',
    200: '#B5D7C4',
    300: '#9AC9AF',
    400: '#80BA9A',
    500: '#65AC85',
    600: '#4C8D69',
    700: '#38684E',
    800: '#254433',
    900: '#112018',
  },
  secondary: {
    50: '#EFF4F1',
    100: '#E3ECE7',
    200: '#CBDCD2',
    300: '#B3CBBD',
    400: '#9ABBA8',
    500: '#82AA93',
    600: '#639176',
    700: '#4C705B',
    800: '#354E40',
    900: '#1F2D25',
  },
  third: {
    50: '#C8D3C4',
    100: '#BDCAB9',
    200: '#A7B9A2',
    300: '#92A78A',
    400: '#7C9673',
    500: '#688060',
    600: '#4E6048',
    700: '#344030',
    800: '#1A2018',
    900: '#000000',
  },
  success: {
    50: '#CAE8D0',
    100: '#BCE2C3',
    200: '#9FD6AA',
    300: '#83CA91',
    400: '#66BE77',
    500: '#4BB05F',
    600: '#3A894A',
    700: '#296135',
    800: '#193A1F',
    900: '#08130A',
  },
  warning: {
    50: '#F1E3B7',
    100: '#EEDCA6',
    200: '#E7CE83',
    300: '#E0C161',
    400: '#DAB43F',
    500: '#C9A127',
    600: '#9A7B1E',
    700: '#6B5615',
    800: '#3C300C',
    900: '#0D0A03',
  },
  danger: {
    50: '#FDE4E2',
    100: '#FCD2CF',
    200: '#FAAFA9',
    300: '#F88B82',
    400: '#F5675C',
    500: '#F34335',
    600: '#E21D0D',
    700: '#AD160A',
    800: '#791007',
    900: '#440904',
  },
  info: {
    50: '#43B287',
    100: '#3EA37B',
    200: '#338665',
    300: '#27684F',
    400: '#1C4B38',
    500: '#112D22',
    600: '#020403',
    700: '#000000',
    800: '#000000',
    900: '#000000',
  },
  dark: {
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#FFFFFF',
    300: '#FFFFFF',
    400: '#FFFFFF',
    500: '#FAFAFA',
    600: '#DEDEDE',
    700: '#C2C2C2',
    800: '#A6A6A6',
    900: '#8A8A8A',
  },
};

export const theme = extendTheme({
  colors: colors,
  fonts: { body: 'Cabin' },
  config: { initialColorMode: 'light', useSystemColorMode: false },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
});