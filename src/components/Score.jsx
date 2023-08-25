import { useState } from 'react';

const Score = () => {
  const [points, setPoints] = useState(0);

  return (
    <>
      <p>Score: {points}</p>
    </>
  );
};

export default Score;
