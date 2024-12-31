import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon, Work as WorkIcon } from '@mui/icons-material';

const ProjectsForm = ({ formData, onDataChange, setFormValid }) => {
  const initialProjects = Array.isArray(formData.projects?.projectss)
    ? formData.projects.projectss
    : [{ title: '', description: '' }]; 

  const [projects, setProjects] = useState(initialProjects);
  const [errors, setErrors] = useState(Array(initialProjects.length).fill({ title: '', description: '' }));

  // Handle changes in project fields
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = projects.map((proj, i) => (i === index ? { ...proj, [name]: value } : proj));
    setProjects(newProjects);
    onDataChange({ projects: { projectss: newProjects } });
  };

  // Validate individual project
  const validateProject = (proj, index) => {
    const newErrors = [...errors];
    newErrors[index] = {};
    if (!proj.title) newErrors[index].title = 'Le titre est requis.';
    if (!proj.description) newErrors[index].description = 'La description est requise.';
    setErrors(newErrors);
    return Object.keys(newErrors[index]).length === 0;
  };

  // Add a new project
  const addProject = () => {
    const lastProject = projects[projects.length - 1];
    if (validateProject(lastProject, projects.length - 1)) {
      const newProjects = [...projects, { title: '', description: '' }];
      setProjects(newProjects);
      onDataChange({ projects: { projectss: newProjects } });
      setErrors([...errors, { title: '', description: '' }]);
    }
  };

  // Remove a project
  const removeProject = (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
    onDataChange({ projects: { projectss: newProjects } });
    setErrors(errors.filter((_, i) => i !== index));
  };

  // Effect to validate all projects
  useEffect(() => {
    const allValid = projects.every((proj, index) => validateProject(proj, index));
    setFormValid(allValid);
  }, [projects, setFormValid]);

  return (
    <Box sx={{ p: 3, borderRadius: '10px', boxShadow: 3, mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
        Projets
      </Typography>
      {projects.map((proj, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Titre"
                name="title"
                value={proj.title}
                onChange={(e) => handleChange(index, e)}
                required
                margin="normal"
                error={Boolean(errors[index].title)}
                helperText={errors[index].title || "Entrez le titre du projet."}
                placeholder="Ex: Développement d'une application"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WorkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={proj.description}
                onChange={(e) => handleChange(index, e)}
                required
                margin="normal"
                error={Boolean(errors[index].description)}
                helperText={errors[index].description || "Entrez une description du projet."}
                placeholder="Ex: Application de gestion des tâches"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WorkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton color="secondary" onClick={() => removeProject(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={addProject}
          startIcon={<AddIcon />}
        >
          Ajouter un Projet
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectsForm;
