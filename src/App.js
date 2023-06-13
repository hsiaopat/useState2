import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [happyRating, setHappyRating] = useState(0);
  console.log('Rendered');
  return (
    <div>
      <h1>How happy are you?</h1>
      <h2>{happyRating}</h2>
      <button
        onClick={() => {
          setHappyRating(happyRating + 1);
          setHappyRating((prev) => prev + 1);
        }}
      >
        +2
      </button>
    </div>
  );
}
