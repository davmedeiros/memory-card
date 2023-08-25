import { useEffect, useState } from 'react';
import Pokemon from '../modules/pokemon';
import '../styles/Card.css';

const Card = ({ id, clickEvent }) => {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    const loadPokemonData = async () => {
      setPokemon(await Pokemon(id));
    };
    loadPokemonData();
  }, [id]);

  const handleClick = () => {
    clickEvent(id);
  };

  return (
    <div className="card" key={pokemon.id} onClick={handleClick}>
      <div className="sprite-container">
        <img src={pokemon.spriteUrl} alt={pokemon.name} />
      </div>
      <div className="details">
        <h2 className="name">{pokemon.name}</h2>
      </div>
    </div>
  );
};

export default Card;
