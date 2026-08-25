# SRE Automation & Telemetry Tool

Ferramenta CLI utilitária desenvolvida em **TypeScript** e **Node.js** com foco em automações agnósticas de SRE, coleta nativa de métricas de host e integração com APIs de telemetria externa.

## Stack Técnica
- **Runtime:** Node.js (v20+)
- **Linguagem:** TypeScript (ESNext / NodeNext)
- **Execução & Dev:** TSX
- **Módulos Nativos:** `node:os`, `node:path`, `node:crypto`, `node:fs`

## Arquitetura de Diretórios
```text
src/
├── config/       # Módulo agnóstico de ambiente e credenciais
├── services/     # Serviços de telemetria externa e auditoria mecânica
├── utils/        # Funções utilitárias nativas de hardware
└── main.ts       # Orquestrador assíncrono do pipeline