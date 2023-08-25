const Card = ({ id, name, spriteUrl }) => {
  return (
    <div className="card" key={id}>
      <div className="sprite-container">
        <img src={spriteUrl} alt={name} />
      </div>
      <h2 className="name">{name}</h2>
    </div>
  );
};

export default Card;
