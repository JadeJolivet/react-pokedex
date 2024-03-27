function PokemonCard ({pokemon}){ 

    return (
      <figure>
        {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={`Image de ${pokemon.name}`} />
     ) : (
            <p>???</p>
        )}

        <figcaption>{pokemon.name}</figcaption>

      </figure>
    );
  }

import PropTypes from "prop-types";

  PokemonCard.propTypes = {
      pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };

  export default PokemonCard;


  