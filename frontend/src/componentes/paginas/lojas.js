import React from 'react';

export default class Lojas extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                <h1>CONHEÇA NOSSAS LOJAS</h1>
                </div>
                <center>
                <h2>Nossas lojas</h2>
                </center>
                <table  class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">São Paulo</th>
                        <th scope="col">Rio de Janeiro</th>
                        <th scope="col">Santa Catarina</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Avenida Interlagos, 2455</td>
                        <td>Avenida Getulio vargas, 700</td>
                        <td>Rua Major Vila, 270 Centro</td>
                        
                    </tr>

                    <tr>
                        <td>7 andar Interlagos</td>
                        <td>2 andar Vila andrade</td>
                        <td>(48)7767-6655</td>
                    </tr>

                        <tr>
                            <td>(11)7777-6655</td>
                            <td>(21)7777-9955</td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>
        );
    }
}