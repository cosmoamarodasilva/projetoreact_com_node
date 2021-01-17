create database cosmoeletro
default collate utf8mb4_general_ci
default character set utf8mb4;
use cosmoeletro;
CREATE TABLE produtos (
  `idprodutos` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  `precos` int NOT NULL,
  `precofinal` int NOT NULL,
  `imagem` varchar(240) null,
  PRIMARY KEY (`idprodutos`))
COMMENT = 'Descrições e preços dos produtos.';


INSERT INTO cosmoeletro.produtos (categoria, descricao, precos, precofinal, imagem) VALUES ('eletrodomesticos', 'Refrigerador Consul. Cor:Branco', '1500.00', '1300.00', 'imagens/refrigerador consul.jpg'),
('eletrodomesticos', 'Maquina de lavar Consul 5 kilos. Cor: Branco', '2100.00', '1900.00', 'imagens/maquina de lavar.png'),
('tvs', 'Smart TV 55 polegadas', '1000.00', '950.00', 'imagens/smart tv.png'),
('tvs', 'TV 32 Polegadas', '999.00', '899.00', 'imagens/TV 32 polegadas.jpg'),
('tvs', 'TV 4K 55 Polegadas', '3000.00', '2800.00', 'imagens/TV 4K.jpg'), 
('moveis', 'Sófa 3 lugares', '1200.00', '1100.00', 'imagens/sofa 3 lugares.png'),
('moveis', 'Guarda Roupas 4 portas', '2100', '2000', 'imagens/guarda roupas.png'),
('moveis', 'Colchão de casal.', '999.00', '850', 'imagens/colchao.jpg'),
('moveis', 'Cama de casal', '2250.00', '2100', 'imagens/cama.png'),
('informatica', 'Notebook Sansung', '2600.00', '2499', 'imagens/laptop.png'), 
('informatica', 'Impressora WIFI Epson', '800', '760', 'imagens/impressora.png');

CREATE TABLE pedidos (
  `idpedidos` INT NOT NULL AUTO_INCREMENT,
  `nome_cliente` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  `telefone` INT NOT NULL,
  `nome_produto` VARCHAR(150) NOT NULL,
  `valor_uni` INT NOT NULL,
  `valor_total` INT NOT NULL,
  `quantidade` INT NOT NULL,
  PRIMARY KEY (`idpedidos`))
COMMENT = 'Descrição dos clientes e dos pedidos.';

INSERT INTO pedidos (nome_cliente, endereco, telefone, nome_produto, valor_uni, valor_total, quantidade) VALUES ('José da Silva', 'Avenida Interlagos n° 90', '911111111', 'Refrigerador Consul. Cor:Branco', '1500.00', '1300.00', '1');
INSERT INTO pedidos (nome_cliente, endereco, telefone, nome_produto, valor_uni, valor_total, quantidade) VALUES ('Maria do Carmo', 'Rua São Francisco n°200', '988888888', 'Smart TV 55 polegadas', '1000.00', '950.00', '1');


CREATE TABLE clientes (
  id_cliente INT NOT NULL AUTO_INCREMENT,
  nome_cliente VARCHAR (70) NOT NULL,
  email VARCHAR (70) NOT NULL,
  PRIMARY KEY (id_cliente) 
);

CREATE TABLE mensagens (
  id_mensagem INT NOT NULL AUTO_INCREMENT,
  mensagem VARCHAR (300) NOT NULL,
  id_cliente INT NOT NULL,
  PRIMARY KEY (id_mensagem),
  FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
);

SELECT *
FROM clientes
INNER JOIN mensagens 
ON clientes.id_cliente = mensagens.id_mensagem;







