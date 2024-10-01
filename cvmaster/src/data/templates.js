// data/templates.js
import { createTheme } from '@mui/material/styles';

const templates = [
  {
    id: 1,
    name: "Classic Elegance",
    description: "A timeless design with a focus on simplicity, perfect for traditional job applications.",
    imageUrl: "https://example.com/classic-elegance.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#2196f3',
        },
        secondary: {
          main: '#ff4081',
        },
        background: {
          default: '#ffffff',
          paper: '#f5f5f5',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
      },
      typography: {
        fontFamily: 'Segoe UI, sans-serif',
        h4: {
          fontWeight: '600',
        },
        body1: {
          fontSize: '16px',
        },
      },
      shape: {
        borderRadius: 8,
      },
    }),
  },
  {
    id: 2,
    name: "Modern Professional",
    description: "A clean and modern template with ample whitespace, suitable for various industries.",
    imageUrl: "https://example.com/modern-professional.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#4caf50',
        },
        secondary: {
          main: '#ff9800',
        },
        background: {
          default: '#ffffff',
          paper: '#f5f5f5',
        },
        text: {
          primary: '#000000',
          secondary: '#666666',
        },
      },
      typography: {
        fontFamily: 'Inter, sans-serif',
        h4: {
          fontWeight: '700',
        },
        body1: {
          fontSize: '15px',
        },
      },
      shape: {
        borderRadius: 10,
      },
    }),
  },
  {
    id: 3,
    name: "Creative Designer",
    description: "A vibrant and eye-catching design, ideal for creative professionals.",
    imageUrl: "https://example.com/creative-designer.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#e91e63',
        },
        secondary: {
          main: '#3f51b5',
        },
        background: {
          default: '#ffffff',
          paper: '#fafafa',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
      },
      typography: {
        fontFamily: 'Montserrat, sans-serif',
        h4: {
          fontWeight: '700',
        },
        body1: {
          fontSize: '16px',
        },
      },
      shape: {
        borderRadius: 12,
      },
    }),
  },
  {
    id: 4,
    name: "Minimalist Approach",
    description: "A sleek and minimalist design that emphasizes content over clutter.",
    imageUrl: "https://example.com/minimalist-approach.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#2196f3',
        },
        secondary: {
          main: '#ff5722',
        },
        background: {
          default: '#ffffff',
          paper: '#f0f0f0',
        },
        text: {
          primary: '#333333',
          secondary: '#555555',
        },
      },
      typography: {
        fontFamily: 'Lora, serif',
        h4: {
          fontWeight: '600',
        },
        body1: {
          fontSize: '17px',
        },
      },
      shape: {
        borderRadius: 4,
      },
    }),
  },
  {
    id: 5,
    name: "Bold and Beautiful",
    description: "A striking design that combines bold typography with strong visuals.",
    imageUrl: "https://example.com/bold-and-beautiful.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#ff4081',
        },
        secondary: {
          main: '#3f51b5',
        },
        background: {
          default: '#ffffff',
          paper: '#eeeeee',
        },
        text: {
          primary: '#000000',
          secondary: '#757575',
        },
      },
      typography: {
        fontFamily: 'Oswald, sans-serif',
        h4: {
          fontWeight: '700',
        },
        body1: {
          fontSize: '18px',
        },
      },
      shape: {
        borderRadius: 8,
      },
    }),
  },
  {
    id: 6,
    name: "Sophisticated Style",
    description: "An elegant and refined template suitable for high-level professional positions.",
    imageUrl: "https://example.com/sophisticated-style.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#673ab7',
        },
        secondary: {
          main: '#ffeb3b',
        },
        background: {
          default: '#ffffff',
          paper: '#f9f9f9',
        },
        text: {
          primary: '#333333',
          secondary: '#777777',
        },
      },
      typography: {
        fontFamily: 'Playfair Display, serif',
        h4: {
          fontWeight: '600',
        },
        body1: {
          fontSize: '16px',
        },
      },
      shape: {
        borderRadius: 10,
      },
    }),
  },
  {
    id: 7,
    name: "Tech Savvy",
    description: "A contemporary design with a techy feel, perfect for the IT sector.",
    imageUrl: "https://example.com/tech-savvy.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#00bcd4',
        },
        secondary: {
          main: '#ff5722',
        },
        background: {
          default: '#ffffff',
          paper: '#f2f2f2',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
      },
      typography: {
        fontFamily: 'Segoe UI, sans-serif',
        h4: {
          fontWeight: 'bold',
        },
        body1: {
          fontSize: '15px',
        },
      },
      shape: {
        borderRadius: 8,
      },
    }),
  },
  {
    id: 8,
    name: "Simple yet Elegant",
    description: "A straightforward design that conveys professionalism without distractions.",
    imageUrl: "https://example.com/simple-yet-elegant.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#9c27b0',
        },
        secondary: {
          main: '#ffc107',
        },
        background: {
          default: '#ffffff',
          paper: '#f9f9f9',
        },
        text: {
          primary: '#000000',
          secondary: '#555555',
        },
      },
      typography: {
        fontFamily: 'Inter, sans-serif',
        h4: {
          fontWeight: '600',
        },
        body1: {
          fontSize: '16px',
        },
      },
      shape: {
        borderRadius: 10,
      },
    }),
  },
  {
    id: 9,
    name: "Fresh Start",
    description: "A fresh and innovative design that stands out with its unique layout.",
    imageUrl: "https://example.com/fresh-start.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#03a9f4',
        },
        secondary: {
          main: '#ff9800',
        },
        background: {
          default: '#ffffff',
          paper: '#f5f5f5',
        },
        text: {
          primary: '#000000',
          secondary: '#757575',
        },
      },
      typography: {
        fontFamily: 'Quicksand, sans-serif',
        h4: {
          fontWeight: '600',
        },
        body1: {
          fontSize: '15px',
        },
      },
      shape: {
        borderRadius: 6,
      },
    }),
  },
  {
    id: 10,
    name: "Traditional Format",
    description: "A classic CV layout that adheres to traditional formats for formal applications.",
    imageUrl: "https://example.com/traditional-format.png",
    theme: createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#607d8b',
        },
        secondary: {
          main: '#ffb300',
        },
        background: {
          default: '#ffffff',
          paper: '#fafafa',
        },
        text: {
          primary: '#212121',
          secondary: '#757575',
        },
      },
      typography: {
        fontFamily: 'Merriweather, serif',
        h4: {
          fontWeight: '700',
        },
        body1: {
          fontSize: '16px',
        },
      },
      shape: {
        borderRadius: 4,
      },
    }),
  },
];

export default templates;
