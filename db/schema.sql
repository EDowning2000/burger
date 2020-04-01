DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name INT(40) NOT NULL,
	devoured INT(10) NOT NULL, 
  PRIMARY KEY (id)
);