import React, { useState } from "react";
import Pokemon from "./Pokemon";
import AgregarPokemon from "../operations/AgregarPokemon"; // 1. Importas el nuevo archivo
import RevertirLista from "../operations/RevertirLista";

const PokemonsList = () => {
    // Agregué 'setPokemons' para poder actualizar la lista
    const [pokemons, setPokemons] = useState([
        {
        id: 1,
        name: "Charmander ",
        type: "Fire",
        img: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/56/latest/20200307023245/Charmander.png/800px-Charmander.png",
        },
        {
        id: 2,
        name: "Bulbasaur",
        type: "Grass",
        img: "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png",
        },
        {
        id: 3,
        name: "Squirtle ",
        type: "Water",
        img: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e3/latest/20160309230820/Squirtle.png",
        },
    ]);

    // 2. Esta función recibe el nuevo pokemon desde el formulario y lo guarda
    const agregarNuevoPokemon = (nuevo) => {
        setPokemons([...pokemons, nuevo]);
    };

    // Revertir orden de lista
    const revertirOrden = () => {
        const copiaDeLista = [...pokemons]; //Copiar lista para no modificar original
        const listaVolteada = copiaDeLista.reverse(); //voltear copia de lista
        setPokemons(listaVolteada); //actualizar con lista volteada
    };

    return (
        <div className="row">
            {/* 3. Colocamos el formulario y le pasamos la función */}
            <AgregarPokemon alAgregar={agregarNuevoPokemon} />

            {/* Boton para voltear pokemones */}
            <RevertirLista alRevertir={revertirOrden} />

            {pokemons.map((pokemon) => {
                return (
                <Pokemon
                    key={pokemon.id}
                    name={pokemon.name}
                    img={pokemon.img}
                    type={pokemon.type}
                    />
                );
            })}
        </div>
    );
};

export default PokemonsList;