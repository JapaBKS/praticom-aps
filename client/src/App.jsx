import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { praticomConfig } from './config/lps';
import { 
  Moradores, Funcionarios, Areas, Reservas, Comunicados, 
  Ocorrencias, Produtos, Encomendas, Acessos, Financeiro 
} from './views/Cruds';

function App() {
  const { features } = praticomConfig;

  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <nav style={{ width: '200px', background: '#2c3e50', padding: '20px', color: '#fff' }}>
          <h2>PratiCom</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {features.modulo_rh && <li><Link to="/moradores" style={{color:'#fff'}}>Moradores</Link></li>}
            {features.modulo_rh && <li><Link to="/funcionarios" style={{color:'#fff'}}>Funcionários</Link></li>}
            {features.modulo_lazer && <li><Link to="/areas" style={{color:'#fff'}}>Áreas Comuns</Link></li>}
            {features.modulo_lazer && <li><Link to="/reservas" style={{color:'#fff'}}>Reservas</Link></li>}
            {features.modulo_social && <li><Link to="/comunicados" style={{color:'#fff'}}>Comunicados</Link></li>}
            {features.modulo_social && <li><Link to="/ocorrencias" style={{color:'#fff'}}>Ocorrências</Link></li>}
            {features.modulo_servicos && <li><Link to="/produtos" style={{color:'#fff'}}>Mercadinho</Link></li>}
            {features.modulo_servicos && <li><Link to="/encomendas" style={{color:'#fff'}}>Encomendas</Link></li>}
            {features.modulo_portaria && <li><Link to="/acessos" style={{color:'#fff'}}>Acessos</Link></li>}
            {features.modulo_portaria && <li><Link to="/financeiro" style={{color:'#fff'}}>Financeiro</Link></li>}
          </ul>
        </nav>
        <main style={{ padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/moradores" element={<Moradores />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/comunicados" element={<Comunicados />} />
            <Route path="/ocorrencias" element={<Ocorrencias />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/encomendas" element={<Encomendas />} />
            <Route path="/acessos" element={<Acessos />} />
            <Route path="/financeiro" element={<Financeiro />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;