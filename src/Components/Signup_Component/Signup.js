import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Signup.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Simple validation
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Add your sign-up logic here (e.g., API call to register the user)
    console.log('Signing up with:', username, email, password);

    // Example: Reset form after successful sign-up
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>

        <div className="bottom-links">
          <span>Already have an account? </span>
          <Link to="/login" className="signin-link">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
