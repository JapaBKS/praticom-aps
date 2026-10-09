import React, { useState, useEffect } from 'react';
import api from '../services/api';

// Factory Component para gerar os 10 CRUDs dinamicamente (reaproveitamento de código)
const CrudFactory = ({ title, endpoint, fields }) => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    const response = await api.get(`/${endpoint}`);
    setData(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(`/${endpoint}`, formData);
    setFormData({});
    loadData();
  };

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        {fields.map(f => (
          <input 
            key={f} type="text" placeholder={f} value={formData[f] || ''}
            onChange={e => setFormData({...formData, [f]: e.target.value})}
            required style={{ marginRight: '10px' }}
          />
        ))}
        <button type="submit">Salvar</button>
      </form>
      <table border="1" width="100%" style={{ borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>{fields.map(f => <th key={f} style={{padding: '8px'}}>{f}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>{fields.map(f => <td key={f} style={{padding: '8px'}}>{item[f]}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Exportação das 10 Telas (2 por integrante)
export const Moradores = () => <CrudFactory title="Moradores" endpoint="moradores" fields={['nome', 'apartamento']} />;
export const Funcionarios = () => <CrudFactory title="Funcionários" endpoint="funcionarios" fields={['nome', 'cargo']} />;
export const Areas = () => <CrudFactory title="Áreas Comuns" endpoint="areas" fields={['nome', 'capacidade']} />;
export const Reservas = () => <CrudFactory title="Reservas" endpoint="reservas" fields={['usuario_id', 'area_id', 'data_reserva']} />;
export const Comunicados = () => <CrudFactory title="Comunicados" endpoint="comunicados" fields={['titulo', 'mensagem']} />;
export const Ocorrencias = () => <CrudFactory title="Ocorrências" endpoint="ocorrencias" fields={['descricao', 'status']} />;
export const Produtos = () => <CrudFactory title="Mercadinho" endpoint="produtos" fields={['nome', 'quantidade']} />;
export const Encomendas = () => <CrudFactory title="Encomendas" endpoint="encomendas" fields={['destinatario', 'status']} />;
export const Acessos = () => <CrudFactory title="Controlo de Acessos" endpoint="acessos" fields={['pessoa', 'data_hora']} />;
export const Financeiro = () => <CrudFactory title="Gestão Financeira" endpoint="financeiro" fields={['descricao', 'valor']} />;