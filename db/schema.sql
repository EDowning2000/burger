DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name INT(40) NOT NULL,
	devoured BOOLEAN DEFAULT false, 
  PRIMARY KEY (id)
);
USE burgers_db;
INSERT INTO burgers (burger_name, devoured)
VALUES ('Single', false),('Double', false),('Cheese Burger', false),('Bacon', false),('Lettuce Bun', false);

