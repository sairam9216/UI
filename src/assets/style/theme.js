import { createTheme } from '@mui/material';
const font = "'Poppins', sans-serif";

const lightTheme = createTheme({
  typography: {
    fontFamily: font
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0E4394',
      textColor: '#1F2430',
      background: '#0E4394',
      mainBg: '#0E4394',
      gradient: 'rgba(14, 67, 148, 0.25)',
      borderPrimary: '#c2cbf1'
    },
    secondary: {
      main: '#707070',
      background: '#0D5C06',
      gradient: '#d1ddd0',
      gradient2: '#e9d5cf',
      borderSecondary: '#aac3a8'
    },
    Tertiary: {
      colorTertiary: '#AA2300',
      borderTertiary: '#dcb1a6'
    },
    common: {
      themeBackground: '#ffffff',
      themeBackgroundLight: '#F4F6FA',
      tableHeadingBackground: '#E8ECF4',
      backgroundLight: '#dbe3ef',
      backgroundLight2: '#F4F6FA',
      backgroundCard: '#f7f8fc',
      backgroundWhite: '#ffffff',
      headerBgColor: '#ffffff',
      themeDark: '#000',
      themeFontColor: '#323232',
      secondaryBtnColor: '#DFDFDF',
      themeHighLightColor: '#323232',
      linkColorExtra: '#007CFF',
      linkColor: '#0E4394',
      borderColor: '#D0D5DD',
      borderDark: '#98A2B3',
      pageTopSection: '#eaeaea',
      fieldBackground: '#F3F5F9',
      textWhite: '#ffffff',
      themeColorFourth: '#AB5DF9',
      cardBackground: '#DFE6EF',
      cardBackground2: '#E8ECF4',
      iconBg: '#F4EBFF',
      landingBg: '#F9FAFB',
      footerBg: '#1D2939',
      footerBg2: '#101828',
      footerText: '#EAECF0',
      footerMenu: '#667085',
      externalDisableBg: '#abb2be',
      backgroundExtra: '#18468F',
      cardCorner: '#C8D0E0',
      textGray: '#51596C',
      textOrange: '#ED4B4B'
    },
    action: {
      hover: '#fff'
    }
  },
  error: '#d32f2f',
  headerShadow: '0px 5px 5px rgba(0, 0, 0, 0.02)',
  cardShadow: '0px 10px 10px rgba(0, 0, 0, 0.15)'
});

const darkTheme = createTheme({
  typography: {
    fontFamily: font
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#19AB64',
      textColor: '#1F2430',
      background: '#19AB64',
      mainBg: '#0E4394',
      gradient: 'rgba(25, 171, 100, 0.25)'
    },
    secondary: {
      main: '#707070',
      background: '#0D5C06',
      secondaryText: '#0D5C06',
      gradient: '#d1ddd0',
      gradient2: '#e9d5cf'
    },
    Tertiary: {
      colorTertiary: '#AA2300',
      borderTertiary: '#dcb1a6'
    },
    common: {
      themeBackground: '#F4F4F4',
      themeBackgroundLight: '#F4F6FA',
      backgroundLight: '#dbe3ef',
      backgroundLight2: '#F4F6FA',
      tableHeadingBackground: '#E8ECF4',
      backgroundWhite: '#ffffff',
      backgroundCard: '#f7f8fc',
      headerBgColor: '#ffffff',
      linkColor: '#19AB64',
      themeDark: '#000',
      themeFontColor: '#323232',
      secondaryBtnColor: '#E2EFE8',
      themeHighLightColor: '#ffffff',
      colorTertiary: '#AA2300',
      fieldBackground: '#F3F5F9',
      borderColor: '#D0D5DD',
      textWhite: '#ffffff',
      landingBg: '#F9FAFB',
      cardBackground: '#DFE6EF',
      iconBg: 'rgba(25, 171, 100, 0.25)',
      footerBg: '#1D2939',
      footerBg2: '#101828',
      footerText: '#EAECF0',
      footerMenu: '#667085',
      cardCorner: '#C8D0E0',
      textOrange: '#ED4B4B'
    },
    action: {
      hover: '#fff'
    }
  },
  error: '#d32f2f',
  headerShadow: '0px 5px 5px rgba(0, 0, 0, 0.02)',
  cardShadow: '0px 10px 10px rgba(0, 0, 0, 0.15)'
});
export { lightTheme, darkTheme };
