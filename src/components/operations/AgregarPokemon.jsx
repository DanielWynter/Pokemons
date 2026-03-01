import React, { useState } from "react";

const AgregarPokemon = ({ alAgregar }) => {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [imagen, setImagen] = useState("");

    const manejarEnvio = () => {
        // 1.Creamos el objeto aquí
        const nuevo = {
            id: Date.now(),
            name: nombre,
            type: tipo,
            img: imagen
        };

        // 2. Usamos la función que nos pasó el padre
        alAgregar(nuevo);

        // 3. Limpiamos
        setNombre("");
        setTipo("");
        setImagen("");
    };

    return (
        <div className="formulario">
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
            <input value={tipo} onChange={(e) => setTipo(e.target.value)} placeholder="Tipo" />
            <input value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="URL Imagen" />
            <button onClick={manejarEnvio}>Agregar Pokémon</button>
        </div>
    );
};

export default AgregarPokemon;