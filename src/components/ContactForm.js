import React, { useState } from 'react';
import styles from './Form.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formHeading}>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.formLabel} htmlFor="name">Name:</label>
          <input
            className={styles.formInput}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.formLabel} htmlFor="email">Email:</label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.formLabel} htmlFor="message">Message:</label>
          <textarea
            className={styles.formInput}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
