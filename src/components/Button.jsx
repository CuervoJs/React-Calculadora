import React from "react";
import '../estilo/Button.css';

function Button(props){

    const esOperador = (valor) => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
//La función de trimEnd() elimina los espacios al final y el trim() elimina todos los espacios
    /* Para la funciones onClick cuando es con props los declaras asi */
    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} 
        onClick={() => props.manejarClick(props.children)}>  
        {props.children}
        </div>
    );
}

export default Button;