import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for 1 minute

  useEffect(() => {
    // Only set the interval if there's time left
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

      // Cleanup the interval when the component unmounts or when timeLeft reaches 0
      return () => clearInterval(timerId);
    }
  }, [timeLeft]); // Effect depends on timeLeft

  return (
    <div>
      <h1>Time Left: {timeLeft} seconds</h1>
      {timeLeft === 0 && <p>Time's up!</p>}
    </div>
  );
};

export default CountdownTimer;
