import React, { useState } from 'react';
import { TextField, Button, Box, InputAdornment, Avatar, Typography, Grid } from '@mui/material';
import { AccountCircle, Email, Phone, Home, InsertPhoto } from '@mui/icons-material';

const PersonalInfoForm = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    profileImage: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  // Validation des champs
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Email invalide';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone) ? '' : 'Numéro de téléphone invalide';
  };

  // Gestion des changements
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation en temps réel
    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(value) });
    } else if (name === 'phone') {
      setErrors({ ...errors, phone: validatePhone(value) });
    }

    onDataChange({ ...formData, [name]: value });
  };

  // Gestion du téléchargement d'image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profileImage: reader.result });
      onDataChange({ ...formData, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box 
      sx={{
        p: 3,
        borderRadius: '10px',
        boxShadow: 3,
        maxWidth: '600px',
        margin: 'auto',
        mt: 4
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}>
        Informations Personnelles
      </Typography>

      {/* Avatar pour l'image de profil */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        {formData.profileImage ? (
          <Avatar src={formData.profileImage} sx={{ width: 100, height: 100, margin: 'auto' }} />
        ) : (
          <Avatar sx={{ width: 100, height: 100, margin: 'auto' }}>
            <InsertPhoto />
          </Avatar>
        )}
      </Box>

      {/* Formulaire d'informations */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nom"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            sx={{ borderRadius: 1 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            sx={{ borderRadius: 1 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Adresse"
            name="address"
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Home />
                </InputAdornment>
              ),
            }}
            sx={{ borderRadius: 1 }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Téléphone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            error={!!errors.phone}
            helperText={errors.phone}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
            sx={{ borderRadius: 1 }}
          />
        </Grid>

        <Grid item xs={12}>
        <input
            accept="image/*"
            style={{ display: 'none' }}
            id="profile-image-upload"
            type="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="profile-image-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<InsertPhoto />}
              sx={{ width: '100%', borderRadius: 1 }}
            >
              Choisir une image
            </Button>
          </label>
        </Grid>
      </Grid>

      {/* Bouton d'action */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ px: 4, py: 1, fontSize: '16px', borderRadius: '20px' }}
        >
          Sauvegarder
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;
