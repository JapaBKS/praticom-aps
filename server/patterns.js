// 1. SINGLETON (2 Exemplos)
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) return DatabaseConnection.instance;
    this.connectionString = "postgres://localhost:5432/praticom";
    DatabaseConnection.instance = this;
  }
}

class LpsConfigManager {
  constructor() {
    if (LpsConfigManager.instance) return LpsConfigManager.instance;
    this.modulosAtivos = { mercadinho: true, encomendas: true, faceId: true };
    LpsConfigManager.instance = this;
  }
}

// 2. TEMPLATE METHOD (4 Classes)
class ExportadorRelatorio {
  gerarRelatorio() {
    const dados = this.coletarDados();
    this.exportar(dados);
  }
  coletarDados() { throw new Error("Método abstrato"); }
  exportar(dados) { console.log(`Exportando: ${dados}`); }
}

class RelatorioReservas extends ExportadorRelatorio {
  coletarDados() { return "Lista de reservas da semana"; }
}
class RelatorioFinanceiro extends ExportadorRelatorio {
  coletarDados() { return "Lista de despesas e receitas"; }
}
class RelatorioAcessos extends ExportadorRelatorio {
  coletarDados() { return "Lista de entradas na portaria"; }
}

// 3. STRATEGY PATTERN (5 Classes)
class NotificacaoStrategy {
  enviar(morador, mensagem) { throw new Error("Método abstrato"); }
}

class NotificacaoPush extends NotificacaoStrategy {
  enviar(morador, msg) { console.log(`Push para ${morador}: ${msg}`); }
}
class NotificacaoWhatsApp extends NotificacaoStrategy {
  enviar(morador, msg) { console.log(`WhatsApp para ${morador}: ${msg}`); }
}
class NotificacaoEmail extends NotificacaoStrategy {
  enviar(morador, msg) { console.log(`Email para ${morador}: ${msg}`); }
}

class Notificador {
  constructor(strategy) { this.strategy = strategy; }
  setStrategy(strategy) { this.strategy = strategy; }
  notificar(morador, msg) { this.strategy.enviar(morador, msg); }
}

module.exports = { DatabaseConnection, LpsConfigManager, RelatorioReservas, Notificador, NotificacaoWhatsApp };