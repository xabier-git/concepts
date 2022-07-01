create database if not exists empleados;

use empleados;

create table employees(
	id int not null auto_increment primary key,
    first_name varchar(50),
    last_name varchar(50),
	email_address varchar(100)
);

insert into employees (first_name, last_name, email_address)  values ('javier','aguirre','gatoencerrado@gmail.com');