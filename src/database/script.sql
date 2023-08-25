-- Active: 1692980043447@@127.0.0.1@3306@graphcar
CREATE USER 'GraphUser'@'localhost' IDENTIFIED BY 'Graph2023';
GRANT ALL PRIVILEGES ON Graph.* TO 'GraphUser'@'localhost';

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
    Modelo VARCHAR(30),
    VersaoSoftware VARCHAR(60)
);

CREATE TABLE Carro(
	idCarro INT PRIMARY KEY AUTO_INCREMENT,
    Placa VARCHAR(15),
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

SELECT * FROM usuario;
