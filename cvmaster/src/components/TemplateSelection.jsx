// components/TemplateSelection.js
import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import templates from '../data/templates';

const TemplateSelection = ({ onSelectTemplate }) => {
  return (
    <Grid container spacing={2}>
      {templates.map((template) => (
        <Grid item xs={12} sm={6} md={4} key={template.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={template.imageUrl}
              alt={template.name}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {template.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {template.description}
              </Typography>
              <Button
                size="small"
                color="primary"
                onClick={() => onSelectTemplate(template)}
              >
                Sélectionner
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TemplateSelection;
