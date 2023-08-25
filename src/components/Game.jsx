import { useState } from 'react';
import ScorePanel from './ScorePanel';
import Board from './Board';

const Game = () => {
  const [score, setScore] = useState(0);

  return (
    <>
      <header>
        <ScorePanel score={score} />
      </header>
      <main>
        <Board
          clickEvent={() => {
            setScore(score + 1);
          }}
        />
      </main>
    </>
  );
};

export default Game;
