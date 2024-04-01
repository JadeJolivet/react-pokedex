import React from 'react';

function NavBar({pokemonList, setPokemonIndex}) {
  const handleClick = (pokemonIndex) => {
    setPokemonIndex(pokemonIndex);

    if (pokemonList[pokemonIndex].name === "pikachu"){
      alert ("pika pikachu ! ! !");
    }
  };

  return (
    <ul>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <li key={pokemon.name}>
          <button type="button" onClick={() => handleClick(pokemonIndex)}>{pokemon.name}</button>
        </li>
      ))}
    </ul>
  );
}
      
export default NavBar;


/* <p>
      {pokemonIndex > 0 && <button type="button" onClick={handlePreviousPokemon}>Previous Pokemon</button>}
      {pokemonIndex < pokemonList.length - 1 && <button type="button" onClick={handleNextPokemon}>Next Pokemon</button>}
  </p> */
