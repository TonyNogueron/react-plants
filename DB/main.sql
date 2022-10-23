CREATE DATABASE plantyDB;

USE plantyDB;

CREATE TABLE perfil(
    idProfile INT AUTO_INCREMENT,
    user VARCHAR(45),
    psswd VARCHAR(56),
    PRIMARY KEY(idProfile)
);

CREATE TABLE planta(
    idPlanta INT AUTO_INCREMENT,
    plantName VARCHAR(45),
    idProfile INT,
    PRIMARY KEY(idPlanta),
    CONSTRAINT fk_profile_planta1
        FOREIGN KEY(idProfile) REFERENCES profile(idProfile)
);

CREATE TABLE measurement(
    idSensors INT,
    earthHumidity DOUBLE,
    lightPercent DOUBLE,
    environmentHumidity DOUBLE,
    coTwoPercent DOUBLE,
    idProfile INT,
    idPlanta INT,
    PRIMARY KEY(idSensors),
    CONSTRAINT fk_profile_sensors1
        FOREIGN KEY(idProfile) REFERENCES profile(idProfile),
    CONSTRAINT fk_planta_sensors1
        FOREIGN KEY(idPlanta) REFERENCES planta(idPlanta)

);

DROP TABLE sensors;