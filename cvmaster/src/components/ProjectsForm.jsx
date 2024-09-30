import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProjectsForm = ({ onDataChange }) => {
  const [projects, setProjects] = useState([{ title: '', description: '' }]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = projects.map((proj, i) => (i === index ? { ...proj, [name]: value } : proj));
    setProjects(newProjects);
    onDataChange({ projects: newProjects });
  };

  const addProject = () => {
    setProjects([...projects, { title: '', description: '' }]);
  };

  return (
    <Box>
      <Typography variant="h6">Projets</Typography>
      {projects.map((proj, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Titre"
            name="title"
            value={proj.title}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={proj.description}
            onChange={(e) => handleChange(index, e)}
            required
            margin="normal"
          />
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={addProject}>
        Ajouter un Projet
      </Button>
    </Box>
  );
};

export default ProjectsForm;
