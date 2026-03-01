import React, { useState } from "react";
import Pokemon from "./Pokemon";
import AgregarPokemon from "../operations/AgregarPokemon";
import RevertirLista from "../operations/RevertirLista";
import EliminarPokemon from "../operations/EliminarPokemon";

//Lista base de pokemons
const PokemonsList = () => {
    const [pokemons, setPokemons] = useState([
        { id: 1, name: "Charmander", type: "Fire", img: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/800px-Charmander.png", likes: 0 },
        { id: 2, name: "Bulbasaur", type: "Grass", img: "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png", likes: 0 },
        { id: 3, name: "Squirtle", type: "Water", img: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e3/latest/20160309230820/Squirtle.png", likes: 0 },
    ]);

    //Agregar nuevo Pokémon
    const agregarNuevoPokemon = (nuevo) => {
        setPokemons(prev => [...prev, { ...nuevo, likes: 0 }]);
    };

    //Función para incrementar likes
    const handleLike = (id) => {
        setPokemons(prev =>
            prev.map(pokemon =>
                pokemon.id === id ? { ...pokemon, likes: pokemon.likes + 1 } : pokemon
            )
        );
    };

    //Revertir orden de lista
    const revertirOrden = () => {
        setPokemons(prev => [...prev].reverse()); 
    };

    //Eliminar Pokémon (por ID o por Nombre, pero solo estamos pidiendo el nombre debido a que el ID está oculto en la interfaz)
    const eliminarPokemon = (identificador) => {
        setPokemons(prev => 
            prev.filter(p => p.id !== identificador && p.name.toLowerCase() !== String(identificador).toLowerCase())
        );
    };

    return (
        <div className="container mt-4">
            {/* Sección de Controles */}
            <div className="card-box mb-4">
                <AgregarPokemon alAgregar={agregarNuevoPokemon} />
                <hr />
                <div className="d-flex align-items-center gap-3">
                    <EliminarPokemon alEliminar={eliminarPokemon} />
                    <RevertirLista alRevertir={revertirOrden} />
                </div>
            </div>

            {/* Lista de Pokémones */}
            <div className="row">
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
        </div>
    );
};

export default PokemonsList;