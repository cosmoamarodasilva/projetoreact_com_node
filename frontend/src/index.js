import React from 'react';
import ReactDOM from 'react-dom';
import './estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import Header from "./componentes/cabecalho";
import Footer from './componentes/rodape';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import estados from './reducers/index'
const store = createStore(
  estados
)

ReactDOM.render(
  <Provider store = {store}>
    <Header />
    <Footer />
  </Provider>,
  document.getElementById('root')
);
