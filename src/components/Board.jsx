import Card from './Card';

const LoadRandomCard = () => {
  const MAX = 150;
  const MIN = 1;
  const id = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

  return (
    <>
      <Card id={id} />
    </>
  );
};

const Board = () => {
  return (
    <div className="board">
      <LoadRandomCard />
    </div>
  );
};

export default Board;
