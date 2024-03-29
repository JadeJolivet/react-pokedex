import React from 'react';

function NavBar({ pokemonIndex, pokemonList, handlePreviousPokemon, handleNextPokemon }) {
  return (
    <>
      <p>
        {pokemonIndex > 0 && <button type="button" onClick={handlePreviousPokemon}>Previous Pokemon</button>}
        {pokemonIndex < pokemonList.length - 1 && <button type="button" onClick={handleNextPokemon}>Next Pokemon</button>}
      </p>
    </>
  );
}

export default NavBar;