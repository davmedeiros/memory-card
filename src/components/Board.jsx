import shuffle from '../modules/shuffle';
import Pokemon from '../modules/pokemon';
import { useEffect, useState } from 'react';

const populateBoard = async (setPokemon) => {
  const pokemon = [];
  const MAX_POKEMON = 150;
  const BOARD_SIZE = 12;

  for (let i = 0; i < BOARD_SIZE; i++) {
    const id = Math.floor(Math.random() * (MAX_POKEMON - 1 + 1) + 1);
    pokemon.push(await Pokemon(id));
  }

  setPokemon(pokemon);
};

const Board = () => {
  const [pokemon, setPokemon] = useState([{}]);

  useEffect(() => {
    populateBoard(setPokemon);
  }, []);

  pokemon.forEach((monster) => {
    console.log(monster.name);
  });

  return (
    <div className="board">
      {pokemon.forEach((monster) => (
        <p>{monster.name}</p>
      ))}
    </div>
  );
};

export default Board;
