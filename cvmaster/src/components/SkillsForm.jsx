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
import { Delete as DeleteIcon, Add as AddIcon, Build as BuildIcon, Star as StarIcon } from '@mui/icons-material';

const SkillsForm = ({ formData, onDataChange, setFormValid }) => {
    const { skills = [{ skill: '', level: '' }] } = formData;
    const [errors, setErrors] = useState({});

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newSkills = skills.map((sk, i) => (i === index ? { ...sk, [name]: value } : sk));
        onDataChange({ skills: newSkills });


        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateSkill = (sk) => {
        const newErrors = {};
        if (!sk.skill) newErrors.skill = 'La compétence est requise.';
        if (!sk.level) newErrors.level = 'Le niveau est requis.';
        return newErrors;
    };

    const addSkill = () => {
        const lastSkill = skills[skills.length - 1];
        const validationErrors = validateSkill(lastSkill);
        if (Object.keys(validationErrors).length === 0) {
            onDataChange({ skills: [...skills, { skill: '', level: '' }] });
            setErrors({});
        } else {
            setErrors(validationErrors);
        }
    };

    const removeSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index);
        onDataChange({ skills: newSkills });
    };

    useEffect(() => {
        const allValid = skills.every((sk) => Object.keys(validateSkill(sk)).length === 0);
        setFormValid(allValid);
    }, [skills, setFormValid]);

    return (
        <Box sx={{ p: 3, borderRadius: '10px', boxShadow: 3, mt: 3 }}>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
                Compétences
            </Typography>
            {skills.map((sk, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Compétence"
                                name="skill"
                                value={sk.skill}
                                onChange={(e) => handleChange(index, e)}
                                margin="normal"
                                error={Boolean(errors.skill)}
                                helperText={errors.skill || "Entrez la compétence (ex: JavaScript)."}
                                placeholder="Ex: JavaScript"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BuildIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Niveau"
                                name="level"
                                value={sk.level}
                                onChange={(e) => handleChange(index, e)}
                                margin="normal"
                                error={Boolean(errors.level)}
                                helperText={errors.level || "Entrez le niveau (ex: Avancé)."}
                                placeholder="Ex: Avancé"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StarIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <IconButton color="secondary" onClick={() => removeSkill(index)}>
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
                    onClick={addSkill}
                    startIcon={<AddIcon />}
                >
                    Ajouter une Compétence
                </Button>
            </Box>
        </Box>
    );
};

export default SkillsForm;
