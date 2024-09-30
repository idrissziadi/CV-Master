import React, { useEffect } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  IconButton,
  Paper,
  InputAdornment,
} from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon, Work as WorkIcon, Business as BusinessIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';

const ExperienceForm = ({ formData, onDataChange, setFormValid }) => {
  const { experiences = [{ jobTitle: '', company: '', duration: '' }] } = formData; // Destructure experiences from formData
  const [errors, setErrors] = React.useState({});

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = experiences.map((exp, i) => (i === index ? { ...exp, [name]: value } : exp));
    onDataChange({ experiences: newExperiences }); // Update the parent state
  };

  const addExperience = () => {
    const lastExperience = experiences[experiences.length - 1];
    if (lastExperience && validateExperience(lastExperience)) {
      onDataChange({ experiences: [...experiences, { jobTitle: '', company: '', duration: '' }] }); // Add a new experience
      setErrors({});
    }
  };

  const validateExperience = (experience) => {
    if (!experience) return false; // Early return if experience is undefined
    const newErrors = {};
    if (!experience.jobTitle) newErrors.jobTitle = 'Le poste est requis.';
    if (!experience.company) newErrors.company = 'L\'entreprise est requise.';
    if (!experience.duration) newErrors.duration = 'La durée est requise.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    onDataChange({ experiences: newExperiences }); // Update the parent state
  };

  useEffect(() => {
    const allValid = experiences.every(validateExperience);
    setFormValid(allValid); // Set the overall form validity
  }, [experiences, setFormValid]);

  return (
    <Box sx={{ p: 3, borderRadius: '10px', boxShadow: 3, mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
        Expériences Professionnelles
      </Typography>
      {experiences.map((exp, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Poste"
                name="jobTitle"
                value={exp.jobTitle}
                onChange={(e) => handleChange(index, e)}
                required
                margin="normal"
                error={Boolean(errors.jobTitle)}
                helperText={errors.jobTitle}
                placeholder="Ex. Développeur Web"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <WorkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Entreprise"
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(index, e)}
                required
                margin="normal"
                error={Boolean(errors.company)}
                helperText={errors.company}
                placeholder="Ex. Société XYZ"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BusinessIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Durée"
                name="duration"
                value={exp.duration}
                onChange={(e) => handleChange(index, e)}
                required
                margin="normal"
                error={Boolean(errors.duration)}
                helperText={errors.duration}
                placeholder="Ex. 2019 - 2021"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTimeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton color="secondary" onClick={() => removeExperience(index)}>
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
          onClick={addExperience}
          startIcon={<AddIcon />}
        >
          Ajouter une Expérience
        </Button>
      </Box>
    </Box>
  );
};

export default ExperienceForm;
