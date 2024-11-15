import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Send the contact data to the backend
    try {
      const response = await fetch('http://localhost:5001/api/contacts', {  // Change URL if your backend is on a different port or server
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),  // Send the contact data as JSON
      });
  
      if (!response.ok) {
        throw new Error('Failed to add contact');
      }
  
      const newContact = await response.json();  // Get the newly added contact from the response
      addContact(newContact);  // Update the contacts list in the parent component
      setContact({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: '',
      });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };
  

  return (
    <Box sx={{ padding: 2, width: '400px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Add New Contact
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              name="firstName"
              value={contact.firstName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              name="lastName"
              value={contact.lastName}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              name="phoneNumber"
              value={contact.phoneNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company"
              variant="outlined"
              fullWidth
              name="company"
              value={contact.company}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Job Title"
              variant="outlined"
              fullWidth
              name="jobTitle"
              value={contact.jobTitle}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Contact
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
//contactform