import Card from './Card';

const LoadRandomCards = ({ numberOfCards = 1 }) => {
  const MAX = 150;
  const MIN = 1;
  const cards = [];

  for (let i = 0; i < numberOfCards; i++) {
    const id = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
    cards.push(<Card id={id} key={id} />);
  }

  return <>{cards}</>;
};

const Board = () => {
  return (
    <div className="board">
      <LoadRandomCards numberOfCards={1} />
    </div>
  );
};

export default Board;
