export default function PokemonSearch({ pokemonName, onNameChange, onSearchClick }) {

    return (
        <div className="search-pokemon">
            <h2 className="search-pokemon-title">Cerca il tuo pokemon</h2>
            <input type="text" name="pokemonName" value={pokemonName} className="search-input" onChange={onNameChange} />
            <button className="btn btn-search" onClick={onSearchClick} disabled={pokemonName.length === 0}>Cerca</button>
        </div>
    )
}