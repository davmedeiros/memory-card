import Card from './Card';
import '../styles/Board.css';

const LoadRandomCards = ({ numberOfCards = 1, clickEvent }) => {
  const MAX = 150;
  const MIN = 1;
  const cards = [];

  for (let i = 0; i < numberOfCards; i++) {
    const id = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    const isDuplicated = cards.some((key) => key.key === id.toString());

    if (isDuplicated && cards.length < MAX) {
      i -= 1;
    } else {
      cards.push(<Card key={id} id={id} clickEvent={clickEvent} />);
    }
  }

  return <>{cards}</>;
};

const Board = ({ clickEvent }) => {
  return (
    <div className="board">
      <LoadRandomCards numberOfCards={12} clickEvent={clickEvent} />
    </div>
  );
};

export default Board;
