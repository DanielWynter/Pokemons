import React, { useState } from "react";

const EliminarPokemon = ({ alEliminar }) => {
    const [identificador, setIdentificador] = useState("");

    const manejarEliminacion = () => {
        if (!identificador) return;

        const posibleId = Number(identificador);
        const argumento = Number.isNaN(posibleId) ? identificador : posibleId;

        if (typeof alEliminar === "function") {
            alEliminar(argumento);
        }

        setIdentificador("");
    };

    return (
        <div className="formulario">
            <input
                value={identificador}
                onChange={(e) => setIdentificador(e.target.value)}
                placeholder="ID o nombre a eliminar"
            />
            <button onClick={manejarEliminacion}>Eliminar Pokémon</button>
        </div>
    );
};

export default EliminarPokemon;
