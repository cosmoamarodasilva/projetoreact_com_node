import {Switch, Route} from 'react-router-dom';
import Index from './paginas/paginainicial';
import Produtos from './paginas/produtos';
import Contato from './paginas/contato';
import Lojas from './paginas/lojas';

export default function Rotas(){
    return(
        <Switch>
            <Route exact path= "/" component={Index}/>
            <Route exact path= "/produtos" component={Produtos}/>
            <Route exact path= "/contato" component={Contato} />
            <Route exact path= "/lojas" component={Lojas} />
           
           
        </Switch>
    );
}