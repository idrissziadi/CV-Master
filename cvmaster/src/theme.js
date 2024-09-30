import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0f0',
    },
    background: {
      default: '#111111',
      paper: '#212121',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    h1: {
      fontFamily: 'Ubuntu Mono, monospace',
    },
    h2: {
      fontFamily: 'Ubuntu Mono, monospace',
    },
    h3: {
      fontFamily: 'Ubuntu Mono, monospace',
    },
    button: {
      fontWeight: 700,
    },
  },
});
export default theme;