CREATE USER 'GraphUser'@'localhost' IDENTIFIED BY 'Graph2023';
GRANT ALL PRIVILEGES ON GraphCar.* TO 'GraphUser'@'localhost';
flush privileges;

DROP DATABASE IF EXISTS GraphCar;
CREATE DATABASE GraphCar;
USE GraphCar;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(64),
    cpf CHAR (11) UNIQUE, 
    adm TINYINT
);

CREATE TABLE ModeloCarro(
	idCarro INT PRIMARY KEY AUTO_INCREMENT,
    Modelo VARCHAR(30),
    VersaoSoftware VARCHAR(60)
);

CREATE TABLE Carro(
	idCarro INT PRIMARY KEY AUTO_INCREMENT,
    Placa VARCHAR(15) UNIQUE,
	fkUsuario INT,
    fkModelo INT,
    CONSTRAINT fhkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    CONSTRAINT fhkModelo FOREIGN KEY (fkModelo) REFERENCES ModeloCarro(idCarro)
);

CREATE TABLE Componentes(
	idComponentes INT PRIMARY KEY AUTO_INCREMENT,
    NomeComponente VARCHAR(10),
    VersaoDriver VARCHAR(15)
);

CREATE TABLE Dados(
	idDados INT PRIMARY KEY AUTO_INCREMENT,
    Temperatura DECIMAL(5,2),
    Voltagem DECIMAL(5,2),
    Memoria DECIMAL(7,2),
    Utilizacao INT,
    DVSEnabled TINYINT,
    DateDado DATETIME,
    fkCarro INT,
    fkComponentes INT,
    CONSTRAINT fhkCarro FOREIGN KEY (fkCarro) REFERENCES Carro(idCarro),
    CONSTRAINT fhkComponentes FOREIGN KEY (fkComponentes) REFERENCES Componentes(idComponentes)
);
DELIMITER //
CREATE PROCEDURE CADASTRAR_MOTORISTA(IN US_NOME VARCHAR
(50), US_EMAIL VARCHAR(100), US_SENHA VARCHAR(64), 
US_CPF VARCHAR(11), C_PLACA VARCHAR(15), MC_MODELO VARCHAR(30)) BEGIN 
	INSERT INTO usuario (nome, email, senha, CPF)
	VALUES ( us_nome, us_email, us_senha, us_CPF);
    INSERT INTO ModeloCarro (Modelo)
    VALUES (mc_modelo);
	INSERT INTO Carro (Placa , fkUsuario, fkModelo)
	VALUES ( c_placa,
    (SELECT idUsuario FROM usuario WHERE email = us_email),
    (SELECT idCarro FROM ModeloCarro WHERE idCarro = (SELECT idUsuario FROM usuario WHERE email = us_email)));
	END// 
DELIMITER ;


 -- SELECT * FROM usuario;
-- SELECT * FROM carro;
-- SELECT * FROM modeloCarro;

-- DELETE from usuario WHERE idUsuario < 14 ;
-- DELETE from ModeloCarro WHERE idCarro < 14 ;
-- DELETE from Carro WHERE idCarro < 14;

-- SELECT *
--        FROM usuario u JOIN Carro c JOIN ModeloCarro mc on c.idCarro = mc.idCarro AND idUsuario = c.idCarro;

-- Exemplo de call da procedure
-- CALL cadastrar_motorista 
-- ('lucas', 'lucas@gmail.com', 'lucas123', '54496745895', 'bbb9999', 'model X');
