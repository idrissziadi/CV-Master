import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const EducationForm = ({ onDataChange }) => {
  const [education, setEducation] = useState([{ degree: '', institution: '', year: '' }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = education.map((edu, i) => (i === index ? { ...edu, [name]: value } : edu));
    setEducation(newEducation);
    onDataChange({ education: newEducation });
  };

  const addEducation = () => {
    setEducation([...education, { degree: '', institution: '', year: '' }]);
  };

  return (
    <Box>
      <Typography variant="h6">Éducation</Typography>
      {education.map((edu, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Diplôme"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Institution"
            name="institution"
            value={edu.institution}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Année"
            name="year"
            value={edu.year}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={addEducation}>
        Ajouter une Éducation
      </Button>
    </Box>
  );
};

export default EducationForm;
