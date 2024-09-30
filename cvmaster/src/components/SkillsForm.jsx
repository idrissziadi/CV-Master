import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const SkillsForm = ({ onDataChange }) => {
  const [skills, setSkills] = useState([{ skill: '', level: '' }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = skills.map((sk, i) => (i === index ? { ...sk, [name]: value } : sk));
    setSkills(newSkills);
    onDataChange({ skills: newSkills });
  };

  const addSkill = () => {
    setSkills([...skills, { skill: '', level: '' }]);
  };

  return (
    <Box>
      <Typography variant="h6">Compétences</Typography>
      {skills.map((sk, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Compétence"
            name="skill"
            value={sk.skill}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Niveau"
            name="level"
            value={sk.level}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={addSkill}>
        Ajouter une Compétence
      </Button>
    </Box>
  );
};

export default SkillsForm;
