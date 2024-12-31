import React from 'react';
import { CssBaseline, Container, Paper, ThemeProvider, AppBar, Toolbar, Typography, Box, Link } from '@mui/material';
import StepperComponent from './components/StepperComponent';
import { theme } from './theme';  
import './App.css';
// Header Component
const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Générateur de CV
      </Typography>
    </Toolbar>
  </AppBar>
);

// Footer Component
const Footer = () => (
  <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#212121', textAlign: 'center' }}>
    <Container maxWidth="sm">
      <Typography variant="body1" color="white">
        © 2024 Générateur de CV - Tous droits réservés
      </Typography>
      <Typography variant="body2" color="white">
        <Link href="https://example.com" color="inherit">
          Politique de confidentialité
        </Link> | 
        <Link href="https://example.com" color="inherit" sx={{ ml: 1 }}>
          Conditions d'utilisation
        </Link>
      </Typography>
    </Container>
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />


      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
        className="container"
      >
        {/* Header Section */}
        <Header />

        {/* Main Content */}
        <Container maxWidth="md" sx={{ flexGrow: 1, mt: 4 }}>
          <Paper elevation={3} sx={{ padding: '30px', margin: '20px 0', borderRadius: '15px' }}>
            <StepperComponent />
          </Paper>
        </Container>

        {/* Footer Section */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
