import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const PersonalInfoForm = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    profileImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onDataChange({ ...formData, [name]: value });
  };

  return (
    <Box>
      <TextField
        fullWidth
        label="Nom"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Adresse"
        name="address"
        value={formData.address}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Téléphone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="URL de l'image de Profil"
        name="profileImage"
        value={formData.profileImage}
        onChange={handleChange}
        margin="normal"
      />
    </Box>
  );
};

export default PersonalInfoForm;
