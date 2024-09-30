import React, { useState } from 'react';
import styles from './Button.module.css';

const Counter = () => {
  // Declare a state variable named "count" and initialize it to 0
  const [count, setCount] = useState(0);

  // Method to increment the count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Method to decrement the count
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button 
          className={styles.button}
          onClick={increment}>Increment
      </button>
      <button 
          className={styles.button}
          onClick={decrement}>Decrement
      </button>
    </div>
  );
};

export default Counter;
