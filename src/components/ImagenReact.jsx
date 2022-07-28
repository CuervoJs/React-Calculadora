import React from "react";
import logo from '../image/logo.svg';
import '../estilo/ImagenReact.css'

const ImgReact = () => (
  <div className='contenedor-logo'>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
);

export default ImgReact;