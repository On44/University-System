import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from './Login';  // Import the Login component
import OfferForm from './OfferForm';  // Import the OfferForm component
import './AuthPage.css';  // Import CSS for styling

function AuthPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);  // State to track which form to show (Login or Offer)
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page the user was trying to access before login (if any)
  const redirectTo = location.state?.from || '/dashboard';  // Default to dashboard if no previous page

  useEffect(() => {
    // Check if the user is already authenticated (e.g., by checking localStorage)
    if (localStorage.getItem('isAuthenticated')) {
      navigate(redirectTo, { replace: true });  // Redirect to the intended page or dashboard
    }
  }, [navigate, redirectTo]);

  // Handle login success by saving authentication status and redirecting the user
  const handleLoginSuccess = () => {
    localStorage.setItem('isAuthenticated', 'true');  // Set authentication status in localStorage
    navigate(redirectTo, { replace: true });  // Redirect user to the page they intended to access
  };

  return (
    <div className="auth-page-container">
      <div className="auth-form-header">
        <h2>{isLoginForm ? 'Student Login' : 'Generate Offer Letter'}</h2>
      </div>
      <div className="auth-form-toggle">
        <button
          className={`toggle-button ${isLoginForm ? 'active' : ''}`}
          onClick={() => setIsLoginForm(true)}
        >
          Login
        </button>
        <button
          className={`toggle-button ${!isLoginForm ? 'active' : ''}`}
          onClick={() => setIsLoginForm(false)}
        >
          Offer Letter
        </button>
      </div>
      <div className="auth-form-content">
        {isLoginForm ? (
          <Login onLoginSuccess={handleLoginSuccess} />  // Render Login form
        ) : (
          <OfferForm />  // Render Offer Letter form
        )}
      </div>
    </div>
  );
}

export default AuthPage;
