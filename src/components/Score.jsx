import { useState } from 'react';

const Score = ({ points }) => {
  const [score, setScore] = useState(0);

  setScore(score + points);

  return (
    <>
      <p>Score: {score}</p>
    </>
  );
};

export default Score;
