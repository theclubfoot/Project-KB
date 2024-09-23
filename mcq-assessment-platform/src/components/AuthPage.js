import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Mock authentication logic
    if (email === 'testuser@example.com' && password === 'password123') {
      navigate('/questions');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className={`${styles.container} ${isSignUp ? styles.rightPanelActive : ''}`} id="container">
      <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
        <form action="#">
          <h1>Create Account</h1>
          <div className={styles.socialContainer}>
            <button className={styles.social}><i className="fab fa-facebook-f"></i></button>
            <button className={styles.social}><i className="fab fa-google-plus-g"></i></button>
            <button className={styles.social}><i className="fab fa-linkedin-in"></i></button>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <form onSubmit={handleSignIn}>
          <h1>Sign in</h1>
          <div className={styles.socialContainer}>
            <button className={styles.social}><i className="fab fa-facebook-f"></i></button>
            <button className={styles.social}><i className="fab fa-google-plus-g"></i></button>
            <button className={styles.social}><i className="fab fa-linkedin-in"></i></button>
          </div>
          <span>or use your account</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.linkButton}>Forgot your password?</button>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className={styles.ghost} id="signIn" onClick={toggleSignUp}>Sign In</button>
          </div>
          <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className={styles.ghost} id="signUp" onClick={toggleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;