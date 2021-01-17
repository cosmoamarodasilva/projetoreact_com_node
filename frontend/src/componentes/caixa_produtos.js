import React from "react";
import * as Script from '../javascript/scripts.js';

export default class Produto extends React.Component{
    constructor(props){
        super(props);
        this.enviarCompra=this.enviarCompra.bind(this);
    }
    async enviarCompra(elemento){
        elemento.preventDefault();
        const url = "http://localhost/react2/cosmoeletro2/src/backend/php/enviarCompra.php";
        const dado = new FormData(elemento.target);
        const cabecalho = {
            method: "post",
            body: dado,
        }
        await fetch (url, cabecalho);
    }
    render(){
        return(
            
            <div className="box_produtos" id={this.props.id} style={{display:"inline-block"}}>
          
                <img className="imagens" src={require(`./../${this.props.imagem}`).default} width="400px" onClick={() =>Script.destaque(this)} /> 
                <br/>
                <p className="descrição">{this.props.nome}</p>
                <hr/>
                <p className="descrição"><strike>{this.props.precos}</strike></p>
                <p className="preço">{this.props.precofinal}</p>
    
                <form onSubmit={this.enviarCompra}>
                    <button type="submit" className="btn btn-primary">comprar</button>
                    <input type="hidden" name ="nome" value = "nome_cliente_default" />
                    <input type="hidden" name = "endereco" value="rua buraco do sapo" />
                    <input type="hidden" name = "telefone" value="11-6669-7777" />
                    <input type="hidden" name = "nome_produto" value={this.props.nome} />
                    <input type="hidden" name = "valor_uni" value ={this.props.precofinal} />
                    <input type="hidden" name = "valor_total" value={this.props.precofinal} />
                    <input type="hidden" name = "quantidade" value="1" />
                </form> <br/><br/><br/><br/><br/><br/>
            </div>   
    
        );
    }
}