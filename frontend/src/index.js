import React from 'react';
import ReactDOM from 'react-dom';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import Header from "./componentes/cabecalho";
import Footer from './componentes/rodape';



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
