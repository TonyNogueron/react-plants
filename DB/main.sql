-- Active: 1666568023392@@pruebas-clases-armando.cunjphg47bez.us-east-1.rds.amazonaws.com@3306@plantyDB
CREATE DATABASE plantyDB;

USE plantyDB;

CREATE TABLE User(
    idUser INT AUTO_INCREMENT,
    user VARCHAR(45),
    psswd VARCHAR(56),
    PRIMARY KEY(idUser)
);

CREATE TABLE Plant(
    idPlant INT AUTO_INCREMENT,
    plantName VARCHAR(45),
    idUser INT,
    PRIMARY KEY(idPlant),
    CONSTRAINT fk_User_planta1
        FOREIGN KEY(idUser) REFERENCES User(idUser)
);

CREATE TABLE measurement(
    idSensors INT,
    earthHumidity DOUBLE,
    lightPercent DOUBLE,
    environmentHumidity DOUBLE,
    coTwoPercent DOUBLE,
    idUser INT,
    idPlant INT,
    PRIMARY KEY(idSensors),
    CONSTRAINT fk_User_measurement1
        FOREIGN KEY(idUser) REFERENCES User(idUser),
    CONSTRAINT fk_planta_measurement1
        FOREIGN KEY(idPlant) REFERENCES Plant(idPlant)
);

DROP TABLE plant;

