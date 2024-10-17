import React, { useState } from "react";
import './Forgot_password.css'; // Add this line to import the CSS

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages
    setMessage("");
    setError("");

    // POST request to backend for password reset
    try {
      const response = await fetch("https://your-backend-url.com/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Display success message
      } else {
        setError(data.error); // Display error from server
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="forgot-password-maincontainer">
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

     
    </div>
    </div>
  );
}

export default ForgotPassword;
