import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './AuthPage.module.css';

function AuthPage() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Your authentication logic here
    // For now, we'll just navigate to the questions page
    navigate('/questions');
  };

  const toggleForm = (value) => {
    setIsLoginForm(value);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.formbox}>
        <div className={styles.buttonBox}>
          <div id="btn" className={styles.btn} style={{ left: isLoginForm ? '0px' : '110px' }}></div>
          <button type="button" className={styles.toggleBtn} onClick={() => toggleForm(true)}>Log In</button>
          <button type="button" className={styles.toggleBtn} onClick={() => toggleForm(false)}>Register</button>
        </div>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGoogle} />
        </div>
        <form onSubmit={handleLogin} className={`${styles.inputGroup} ${styles.login}`} style={{left: isLoginForm ? '50px' : '-400px'}}>
          <input type="text" className={styles.inputField} placeholder="User Id" required />
          <input type="password" className={styles.inputField} placeholder="Enter Password" required />
          <input type="checkbox" className={styles.checkBox} id="remember-password" />
          <label htmlFor="remember-password">Remember Password</label>
          <button type="submit" className={styles.submitBtn}>Log in</button>
        </form>
        <form className={`${styles.inputGroup} ${styles.register}`} style={{left: isLoginForm ? '450px' : '50px'}}>
          <input type="text" className={styles.inputField} placeholder="User Id" required />
          <input type="email" className={styles.inputField} placeholder="Email Id" required />
          <input type="password" className={styles.inputField} placeholder="Enter Password" required />
          <input type="checkbox" className={styles.checkBox} id="agree-terms" />
          <label htmlFor="agree-terms">I agree to the terms & conditions</label>
          <button type="submit" className={styles.submitBtn}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;