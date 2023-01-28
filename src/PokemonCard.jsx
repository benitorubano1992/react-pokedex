export default function PokemonCard({ pokemon, onShowPokemon, onDeleteClick }) {

    return (
        <li className='pokedex-item'>
            <h4 className="pokemon-title">
                {pokemon.name}
            </h4>
            <div className='img-box'>
                <img src={pokemon.default} alt="poke-iamge" />
            </div>
            <button className='btn btn-add' onClick={() => onShowPokemon(pokemon)}>Mostra</button>
            <button className='btn poke-image btn-delete' onClick={() => onDeleteClick(pokemon.id)}>Elimina</button>
        </li>
    )
}