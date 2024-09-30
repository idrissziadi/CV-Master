// data/templates.js
import { createTheme } from '@mui/material/styles';

const templates = [
  {
    id: 1,
    name: "Template A",
    description: "Un modèle simple et élégant, idéal pour les candidatures traditionnelles.",
    imageUrl: "https://example.com/template-a.png",
    theme: createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#ff8f00',
          },
          secondary: {
            main: '#f50057',
          },
          background: {
            default: '#310000',
            paper: '#731010',
          },
        },
        typography: {
          fontFamily: 'Do Hyeon',
        },
        shape: {
          borderRadius: 16,
        },
      }),
  },
  {
    id: 2,
    name: "Template B",
    description: "Un modèle moderne avec des sections colorées et un design dynamique.",
    imageUrl: "https://example.com/template-b.png",
    theme: createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#bd0707',
          },
          secondary: {
            main: '#ffc510',
          },
          background: {
            default: '#4c69f6',
            paper: '#4c94f6',
          },
        },
        typography: {
          body1: {
            fontFamily: 'Roboto',
          },
          fontFamily: 'Bangers',
          caption: {
            fontFamily: 'Do Hyeon',
          },
          overline: {
            fontFamily: 'Do Hyeon',
          },
          body2: {
            fontFamily: 'Roboto',
          },
        },
      }),
  },
  {
    id: 3,
    name: "Template C",
    description: "Un modèle créatif pour les professionnels du design et des arts.",
    imageUrl: "https://example.com/template-c.png",
    theme: createTheme( {
        palette: {
          mode: 'dark',
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#ce93d8',
          },
          background: {
            default: '#121212',
            paper: '#121212',
          },
        },
      }),
  },
];

export default templates;
