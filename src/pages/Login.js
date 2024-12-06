import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onLoginSuccess }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true while the login request is in progress
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(`Welcome, ${data.student.name}!`);
        localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag in localStorage
        onLoginSuccess(); // Trigger the onLoginSuccess callback passed from the parent

        // Navigate to specific pages based on user role or condition
        if (data.userRole === 'admin') {
          navigate('/adminPage'); // Admin page
        } else if (data.userRole === 'student') {
          navigate('/'); // Home page
        } else if (data.userRole === 'faculty') {
          navigate('/facultyList'); // Faculty list page
        } else {
          // Default fallback if no role matches
          navigate('/');
        }
      } else {
        setMessage(data.message || 'Invalid credentials.');
      }
    } catch (error) {
      setMessage('An error occurred while logging in.');
    } finally {
      setLoading(false); // Reset loading state after the request is completed
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {/* Table with Descriptions */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Field</th>
            <th style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Student ID / Reg. Number</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              Type your Student ID / Reg. Number. The year of registration must be in full, e.g., 01234567001/2010.
            </td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>Password</td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              Use either your National ID / Passport No. or Mobile No. or Telephone No. (Without Spaces) as your initial password.
            </td>
          </tr>
        </tbody>
      </table>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label>Student ID / Reg. Number:</label>
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            style={{ padding: '8px', width: '100%' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '8px', width: '100%' }}
          />
        </div>
        <button type="submit" disabled={loading} style={{ padding: '10px 20px', backgroundColor: '#4F46E5', color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default LoginForm;
