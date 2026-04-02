# Playwright Travel Booking QA Showcase

Projeto de portfólio voltado para Qualidade de Software, com automação de testes End-to-End utilizando **Playwright + TypeScript**, simulando fluxos críticos de uma plataforma de busca de voos e hotéis.

## Objetivo

Demonstrar capacidade técnica em automação de testes com foco em:

- arquitetura de testes escalável
- boas práticas de QA
- Page Object Model
- organização de massa de dados
- cenários positivos e negativos
- validações funcionais críticas
- integração com CI via GitHub Actions

## Cenário de negócio

O projeto simula uma aplicação de viagens com funcionalidades como:

- busca de voos
- busca de hotéis
- seleção de resultados
- validação de resumo da reserva
- tratamento de erros de preenchimento
- verificação de healthcheck de API

## Tecnologias utilizadas

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## Estrutura do projeto

```bash
.
├── .github/workflows
├── fixtures
├── pages
├── tests/e2e
├── tests/api
├── utils
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Casos de teste automatizados

### E2E - Flights
- Busca de voo com sucesso
- Validação de ordenação por menor preço
- Validação de resumo da reserva
- Validação de campos obrigatórios
- Validação de data inválida

### E2E - Hotels
- Busca de hotel com sucesso

### API
- Healthcheck da aplicação

## Boas práticas aplicadas

- Page Object Model
- Separação entre dados de teste e cenários
- Reaproveitamento de seletores
- Uso de `test.step()` para legibilidade
- Evidências automáticas em falha
- Estrutura preparada para CI/CD

## Como instalar

```bash
npm install
```

## Como instalar os navegadores do Playwright

```bash
npx playwright install
```

## Como executar os testes

```bash
npx playwright test
```

## Como executar em modo visual

```bash
npx playwright test --ui
```

## Como abrir o relatório HTML

```bash
npx playwright show-report
```

## Diferenciais deste projeto

Este repositório foi estruturado como vitrine profissional para recrutadores, líderes técnicos e gestores de QA, com foco em demonstrar não apenas scripts automatizados, mas também visão de qualidade, organização, manutenibilidade e contexto de negócio.

## Melhorias futuras

- adicionar testes cross-browser
- adicionar tags smoke e regression
- integrar com Allure Report
- adicionar mocks de API
- parametrizar ambientes
- executar contra aplicação demo real

## Autor

**Roseleyne Duarte Silva**  
Senior QA Engineer | Software Quality Specialist

- LinkedIn: https://linkedin.com/in/roseleyne
- GitHub: https://github.com/Roseleyne
