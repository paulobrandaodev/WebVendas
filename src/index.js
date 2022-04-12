import React from 'react';
import ReactDOM from 'react-dom';

// Router DOM
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Pages
import Home from './Pages/Home'
import MeusClientes from './Pages/MeusClientes'

// CSS
import './global.css';

//Redux
import { store } from './Store/store.js'
import { Provider } from 'react-redux'

const Rotas = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route element={<Home titulo="VENDAS" />} path="/" />
            <Route element={<MeusClientes />} path="/MeusClientes" />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<Rotas />, document.getElementById('root'));