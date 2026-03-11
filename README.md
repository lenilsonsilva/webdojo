# Documentação de Testes Automatizados -- Webdojo (Cypress)

## Visão Geral

Este projeto contém testes automatizados End‑to‑End (E2E) utilizando
Cypress para validar funcionalidades da aplicação Webdojo.

A aplicação Webdojo está no mesmo repositório. Antes de executar os
testes, é necessário iniciar a aplicação.

------------------------------------------------------------------------

## Tecnologias Utilizadas

-   Node.js
-   Cypress
-   JavaScript
-   NPM

------------------------------------------------------------------------

## Estrutura do Projeto

    web/
     └── cypress/
          ├── e2e/
          │     └── login.cy.js
          │
          ├── fixtures/
          │     └── cep.json
          │
          ├── support/
          │     ├── commands.js
          │     ├── e2e.js
          │     └── utils.js
          │
          └── documento.pdf

### cypress/e2e

Contém os testes automatizados E2E.

### cypress/fixtures

Arquivos com dados utilizados nos testes.

### cypress/support

Arquivos de suporte com comandos customizados e funções utilitárias.

------------------------------------------------------------------------

## Instalação

Clone o repositório:

    git clone <url-do-repositorio>

Instale as dependências:

    npm install

------------------------------------------------------------------------

## Executar a aplicação

Antes dos testes execute:

    npm run dev

Script:

    "dev": "serve -s dist -p 3000"

Aplicação disponível em:

    http://localhost:3000

------------------------------------------------------------------------

## Executar testes Desktop

    npm run test:login

Script:

    "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900"

------------------------------------------------------------------------

## Executar testes Mobile

    npm run test:login:mobile

Script:

    "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"

------------------------------------------------------------------------

## Tipos de testes

-   Login com sucesso
-   Login inválido
-   Validação de mensagens de erro
-   Testes responsivos

------------------------------------------------------------------------

## Boas práticas

-   Uso de fixtures
-   Comandos customizados
-   Funções reutilizáveis
-   Separação de responsabilidades

------------------------------------------------------------------------

## Autor

Documentação do projeto de automação Webdojo utilizando Cypress.
