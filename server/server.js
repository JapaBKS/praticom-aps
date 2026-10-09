const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({ connectionString: "postgres://postgres:senha@localhost:5432/praticom" });

// Função auxiliar para gerar os 10 CRUDs rapidamente
const createCrud = (route, table, fields) => {
  app.get(`/api/${route}`, async (req, res) => {
    const { rows } = await pool.query(`SELECT * FROM ${table}`);
    res.json(rows);
  });
  app.post(`/api/${route}`, async (req, res) => {
    const values = fields.map(f => req.body[f]);
    const placeholders = fields.map((_, i) => `$${i + 1}`).join(', ');
    await pool.query(`INSERT INTO ${table} (${fields.join(', ')}) VALUES (${placeholders})`, values);
    res.status(201).send('Criado com sucesso');
  });
};

// Membro 1
createCrud('moradores', 'Moradores', ['nome', 'apartamento']);
createCrud('funcionarios', 'Funcionarios', ['nome', 'cargo']);
// Membro 2
createCrud('areas', 'Areas_Comuns', ['nome', 'capacidade']);
createCrud('reservas', 'Reservas', ['usuario_id', 'area_id', 'data_reserva']);
// Membro 3
createCrud('comunicados', 'Comunicados', ['titulo', 'mensagem']);
createCrud('ocorrencias', 'Ocorrencias', ['descricao', 'status']);
// Membro 4
createCrud('produtos', 'Produtos', ['nome', 'quantidade']);
createCrud('encomendas', 'Encomendas', ['destinatario', 'status']);
// Membro 5
createCrud('acessos', 'Acessos', ['pessoa', 'data_hora']);
createCrud('financeiro', 'Financeiro', ['descricao', 'valor']);

app.listen(3000, () => console.log('Servidor PratiCom a correr na porta 3000'));