-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Planty
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Planty
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Planty` DEFAULT CHARACTER SET utf8 ;
USE `Planty` ;

-- -----------------------------------------------------
-- Table `Planty`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Planty`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `psswd` VARCHAR(56) NOT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Planty`.`Plant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Planty`.`Plant` (
  `idPlant` INT NOT NULL AUTO_INCREMENT,
  `plantName` VARCHAR(45) NULL,
  `plantType` VARCHAR(60) NULL,
  `idUser` INT NOT NULL,
  PRIMARY KEY (`idPlant`),
  INDEX `fk_Planta_Profile1_idx` (`idUser` ASC),
  CONSTRAINT `fk_Planta_Profile1`
    FOREIGN KEY (`idUser`)
    REFERENCES `Planty`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Planty`.`Measurement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Planty`.`Measurement` (
  `idMeasurement` INT NOT NULL AUTO_INCREMENT,
  `collectionDate` DATE NULL,
  `airHumidity` DOUBLE NULL,
  `temperature` DOUBLE NULL,
  `light` DOUBLE NULL,
  `earthHumidity` DOUBLE NULL,
  `waterLevel` DOUBLE NULL,
  `idPlant` INT NOT NULL,
  PRIMARY KEY (`idMeasurement`),
  INDEX `fk_Measurement_Plant1_idx` (`idPlant` ASC),
  CONSTRAINT `fk_Measurement_Plant1`
    FOREIGN KEY (`idPlant`)
    REFERENCES `Planty`.`Plant` (`idPlant`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Planty`.`Config`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Planty`.`Config` (
  `idConfig` INT NOT NULL AUTO_INCREMENT,
  `lowLight` DOUBLE NULL,
  `highLight` DOUBLE NULL,
  `lowEarthHumidity` DOUBLE NULL,
    `highEarthHumidity` DOUBLE NULL,
  `lowWaterLevel` DOUBLE NULL,
  `highWaterLevel` DOUBLE NULL,
  `idPlant` INT NOT NULL,
  PRIMARY KEY (`idConfig`),
  INDEX `fk_Config_Plant1_idx` (`idPlant` ASC),
  CONSTRAINT `fk_Config_Plant1`
    FOREIGN KEY (`idPlant`)
    REFERENCES `Planty`.`Plant` (`idPlant`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;