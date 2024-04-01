import React from 'react';

function NavBar({pokemonList, setPokemonIndex}) {
  const handleClick = (pokemonIndex) => {
    setPokemonIndex(pokemonIndex);
  };

  return (
    <ul>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <li key={pokemon.name}>
          <button onClick={() => handleClick(pokemonIndex)}>{pokemon.name}</button>
        </li>
      ))}
    </ul>
  );
}
      
export default NavBar;
