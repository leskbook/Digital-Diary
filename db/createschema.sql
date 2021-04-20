create database digitaldiary_db;
use digitaldiary_db;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  memID varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  phoneno BIGINT NOT NULL,
  firstName varchar(30) NOT NULL,
  lastName varchar(50) NOT NULL,
  createdAt timestamp NOT NULL,
  updatedAt timestamp NOT NULL,
  PRIMARY KEY (id)
  );
  
CREATE TABLE memories(
    id int NOT NULL AUTO_INCREMENT UNIQUE,    
    description text,
    title varchar(50),
    img blob ,       
    PRIMARY KEY (id)
);  