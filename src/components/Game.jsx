import { useState } from 'react';
import ScorePanel from './ScorePanel';
import Board from './Board';

const Game = () => {
  const [score, setScore] = useState(0);
  const [clickedCardIds, setClickedCardIds] = useState([]);

  const playRound = (id) => {
    if (clickedCardIds.includes(id)) {
      setScore(0);
      clickedCardIds.length = 0;
    } else {
      setClickedCardIds([...clickedCardIds, id]);
      setScore(score + 1);
    }
  };

  return (
    <>
      <header>
        <ScorePanel score={score} />
      </header>
      <main>
        <Board clickEvent={playRound} />
      </main>
    </>
  );
};

export default Game;
