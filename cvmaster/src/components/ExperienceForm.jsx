import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ExperienceForm = ({ onDataChange }) => {
  const [experiences, setExperiences] = useState([{ jobTitle: '', company: '', duration: '' }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = experiences.map((exp, i) => (i === index ? { ...exp, [name]: value } : exp));
    setExperiences(newExperiences);
    onDataChange({ experiences: newExperiences });
  };

  const addExperience = () => {
    setExperiences([...experiences, { jobTitle: '', company: '', duration: '' }]);
  };

  return (
    <Box>
      <Typography variant="h6">Expériences Professionnelles</Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Poste"
            name="jobTitle"
            value={exp.jobTitle}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Entreprise"
            name="company"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Durée"
            name="duration"
            value={exp.duration}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={addExperience}>
        Ajouter une Expérience
      </Button>
    </Box>
  );
};

export default ExperienceForm;
