import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const LecturerDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lecturer Dashboard
      </Typography>

      <Box sx={{ padding: 3, backgroundColor: '#ffffff' }}>
        <Typography variant="h6" gutterBottom>
          Welcome to your dashboard
        </Typography>

        <Grid container spacing={2}>
          {/* Send Notification Button */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: '100%' }}
              color="primary"
            >
              <Link
                to="/send-notification"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Send Notification
              </Link>
            </Button>
          </Grid>

          {/* View Notifications Button */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: '100%' }}
              color="secondary"
            >
              <Link
                to="/notifications"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                View Notifications
              </Link>
            </Button>
          </Grid>

          {/* Manage Classes Button (Optional) */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: '100%' }}
              color="info"
            >
              <Link
                to="/manage-classes"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Manage Classes
              </Link>
            </Button>
          </Grid>

          {/* Other Dashboard Options */}
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: '100%' }}
              color="warning"
            >
              <Link
                to="/student-reports"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                View Student Reports
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LecturerDashboard;
