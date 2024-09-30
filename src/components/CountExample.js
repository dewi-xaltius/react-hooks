import React, { useState, useEffect } from 'react';

function CountExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Side effect: Update the document title with the current count value
    document.title = `You clicked ${count} times`;

    // Optional cleanup: None needed in this example
  }, [count]); // Effect re-runs only when "count" changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default CountExample;
