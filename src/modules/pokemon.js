const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  return pokemon;
};

const Pokemon = async (id, name, sprite) => {
  return { id, name, sprite };
};
