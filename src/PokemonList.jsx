import PokemonCard from "./PokemonCard"
export default function PokemonList({ pokemonList, onShowPokemon, onDeleteClick }) {
    return (
        <ul class="pokedex-list" >

            {pokemonList.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} onShowPokemon={onShowPokemon} onDeleteClick={onDeleteClick} />)}
        </ul>
    )
}