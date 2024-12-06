// src/pages/Register.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Register.css';  // Make sure the path is correct

const Register = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    applicationRefNo: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Registration successful');
    } else {
      setError(result.message || 'Something went wrong');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h5">Student Registration</Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            margin="normal"
            label="Student ID / Reg. Number"
            name="studentId"
            value={formData.studentId}
            onChange={handleInputChange}
            helperText="Digits and letters in your Student ID. Use 0 (Zero), not the letter O, and I, not the digit 1."
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Application Ref. No"
            name="applicationRefNo"
            value={formData.applicationRefNo}
            onChange={handleInputChange}
            helperText="Ref No. or Index No / Exam Year e.g., 01234567001/2015"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            helperText="Use either your National ID / Passport No. or Mobile No. (without spaces)"
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Register
          </Button>
          <Link to="/login" style={{ textDecoration: 'none', textAlign: 'center', display: 'block', marginTop: '10px' }}>
            Already have an account? Login here
          </Link>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
