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
  
  export default PokemonCard;


  