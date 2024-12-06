import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, CircularProgress, Alert, Box, List, ListItem, ListItemText } from '@mui/material';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/students')
      .then(response => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('There was an error fetching the students!');
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Students List
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {students.length === 0 && !loading && !error && (
        <Typography variant="h6" color="textSecondary">
          No students available.
        </Typography>
      )}

      {students.length > 0 && !loading && !error && (
        <List>
          {students.map(student => (
            <ListItem key={student._id} sx={{ borderBottom: '1px solid #ddd', padding: '10px' }}>
              <ListItemText
                primary={student.name}
                secondary={`Email: ${student.email}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default StudentsList;
