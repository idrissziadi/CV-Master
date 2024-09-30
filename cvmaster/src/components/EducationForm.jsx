import React, { useEffect } from 'react';
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
import { Delete as DeleteIcon, Add as AddIcon, School as SchoolIcon } from '@mui/icons-material';

const EducationForm = ({ formData, onDataChange, setFormValid }) => {
  const { education = [{ degree: '', institution: '', year: '' }]} = formData;
  const [errors, setErrors] = React.useState({});

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = education.map((edu, i) => (i === index ? { ...edu, [name]: value } : edu));
    onDataChange({ education: newEducation });
  };

  const validateEducation = (edu) => {
    const newErrors = {};
    if (!edu.degree) newErrors.degree = 'Le diplôme est requis.';
    if (!edu.institution) newErrors.institution = 'L\'institution est requise.';
    if (!edu.year) newErrors.year = 'L\'année est requise.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addEducation = () => {
    const lastEducation = education[education.length - 1];
    if (validateEducation(lastEducation)) {
      onDataChange({ education: [...education, { degree: '', institution: '', year: '' }] });
      setErrors({});
    }
  };

  const removeEducation = (index) => {
    const newEducation = education.filter((_, i) => i !== index);
    onDataChange({ education: newEducation });
  };

  useEffect(() => {
    const allValid = education.every(validateEducation);
    setFormValid(allValid);
  }, [education, setFormValid]);

  return (
    <Box sx={{ p: 3, borderRadius: '10px', boxShadow: 3, mt: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
        Éducation
      </Typography>
      {education.map((edu, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Diplôme"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(index, e)}
                required
                margin="normal"
                error={Boolean(errors.degree)}
                helperText={errors.degree || "Entrez le diplôme obtenu (ex: Baccalauréat)."}
                placeholder="Ex: Licence en Informatique"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Institution"
                name="institution"
                value={edu.institution}
                onChange={(e) => handleChange(index, e)}
                required
                margin="normal"
                error={Boolean(errors.institution)}
                helperText={errors.institution || "Entrez le nom de l'institution (ex: Université X)."}
                placeholder="Ex: Université de Paris"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Année"
                name="year"
                value={edu.year}
                onChange={(e) => handleChange(index, e)}
                required
                margin="normal"
                error={Boolean(errors.year)}
                helperText={errors.year || "Entrez l'année d'obtention (ex: 2022)."}
                placeholder="Ex: 2022"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton color="secondary" onClick={() => removeEducation(index)}>
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
          onClick={addEducation}
          startIcon={<AddIcon />}
        >
          Ajouter une Éducation
        </Button>
      </Box>
    </Box>
  );
};

export default EducationForm;
