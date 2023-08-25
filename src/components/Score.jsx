import { useState } from 'react';

const Score = () => {
  const [points, setPoints] = useState(0);

  const handleOnClick = () => {
    setPoints(points + 1);
  };

  return (
    <>
      <p onClick={handleOnClick}>Score: {points}</p>
    </>
  );
};

export default Score;
