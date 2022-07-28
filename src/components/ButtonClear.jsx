import React from "react";
import '../estilo/ButtonClear.css'

const ButtonClear = ({ children, manejarClick }) => (
    /* Para la funciones onClick cuando es sin props los declaras asi */
    <div className="ButtonClear" onClick={manejarClick}>
        {children}
    </div>
);

export default ButtonClear;