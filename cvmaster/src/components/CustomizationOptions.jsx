// components/CustomizationOptions.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const CustomizationOptions = ({ selectedTemplate }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Données soumises :', formData);
    // Ajouter ici la logique pour sauvegarder ou utiliser les données soumises
  };

  return (
    <div style={{ padding: '20px', backgroundColor: selectedTemplate.styles.backgroundColor, color: selectedTemplate.styles.color }}>
      <Typography variant="h4">Personnaliser {selectedTemplate.name}</Typography>
      {selectedTemplate.fields.map((field, index) => {
        if (field.type === 'array') {
          return (
            <TextField
              key={index}
              label={field.label}
              name={field.label}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={3}
            />
          );
        } else {
          return (
            <TextField
              key={index}
              label={field.label}
              name={field.label}
              onChange={handleChange}
              type={field.type}
              required={field.required}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          );
        }
      })}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Soumettre
      </Button>
    </div>
  );
};

export default CustomizationOptions;
