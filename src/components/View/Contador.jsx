import { useState } from "react";
//Importamos todos los componentes hijos
import Hijo1 from "../textos/Hijo1";
import Hijo2 from "../textos/Hijo2";
import Hijo3 from "../textos/Hijo3";

function Contador() {
  const [contador, setContador] = useState(0);
  //const [items, setItems] = useState([Hijo1, Hijo2, Hijo3]); No es nesecario agregar más items para la actividad
  //const [nuevoNombre, setNuevoNombre] = useState("");

  console.log("Render App");

  /*function agregarItem() {
    setItems([...items, "Nuevo"]);
    
    /*
    if (!nuevoNombre.trim()) return;

    setItems([...items, nuevoNombre]);
    setNuevoNombre(""); // limpiar input
  }*/

  return (
    <div>
      <h1>Contador: {contador}</h1>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar contador
      </button>

      {/* Campo para escribir el nombre
      <input
        type="text"
        placeholder="Escribe un nombre"
        value={nuevoNombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
      />*/}


      {/*<button onClick={agregarItem}>
        Agregar item
      </button>*/}

      <hr />

      {/*LLamada a los 3 hijos de forma independiente*/}
      <Hijo1 />
      <Hijo2 />
      <Hijo3 />
    </div>
  );
}

export default Contador;
