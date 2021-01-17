import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Rotas from './rotas';

export default class Cabecalho extends React.Component{
    render(){
        return(
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light" style={{background: "orange"}}>
                <Link className="navbar-brand" as={Link} to="/">CosmoEletro</Link>
                    <div className="collapse navbar-collapse row-fluid"  id="navbanav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" as={Link} to="/">Pagina inicial</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" as={Link} to="./produtos">Produtos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" as={Link} to="./Lojas">Nossas lojas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" as={Link} to="./contato">Fale conosco</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/>
                
            <Rotas />    
            </Router>
        );

    }
}