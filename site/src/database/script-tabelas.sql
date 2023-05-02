CREATE TABLE empresa (
idEmpresa int primary key Identity(1,1),
nomeEmpresa varchar(100),
emailEmpresa varchar(256),
senha varchar(45),
cnpj char(14),
rua varchar(80),
bairro varchar(80),
estado varchar(80),
cep char(8),
numero int
);


CREATE TABLE funcionario (
idFuncionario int primary key Identity(1,1),
nome varchar(60),
email varchar(256),
cpf char(11),
cargo varchar(45),
senha varchar(45),
fkEmpresa int foreign key references empresa(idEmpresa)
);

create table janelasBloqueadas (
idJanelasBloqueadas int primary key identity(1,1),
nome varchar(200),
endereco varchar(100)
);

create table rede (
idRede int primary key identity(1,1),
nomeRede varchar(45),
nomeExibicao varchar(45),
ipv4 char(15),
mac char(17),
bytesEnviados int,
bytesRecebidos int,
);

create table limites (
idLimites int primary key identity(1,1),
horario datetime,
maxCpu Decimal(5,2),
maxDisco Decimal(5,2),
maxRam decimal(5,2)
);

create table maquina (
idMaquina int primary key identity(1,1),
status tinyint,
hostnameMaquina varchar(45),
nomeModeloCpu varchar(80),
clockCpu DECIMAL(10,2),
nomeModeloRam varchar(45),
capacidadeTotalRam DECIMAL(10,2),
nomeModeloDisco varchar(100),
capacidadeTotalDisco DECIMAL (10,2),
leituraDisco DECIMAL(10,2),
escritaDisco DECIMAL(10,2),
fkRede int foreign key references rede(idRede),
fkEmpresa int foreign key references empresa(idEmpresa),
fkJanelasBloqueadas int foreign key references janelasBloqueadas(idJanelasBloqueadas)
);



create table log(
idLog int primary key identity(1,1),
horarioCapturado datetime default current_timestamp,
janelaPid int,
tituloJanela varchar(200),
usoCpu DECIMAL (10,2),
usoDisco DECIMAL(10,2),
usoRam DECIMAL (10,2),
fkMaquina int foreign key (fkMaquina) references maquina(idMaquina),
fkLimites int foreign key references limites(idLimites)
);