CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE employee(
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
);
DESCRIBE employee;

INSERT INTO employee VALUES
(1, 'Joe', 3000),
(2, 'Wdo', 4000),
(3, 'wado12', 5000);
