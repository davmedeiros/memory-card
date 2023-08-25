import { useEffect, useState } from 'react';
import Pokemon from '../modules/pokemon';

const Card = ({ id }) => {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    console.log('load'); // LOGGING: Remove when implemented
    const loadPokemonData = async () => {
      setPokemon(await Pokemon(id));
    };
    loadPokemonData();
  }, [id]);

  return (
    <div className="card" key={pokemon.id}>
      <div className="sprite-container">
        <img src={pokemon.spriteUrl} alt={pokemon.name} />
      </div>
      <h2 className="name">{pokemon.name}</h2>
    </div>
  );
};

export default Card;
