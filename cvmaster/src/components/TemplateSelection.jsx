// components/TemplateSelection.js
import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/system';
import templates from '../data/templates';

// Custom styling for the Card to give it more space and larger size
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: theme.shadows[3],
}));

// Custom CardMedia to ensure proper image scaling
const StyledCardMedia = styled(CardMedia)({
  height: '200px', // Increased the height for better display of images
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1, // Ensures content takes the remaining space in the Card
});

const TemplateSelection = ({ onSelectTemplate }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      {templates.map((template) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={template.id}>
          <StyledCard>
            <StyledCardMedia
              component="img"
              image={template.imageUrl}
              alt={template.name}
            />
            <StyledCardContent>
              <Typography variant="h6" component="h2" gutterBottom>
                {template.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {template.description}
              </Typography>
            </StyledCardContent>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={() => onSelectTemplate(template)}
              style={{ margin: '16px' }} // Adds margin to the button for better spacing
            >
              Sélectionner
            </Button>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default TemplateSelection;
