-- Active: 1679521204876@@127.0.0.1@3306@bd_smfp
DELETE FROM mysql.user where user = 'GraphUser';

CREATE USER 'GraphUser'@'%' IDENTIFIED BY 'Graph2023';
GRANT ALL PRIVILEGES ON GraphCar.* TO 'GraphUser'@'%';
FLUSH PRIVILEGES;

DROP DATABASE IF EXISTS GraphCar;
CREATE DATABASE GraphCar;
USE GraphCar;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(64),
    cpf CHAR (11) UNIQUE,
    foto VARCHAR(100), 
    adm TINYINT
);

CREATE TABLE ModeloCarro(
	idModelo INT PRIMARY KEY AUTO_INCREMENT,
    Modelo VARCHAR(30),
    VersaoSoftware VARCHAR(60)
);

CREATE TABLE Carro(
	idCarro INT PRIMARY KEY AUTO_INCREMENT,
    Placa VARCHAR(15) UNIQUE,
	fkUsuario INT,
    fkModelo INT,
    CONSTRAINT fhkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    CONSTRAINT fhkModelo FOREIGN KEY (fkModelo) REFERENCES ModeloCarro(idModelo)
);

CREATE TABLE Componentes(
	idComponentes INT PRIMARY KEY AUTO_INCREMENT,
    NomeComponente VARCHAR(10),
    VersaoDriver VARCHAR(15),
    fkModelo INT,
    FOREIGN KEY (fkModelo) REFERENCES ModeloCarro(idModelo)
);

CREATE TABLE Dados(
	idDados INT PRIMARY KEY AUTO_INCREMENT,
    dado FLOAT,
    medida VARCHAR(10),
    dateDado DATETIME,
    fkCarro INT,
    fkComponentes INT,
    CONSTRAINT fhkCarro FOREIGN KEY (fkCarro) REFERENCES Carro(idCarro),
    CONSTRAINT fhkComponentes FOREIGN KEY (fkComponentes) REFERENCES Componentes(idComponentes)
);

DELIMITER //
CREATE PROCEDURE CADASTRAR_MOTORISTA(IN 

	US_NOME VARCHAR(50), 
    US_EMAIL VARCHAR(100), 
    US_SENHA VARCHAR(64), 
	US_CPF VARCHAR(11),
    US_ADM TINYINT, 
    C_PLACA VARCHAR(15), 
    MC_MODELO VARCHAR(30)
    
    ) BEGIN 
	INSERT INTO usuario (nome, email, senha, CPF, adm)
	VALUES ( us_nome, us_email, us_senha, us_CPF, us_adm);
    INSERT INTO ModeloCarro (Modelo)
    VALUES (mc_modelo);
	INSERT INTO Carro (Placa , fkUsuario, fkModelo)
	VALUES ( c_placa,
    (SELECT idUsuario FROM usuario WHERE email = us_email),
    (SELECT idModelo FROM ModeloCarro WHERE idModelo = (SELECT idUsuario FROM usuario WHERE email = us_email)));
	END// 
DELIMITER ;

INSERT INTO Usuario (nome, email, senha, cpf, adm) values ('ADM', 'admin@graphcar.com', '$2b$10$M/CbWCDYZcYYDnTUs1nfPOu/U665hzfQDSBucm56MxAy4ldau2YAi', '000', 3);

INSERT INTO Componentes (idComponentes, nomeComponente) VALUES (NULL, "CPU");
INSERT INTO Componentes (idComponentes, nomeComponente) VALUES (NULL, "RAM");
INSERT INTO Componentes (idComponentes, nomeComponente) VALUES (NULL, "Disco");

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
-- ('lucas', 'lucas@gmail.com', 'lucas123', '55555555555', 'bbb9999', 'model X', 1);

select * from Dados;
select * from Componentes;