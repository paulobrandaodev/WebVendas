import React from 'react';
import ReactDOM from 'react-dom';

// Router DOM
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Pages
import Home from './Pages/Home'
import MeusClientes from './Pages/MeusClientes'

// CSS
import './global.css';

const Rotas = () => {
  return(
    <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<MeusClientes />} path="/MeusClientes" />
        </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Rotas />, document.getElementById('root'));