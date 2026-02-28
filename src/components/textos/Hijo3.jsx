import { memo } from "react";

//Texto independiente con memo para evitar re-renderizado si no existen cambios
const Hijo3 = memo(function Hijo3() {
    console.log("Render Hijo 3:");
    return <p>Soy Hijo 3</p>;
});

export default Hijo3;