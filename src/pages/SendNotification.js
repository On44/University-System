// SendNotification.js
import React, { useState } from 'react';
import { TextField, Button, Typography, MenuItem } from '@mui/material';
import axios from 'axios';

const SendNotification = ({ lecturerId, studentId }) => {
  const [message, setMessage] = useState('');
  const [notificationType, setNotificationType] = useState('announcement');

  const handleSendNotification = async () => {
    const notification = {
      message,
      type: notificationType,
      studentId,
      lecturerId,
    };

    try {
      await axios.post('http://localhost:5000/api/notifications/send', notification);
      alert('Notification sent!');
      setMessage(''); // Clear the input field after sending
    } catch (error) {
      console.error('Error sending notification:', error);
      alert('Failed to send notification');
    }
  };

  return (
    <div>
      <Typography variant="h5">Send Notification</Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        fullWidth
        select
        label="Notification Type"
        value={notificationType}
        onChange={(e) => setNotificationType(e.target.value)}
        sx={{ marginBottom: 2 }}
      >
        <MenuItem value="announcement">Announcement</MenuItem>
        <MenuItem value="reminder">Reminder</MenuItem>
        <MenuItem value="general">General</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleSendNotification}>
        Send Notification
      </Button>
    </div>
  );
};

export default SendNotification;
