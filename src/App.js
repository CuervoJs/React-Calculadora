import ImagenReact from './components/ImagenReact'
import Button from './components/Button';
import Results from './components/Results';
import ButtonClear from './components/ButtonClear';
import './App.css';
import { useState } from 'react';

//Instalar el mathjs con el "npm install mathjs"
import { evaluate } from 'mathjs';

function App() {
 //Holi
  //Hooks son para poder asignar valores a los hijos de los props
  const [input, setInput] = useState('');

  //Agregar valores en la pantalla de Results
  const AgregarInput = val => {
    setInput(input + val);
  };

  //Limpiar el Results
  const ClearInput = () => {
    setInput('');
  };

  //Funcionar para calcular
  const Evaluar = () => {

    //Expresion regular para salidar una suma doble
    let expReg = /[0-9]\W{2,100}/ig;
    //Si el input esta vacio es falso(false) y si esta lleno es verdadera(true) se mostrará un mensaje
    if(expReg.test(input)){
      alert("Por favor ingrese valores que se puedan calcular.");
      setInput('');
    }
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert("Por favor ingrese valores para realizar los calculos.");
    }
  };

  return (
    <div className="App">
      <ImagenReact/>
      <div className='contenedor-calculator'>
        <Results input={input}/>
        <div className='fila'>
          <Button manejarClick={AgregarInput}>1</Button>
          <Button manejarClick={AgregarInput}>2</Button>
          <Button manejarClick={AgregarInput}>3</Button>
          <Button manejarClick={AgregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={AgregarInput}>4</Button>
          <Button manejarClick={AgregarInput}>5</Button>
          <Button manejarClick={AgregarInput}>6</Button>
          <Button manejarClick={AgregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={AgregarInput}>7</Button>
          <Button manejarClick={AgregarInput}>8</Button>
          <Button manejarClick={AgregarInput}>9</Button>
          <Button manejarClick={AgregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={Evaluar}>=</Button>
          <Button manejarClick={AgregarInput}>0</Button>
          <Button manejarClick={AgregarInput}>.</Button>
          <Button manejarClick={AgregarInput}>/</Button>
        </div>
        <div className='fila'>
          <ButtonClear manejarClick={ClearInput} children="Limpiar"/>
        </div>
      </div>
    </div>
  );
}

export default App;
