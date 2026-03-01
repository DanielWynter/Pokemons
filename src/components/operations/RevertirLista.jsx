import React from "react";

const RevertirLista = (props) => {
    return(
        <button onClick={props.alRevertir} className="btn btn-warning m-2">
            Revertir Orden
        </button>
    );
};
export default RevertirLista;