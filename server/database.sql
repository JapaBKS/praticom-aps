-- Executar no PostgreSQL
CREATE TABLE Usuarios (id SERIAL PRIMARY KEY, nome VARCHAR(100), tipo VARCHAR(20));
CREATE TABLE Areas_Comuns (id SERIAL PRIMARY KEY, nome VARCHAR(50), capacidade INT);
CREATE TABLE Reservas (id SERIAL PRIMARY KEY, usuario_id INT REFERENCES Usuarios(id), area_id INT REFERENCES Areas_Comuns(id), data_reserva TIMESTAMP);
CREATE TABLE Moradores (id SERIAL PRIMARY KEY, nome VARCHAR(100), apartamento VARCHAR(10));
CREATE TABLE Funcionarios (id SERIAL PRIMARY KEY, nome VARCHAR(100), cargo VARCHAR(50));
CREATE TABLE Comunicados (id SERIAL PRIMARY KEY, titulo VARCHAR(100), mensagem TEXT);
CREATE TABLE Ocorrencias (id SERIAL PRIMARY KEY, descricao TEXT, status VARCHAR(20));
CREATE TABLE Produtos (id SERIAL PRIMARY KEY, nome VARCHAR(50), quantidade INT);
CREATE TABLE Encomendas (id SERIAL PRIMARY KEY, destinatario VARCHAR(100), status VARCHAR(20));
CREATE TABLE Acessos (id SERIAL PRIMARY KEY, pessoa VARCHAR(100), data_hora TIMESTAMP);
CREATE TABLE Financeiro (id SERIAL PRIMARY KEY, descricao VARCHAR(100), valor DECIMAL(10,2));