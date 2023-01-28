export default function PokemonShow({ pokemon, imgUrl, onDefaultClick, onShinyClick, handleAddPokemonClick }) {
    return (
        <div className="pokemon-show">
            <h3 className='pokemon-result'>Ecco i tuoi risultati per [{pokemon.name}]</h3>
            <ul className="pokemon-info">
                <li>Nome:{pokemon.name}</li>
                <li>Peso:{pokemon.weight} </li>
                <li>Altezza {pokemon.height}</li>
            </ul>
            <div className='main-info'>
                <div className="pokemon-img">
                    <img src={imgUrl} alt="front-image" className="img-poke" />
                </div>
                <div className='poke-actions'>
                    <button className='btn poke-image ' onClick={() => onDefaultClick(pokemon.default)}>Default</button>
                    <button className='btn poke-image ' onClick={() => onShinyClick(pokemon.shiny)}>Shiny</button>
                </div>
                <div className='pokemon-stats'>
                    <h3>Statitische</h3>
                    <ul>
                        {pokemon.stats.map(({ nome, value }, index) => <li key={index}>
                            <h4 className='stats-name'>{nome}</h4>
                            <progress value={value} max="100"></progress>
                        </li>)}


                    </ul>


                </div>


            </div>
            <button className="btn" onClick={handleAddPokemonClick}>Aggiungi al Pokedex</button>



        </div>
    )
}