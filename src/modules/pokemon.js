const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  return pokemon;
};

const Pokemon = async (id) => {
  const pokemon = await fetchPokemon(id);
  const name = await pokemon.name;
  const spriteUrl = await pokemon.sprites.other.dream_world.front_default;

  return { id, name, spriteUrl };
};

export default Pokemon;
