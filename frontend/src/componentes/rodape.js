import React from "react";

export default class Footer extends React.Component{
    render(){
        return(
        <div>
            <br/><br/><br/><br/><br/>
            <footer id="rodape">
                <h3>Forma de pagamento somente com <strong>Bitcoin (BTC)</strong></h3>
                <img src = {require("./../imagens/bitcoin.png").default} width="3%" alt="Pagamento somente com Bitcoin (BTC)"/>
            </footer>
            <br/><br/><br/>
            <footer className="page-footer font-small blue">
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href=""> CosmoEletro.com</a>
                </div>
            </footer>
        </div>
    
        );
    }
}