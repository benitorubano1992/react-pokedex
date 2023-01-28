import { useState, useEffect } from 'react'
import PokemonShow from './PokemonShow';
import PokemonList from './PokemonList';
import PokemonSearch from './PokemonSearch';
import './App.css'

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonMatch, setPokemonMatch] = useState();
  const [pokemonList, setPOkemonList] = useState(() => JSON.parse(localStorage.getItem("pokemonList")) || []);
  const [pokemonUrl, setPokemonUrl] = useState();
  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
  }, [pokemonList])
  async function handleSearchPokemon() {
    try {
      const data = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)).json();
      if (data)

        console.log(generatePokemon(data));
      setPokemonMatch(generatePokemon(data));
      setPokemonUrl(generatePokemon(data).default);
    }
    catch (error) {
      console.error(error);
      console.log("non ci sono pokemon con quel nome");
    }
  }

  function generatePokemon(item) {
    const pokeStats = item.stats.map(({ base_stat, stat: { name } }, index) => {
      return { id: index, nome: name, value: base_stat }
    })

    const newObj = {
      id: item.id,
      name: item.species.name,
      height: item.height,
      weight: item.weight,
      stats: pokeStats,
      default: item.sprites.front_default,
      shiny: item.sprites.front_shiny
    }
    return newObj;
  }
  function handleAddPokemonClick() {
    if (!pokemonList.find(({ id }) => id === pokemonMatch.id)) {
      setPOkemonList(prev => [...prev, pokemonMatch]);
    }
  }
  function handleDefaultClick(defaultUrl) {
    setPokemonUrl(defaultUrl);
  }
  function handleShinyClick(shinyUrl) {
    setPokemonUrl(shinyUrl);
  }
  function handleShowPokemon(pokemon) {
    setPokemonMatch(pokemon);
    setPokemonUrl(pokemon.default);

  }
  function handleDeleteClick(id) {
    setPOkemonList(prev => prev.filter(poke => poke.id !== id));
  }
  function handleNameChange(event) {
    setPokemonName(event.target.value);
  }


  return (
    <div className="app-container">
      <PokemonSearch pokemonName={pokemonName}
        onNameChange={handleNameChange}
        onSearchClick={handleSearchPokemon} />
      {pokemonMatch && <PokemonShow pokemon={pokemonMatch}
        imgUrl={pokemonUrl}
        onDefaultClick={handleDefaultClick}
        onShinyClick={handleShinyClick}
        handleAddPokemonClick={handleAddPokemonClick} />}
      {/* sezione che mostra i pokemon inseriti nel pokedex */}
      {pokemonList.length > 0 && <section >
        <PokemonList pokemonList={pokemonList}
          onShowPokemon={handleShowPokemon}
          onDeleteClick={handleDeleteClick} />
      </section>}
    </div>
  )
}

export default App
