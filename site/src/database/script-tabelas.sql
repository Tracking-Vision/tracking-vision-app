create database track;

create table empresa (
id int primary key auto_increment,
nomeEmpresa varchar(45),
emailEmpresa varchar(256),
senhaEmpresa varchar(20),
enderecoEmpresa varchar(100),
cnpjEmpresa char(14)
)

select * from empresa;	

drop database track;