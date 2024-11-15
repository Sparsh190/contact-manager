import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the backend on component load
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/contacts');  // URL for getting all contacts
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        
        const data = await response.json();
        setContacts(data);  // Update state with fetched contacts
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();  // Call fetchContacts on component load
  }, []);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (contact) => {
    console.log('Editing contact:', contact);
  };

  const deleteContact = (contact) => {
    setContacts(contacts.filter((c) => c !== contact));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Manager
      </Typography>
      <ContactForm addContact={addContact} />
      <ContactsTable contacts={contacts} editContact={editContact} deleteContact={deleteContact} />
    </Container>
  );
};

export default App;
