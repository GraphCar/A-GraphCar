-- SQLBook: Code
-- Active: 1692980043447@@127.0.0.1@3306@graphcar
DELETE FROM mysql.user where user = 'GraphUser';

CREATE USER 'GraphUser'@'%' IDENTIFIED BY 'Graph2023';
GRANT ALL PRIVILEGES ON Graph.* TO 'GraphUser'@'%';

DROP DATABASE IF EXISTS GraphCar;
CREATE DATABASE GraphCar;
USE GraphCar;

CREATE TABLE Usuario(
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(100),
    senha VARCHAR(64),
    cpf CHAR (11),
    adm TINYINT
);


CREATE TABLE ModeloCarro(
    idCarro INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(30),
    versaoSoftware VARCHAR(60)
);

CREATE TABLE Carro(
    idCarro INT PRIMARY KEY AUTO_INCREMENT,
    placa VARCHAR(15),
    fkUsuario INT,
    fkModelo INT,
    CONSTRAINT fhkUsuario FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario),
    CONSTRAINT fhkModelo FOREIGN KEY (fkModelo) REFERENCES ModeloCarro(idCarro)
);

CREATE TABLE Componentes(
    idComponentes INT PRIMARY KEY AUTO_INCREMENT,
    nomeComponente VARCHAR(15),
    versaoDriver VARCHAR(15)
);

CREATE TABLE Dados(
    idDados INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(5,2),
    voltagem DECIMAL(5,2),
    memoria DECIMAL(7,2),
    utilizacao INT,
    DVSEnabled TINYINT,
    dado FLOAT,
    dateDado DATETIME,
    fkCarro INT,
    fkMedida INT,
    fkComponentes INT,
    CONSTRAINT fhkCarro FOREIGN KEY (fkCarro) REFERENCES Carro(idCarro),
    CONSTRAINT fhkComponentes FOREIGN KEY (fkComponentes) REFERENCES Componentes(idComponentes)
);
INSERT INTO Usuario (nome, email, senha, cpf, adm) values ('ADM', 'admin@graphcar.com', '$2b$10$M/CbWCDYZcYYDnTUs1nfPOu/U665hzfQDSBucm56MxAy4ldau2YAi', '000', 3);

INSERT INTO Componentes (idComponentes, nomeComponente) VALUES (NULL, "CPU");
INSERT INTO Componentes (idComponentes, nomeComponente) VALUES (NULL, "Memória RAM");
INSERT INTO Componentes (idComponentes, nomeComponente) VALUES (NULL, "Disco");

SELECT * from Usuario;
select * from Dados;
select * from Medida;
select * from Componentes;