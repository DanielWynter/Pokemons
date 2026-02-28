import { memo } from "react";

//Texto independiente con memo para evitar re-renderizado si no existen cambios
const Hijo2 = memo(function Hijo2() {
    console.log("Render Hijo 2:");
    return <p>Soy Hijo 2</p>;
});

export default Hijo2;