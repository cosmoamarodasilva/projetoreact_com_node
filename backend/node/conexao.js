const express    = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql2');
const ejs        = require('ejs');
const cors       = require('cors');

const app = express();

let conexao = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    database: 'cosmoeletro'
});


conexao.connect((error) =>{
    if (error){
        console.log('falhou bicho burro' + error);
    }

    else{
        console.log('sucesso');
    }
});

let sql = 'SELECT * FROM produtos';
conexao.query(sql, (error, resultado) =>{
    console.log(resultado);
});

const porta = 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cors());
app.use((requisitar, resposta, next) =>{
    resposta.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/produtos', (requisitar, resposta) => {

    conexao.query(sql,(error, resultado) =>{ 
        resposta.send(resultado);
    });

});

app.post('/mensagens', (requisitar, resposta) => {

    let post = requisitar.body;

    let nome = post.nome;
    let email = post.email;
    let mensagem = post.mensagem;

    let comando = `INSERT INTO clientes(nome_cliente, email) VALUES ('${nome}', '${email}');`
    let comando2 = `SELECT id_cliente FROM clientes WHERE email = '${email}' ORDER BY id_cliente DESC LIMIT 1;`
    
    conexao.query(comando)
    conexao.query(comando2,(erro, id_final) =>{
        console.log(id_final[0].id_cliente);
        let comando3 = `INSERT INTO mensagens (id_cliente,mensagem) VALUES ('${id_final[0].id_cliente}','${mensagem}');`
    conexao.query(comando3);
    })
   
    });

app.get('/pegar_mensagens', (requisitar, resposta) =>{
    let comando = "SELECT nome_cliente, mensagem FROM mensagens JOIN clientes ON clientes.id_cliente = mensagens.id_cliente LIMIT 5;";
    conexao.query(comando,(erro,resultado) =>{
        resposta.send(resultado);
    })
});

app.listen(porta);


