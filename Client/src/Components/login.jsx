import React, { useState } from 'react';
import './Form.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const AuthForm = () => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isActive) {
      console.log('Registration Form Data:', { email, password, name });
    } else {
      console.log('Login Form Data:', { email, password });
    }

    history.push('/Home'); // Redirect after form submission
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google');
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      {isActive ? (
        <form onSubmit={handleSubmit} className="form-container sign-up">
          <h1>Sign Up</h1>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
          <p>Or Sign up with</p>
          <div className="social-login">
            <button type="button" className="google" onClick={handleGoogleSignIn}>
              <FontAwesomeIcon icon={faGoogle} />
              Continue with Google
            </button>
          </div>
          <p>Already have an account? <button type="button" onClick={() => setIsActive(false)}>Login</button></p>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="form-container sign-in">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign In</button>
          <p>Or Login with</p>
          <div className="social-login">
            <button type="button" className="google" onClick={handleGoogleSignIn}>
              <FontAwesomeIcon icon={faGoogle} />
              Continue with Google
            </button>
          </div>
          <p>Don't have an account? <button type="button" onClick={() => setIsActive(true)}>Sign Up</button></p>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
