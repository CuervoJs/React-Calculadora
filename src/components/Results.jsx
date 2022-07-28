import React from "react";
import '../estilo/Results.css'

/* Se usa los palentesis porque se va a retornar algo, asi nos ahorramos el return */
const Results = ({ input }) => (
  /* input significa lo que el usuario va a ingresar */
  <div className="input">  
    {input}
  </div>
);


export default Results;


/* Asi tambien vale 

const Results = () => {
  return (
    <div>

    </div>
  );
}

*/