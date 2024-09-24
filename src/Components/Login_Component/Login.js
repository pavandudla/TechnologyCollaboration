// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     setErrorMessage(''); // Clear error message before validation

//     // Simple validation
//     if (!email || !password) {
//       setErrorMessage('Please fill in both fields.');
//       return;
//     }

//     // Add your login logic here (e.g., API call to authenticate user)
//     console.log('Logging in with:', email, password);

//     // Example of resetting the form after successful login
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" className="login-button">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Simple validation
    if (!email || !password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    // Add your login logic here (e.g., API call to authenticate user)
    console.log('Logging in with:', email, password);

    // Example: Reset form after successful login
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

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

        <button type="submit" className="login-button">Login</button>

        <div className="bottom-links">
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
          <span> | </span>
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;

