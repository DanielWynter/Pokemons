import React, { useState } from "react";
import Pokemon from "./Pokemon";
import AgregarPokemon from "../operations/AgregarPokemon";

const PokemonsList = () => {

    const [pokemons, setPokemons] = useState([
        {
            id: 1,
            name: "Charmander",
            type: "Fire",
            img: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/800px-Charmander.png",
            likes: 0
        },
        {
            id: 2,
            name: "Bulbasaur",
            type: "Grass",
            img: "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png",
            likes: 0
        },
        {
            id: 3,
            name: "Squirtle",
            type: "Water",
            img: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e3/latest/20160309230820/Squirtle.png",
            likes: 0
        },
    ]);

    // ✅ Agregar nuevo Pokémon
    const agregarNuevoPokemon = (nuevo) => {
        setPokemons(prev => [...prev, { ...nuevo, likes: 0 }]);
    };

    // ✅ Función para incrementar likes
    const handleLike = (id) => {
        setPokemons(prev =>
            prev.map(pokemon =>
                pokemon.id === id
                    ? { ...pokemon, likes: pokemon.likes + 1 }
                    : pokemon
            )
        );
    };

    return (
        <div className="row">
            <AgregarPokemon alAgregar={agregarNuevoPokemon} />

            {pokemons.map((pokemon) => (
                <Pokemon
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    img={pokemon.img}
                    type={pokemon.type}
                    likes={pokemon.likes}
                    onLike={handleLike}
                />
            ))}
        </div>
    );
};

export default PokemonsList;