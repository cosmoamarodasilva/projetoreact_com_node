import React from 'react';
import * as Script from '../../javascript/scripts.js';
import CaixaProduto from './../caixa_produtos';

export default class Produtos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            BD:[]
        }
    }
    async componentDidMount(){
        let resposta = await fetch("http://localhost:8080/produtos");
        let dados = await resposta.json();
        this.setState({BD:dados});
    }
    render(){
        return(
            <div class="row-fluid">
                <div className="container-fluid">
                    <h1>ESCOLHA SEU PRODUTO E PAGUE COM BITCOIN (BTC)</h1>
                </div>
                <header>
                    <h2>Produtos</h2>
                </header>
             
                <section className="categorias">
                    <ul>
                        <li className="li_cor" onClick={() =>Script.mostrar_todos("")}>Todos produtos(11)</li>
                        <li className="li_cor" onClick={() =>Script.mostrar_eletros('eletrodomesticos')}>Etetrodomésticos (2)</li>
                        <li className="li_cor" onClick={() =>Script.mostrar_eletros('tvs')}>Televisores (3)</li>
                        <li className="li_cor" onClick={() =>Script.mostrar_eletros('moveis')}>Móveis (4)</li>
                        <li className="li_cor" onClick={() =>Script.mostrar_eletros('informatica')}>Informática (2)</li>
                    </ul>
                    <br/><br/><br/>
                </section>

                {this.state.BD && this.state.BD.map ((item, id)=>
                <CaixaProduto nome={item['descricao']} preco={item['precos']} precofinal={item['precofinal']} imagem={item['imagem']} key={id} id={item['categoria']}></CaixaProduto>
                    
                )}

            </div> 
        )
    }
}