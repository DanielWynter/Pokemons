import { memo } from "react";

//Texto independiente con memo para evitar re-renderizado si no existen cambios
const Hijo1 = memo(function Hijo1() {
    console.log("Render Hijo 1:");
    return <p>Soy Hijo 1</p>;
});

export default Hijo1;