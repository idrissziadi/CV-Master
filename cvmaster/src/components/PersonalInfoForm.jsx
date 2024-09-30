import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, InputAdornment, Avatar, Typography, Grid, Divider } from '@mui/material';
import { AccountCircle, Email, Phone, Home, InsertPhoto } from '@mui/icons-material';

const PersonalInfoForm = ({ formData, onDataChange, setFormValid }) => {
  const [formDataState, setFormDataState] = useState(formData); // State for the form data
  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  useEffect(() => {
    setFormDataState(formData); // Update local state when formData changes
  }, [formData]);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Email invalide';
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone) ? '' : 'Numéro de téléphone invalide';
  };

  const validateForm = () => {
    const emailError = validateEmail(formDataState.email);
    const phoneError = validatePhone(formDataState.phone);
    const isValid = Object.values({ ...errors, email: emailError, phone: phoneError }).every(x => x === '') &&
                    formDataState.name.trim() !== '' &&
                    formDataState.address.trim() !== '';

    setFormValid(isValid);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataState({ ...formDataState, [name]: value });

    // Validation in real-time
    if (name === 'email') {
      const emailError = validateEmail(value);
      setErrors({ ...errors, email: emailError });
    } else if (name === 'phone') {
      const phoneError = validatePhone(value);
      setErrors({ ...errors, phone: phoneError });
    }

    onDataChange({ ...formDataState, [name]: value });
    validateForm(); // Check form validity whenever data changes
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormDataState({ ...formDataState, profileImage: reader.result });
      onDataChange({ ...formDataState, profileImage: reader.result });
      validateForm(); // Validate after image upload
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    validateForm(); // Initial validation
  }, [formDataState]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.values(errors).every(err => err === '') && formDataState.name && formDataState.email && formDataState.phone) {
      // Submit form data
      console.log('Form submitted successfully!', formDataState);
      // You can add additional submission logic here (like API call)
    }
  };

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit}
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

      <Box sx={{ textAlign: 'center', mb: 3 }}>
        {formDataState.profileImage ? (
          <Avatar src={formDataState.profileImage} sx={{ width: 100, height: 100, margin: 'auto' }} />
        ) : (
          <Avatar sx={{ width: 100, height: 100, margin: 'auto' }}>
            <InsertPhoto />
          </Avatar>
        )}
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nom"
            name="name"
            value={formDataState.name}
            onChange={handleChange}
            required
            margin="normal"
            placeholder="Entrez votre nom"
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
            value={formDataState.email}
            onChange={handleChange}
            required
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
            placeholder="Entrez votre email"
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
            value={formDataState.address}
            onChange={handleChange}
            margin="normal"
            placeholder="Entrez votre adresse"
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
            value={formDataState.phone}
            onChange={handleChange}
            margin="normal"
            error={!!errors.phone}
            helperText={errors.phone}
            placeholder="Entrez votre numéro de téléphone"
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
          <Divider sx={{ my: 2 }} />
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
          <Divider sx={{ my: 2 }} />
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" // Set the button type to submit
          sx={{ px: 4, py: 1, fontSize: '16px', borderRadius: '20px' }}
        >
          Sauvegarder
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoForm;
