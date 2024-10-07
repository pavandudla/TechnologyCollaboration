import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Signup.css'

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false); // State to track if the username is invalid
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] = useState(false);

const handleUsernameChange = (e) => {
          const value = e.target.value;
          setUsername(value);
        
        // Clear the error message as the user types a valid username
        if (value.length >= 3 && value.length <= 15 && /^[a-zA-Z0-9_.]+$/.test(value)) {
          setErrorMessage(""); // Clear the error message if the username becomes valid
          setIsUsernameInvalid(false);
        }
};


const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  
  // Validate email in real-time
  if (value !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    setErrorMessage('');
    setIsEmailInvalid(false); // Clear red border for valid email
  } else {
    setErrorMessage('Please enter a valid email address');
    setIsEmailInvalid(true); // Set red border for invalid email
  } 
};  


const handlePasswordChange = (e) => {
  const value = e.target.value;
  setPassword(value);

  // Combine all password validation conditions
  const isValidPassword = (
    value.length >= 8 &&    // At least 8 characters long
    /[A-Z]/.test(value) &&  // Contains at least one uppercase letter
    /[a-z]/.test(value) &&  // Contains at least one lowercase letter
    /[0-9]/.test(value) &&  // Contains at least one number
    /[!@#$%^&*]/.test(value) // Contains at least one special character
  );

  if (isValidPassword) {
    setErrorMessage("");    // Clear error message if the password is valid
    setIsPasswordInvalid(false); // Remove invalid password indication
  }
};




const handleConfirmPasswordChange = (e) => {
  const value = e.target.value;
  setConfirmPassword(value);
  if (value !== "" && password === value) {
    setErrorMessage(""); // Clear error message if the password is valid
    setIsConfirmPasswordInvalid(false); // Remove invalid password indication
  } else if (value !== password) {
    setErrorMessage("Passwords do not match"); // Set error message if passwords don't match
    setIsConfirmPasswordInvalid(true); // Indicate that the confirm password is invalid
  }
};



const validateSignUp = () => {
     // Username validation
     if (username === "") {
      setErrorMessage("Username cannot be empty");
      setIsUsernameInvalid(true);
      return false; // Stop further validation if the username is invalid
    } else if (username.length < 3 || username.length > 15) {
      setErrorMessage("Username must be between 3 and 15 characters long");
      setIsUsernameInvalid(true);
      return false; // Stop further validation
    } else if (!/^[a-zA-Z0-9_.]+$/.test(username)) {
      setErrorMessage("Username can only contain letters, numbers, underscores, and dots");
      setIsUsernameInvalid(true);
      return false; // Stop further validation
    }

    // Email validation
    if (email === "") {
      setErrorMessage("Email cannot be empty");
      setIsEmailInvalid(true);
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage("Please enter a valid email address");
      setIsEmailInvalid(true);
      return false;
    }


  // Password validation
  if (password === '') {
    setErrorMessage("Password cannot be empty");
    setIsPasswordInvalid(true);
    return false;
  } else if (password.length < 8) {
    setErrorMessage("Password must be at least 8 characters long");
    setIsPasswordInvalid(true);
    return false;
  } else if (!/[A-Z]/.test(password)) {
    setErrorMessage("Password must contain at least one uppercase letter");
    setIsPasswordInvalid(true);
    return false;
  } else if (!/[a-z]/.test(password)) {
    setErrorMessage("Password must contain at least one lowercase letter");
    setIsPasswordInvalid(true);
    return false;
  } else if (!/[0-9]/.test(password)) {
    setErrorMessage("Password must contain at least one number");
    setIsPasswordInvalid(true);
    return false;
  } else if (!/[!@#$%^&*]/.test(password)) {
    setErrorMessage("Password must contain at least one special character (!@#$%^&*)");
    setIsPasswordInvalid(true);
    return false;
  }

  // Confirm password validation
  if (confirmPassword === "") {
    setErrorMessage("Please confirm your password");
    setIsConfirmPasswordInvalid(true)
    return false;
  } else if (password !== confirmPassword) {
    setErrorMessage("Passwords do not match");
    setIsConfirmPasswordInvalid(true)
    return false;
  }

 
  // If all validations pass, reset the fields
  setUsername("");
  setEmail("");
  setPassword("");
  setConfirmPassword("")

  return true; // Indicate that validation was successful
  
   
  };


 
  

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateSignUp(); // Capture the validation result
    if (isValid) {
      setConfirmPassword("");
    }
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
            onChange={handleUsernameChange}
            style={{ borderColor: isUsernameInvalid ? 'red' : '' }} // Change border color conditionally
          />
        
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={{ borderColor: isEmailInvalid ? 'red' : '' }}
           
          />
        
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ borderColor: isPasswordInvalid ? 'red' : '' }}
          />
         
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            onChange={handleConfirmPasswordChange}
            style={{ borderColor: isConfirmPasswordInvalid ? 'red' : '' }}
           
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
