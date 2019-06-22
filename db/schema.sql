CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE bruger (
    id  NOT NULL AUTO_INCREASE,
    burger_name VARCHAR (100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);