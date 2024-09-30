import React, { useState } from 'react';
import styles from './Login.module.css'

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form
    setUsername('');
    setPassword('');
  };

  return (
    <div className={styles.loginContainer}>
        <h2 className={styles.loginHeading}>Login</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label className={styles.loginLabel} htmlFor="username">Username:</label>
            <input
                className={styles.loginInput}
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
            />
        </div>
      <div>
        <label className={styles.loginLabel} htmlFor="password">Password:</label>
        <input
          className={styles.loginInput}
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button className={styles.button} type="submit">Submit</button>
        </form>
    </div>
  );
}

export default LoginForm;



