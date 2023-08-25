import shuffle from '../modules/shuffle';
// import Pokemon from '../modules/pokemon';
import { useEffect, useState } from 'react';

// const populateBoard = async () => {
//   const pokemon = [];
// };

const Board = () => {
  const [pokemon, setPokemon] = useState([
    { id: 0, name: 'default', spriteUrl: '...' },
  ]);
  const MAX_POKEMON = 150;
  const BOARD_SIZE = 12;

  useEffect(() => {
    console.log('ran fetch');
    const fetchPokemon = async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const retrieved = await response.json();
      return retrieved;
    };

    const Pokemon = async (id) => {
      const fetched = await fetchPokemon(id);
      const name = await fetched.name;
      const spriteUrl = await fetched.sprites.other.dream_world.front_default;

      setPokemon([...pokemon, { id, name, spriteUrl }]);
    };

    for (let i = 0; i < BOARD_SIZE; i++) {
      const id = Math.floor(Math.random() * (MAX_POKEMON - 1 + 1) + 1);
      Pokemon(id);
    }

    return () => {};
  }, []);

  return <div className="board">{pokemon[1] && <p>{pokemon[1].name}</p>}</div>;
};

export default Board;
