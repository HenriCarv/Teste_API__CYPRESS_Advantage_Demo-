# Advantage Online Shopping API Tests

Este projeto contém testes de API automatizados para o Advantage Online Shopping, utilizando Cypress.

## Estrutura do Projeto

├── cypress
│   ├── e2e
│   │   └── GET
│   │       ├── getAllProducts.js
│   │       └── getProductById.js
│   ├── fixtures
│   │   └── product.json
│   └── support
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── package.json
└── README.md

## Pré-requisitos

- Node.js (versão 12 ou superior)
- npm (normalmente vem com Node.js)

## Instalação

1. Clone o repositório:

git clone [URL_DO_SEU_REPOSITÓRIO]
cd [NOME_DO_DIRETÓRIO]

2. Instale as dependências:

npm install

## Configuração

O arquivo `cypress.config.js` já está configurado com a URL base e outras configurações necessárias. Se precisar fazer alterações, edite este arquivo.

## Executando os Testes

Existem duas maneiras de executar os testes:

1. Modo interativo (GUI):

npm run cy:open

Isso abrirá a interface gráfica do Cypress, onde você pode selecionar e executar testes específicos.

2. Modo headless (linha de comando):

npm run cy:run

Isso executará todos os testes em modo headless, ideal para integração contínua.

## Estrutura dos Testes

- `cypress/e2e/GET/getAllProducts.js`: Testa a API para obter todos os produtos.
- `cypress/e2e/GET/getProductById.js`: Testa a API para obter um produto específico por ID.

## Comandos Personalizados

Um comando personalizado `advantageApiRequest` foi criado para facilitar as chamadas de API. Você pode encontrá-lo em `cypress/support/commands.js`.

## Fixtures

O arquivo `cypress/fixtures/product.json` contém dados de exemplo que podem ser usados nos testes.

## Dependências Principais

- Cypress: Framework de teste
- cypress-plugin-api: Plugin para melhorar os testes de API (atualmente não utilizado diretamente nos testes)

## Problemas Conhecidos

Se encontrar problemas com o `cypress-plugin-api`, você pode precisar reinstalá-lo ou usar `cy.request()` nativo do Cypress em vez de `cy.api()`.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto. Por favor, abra uma issue ou submeta um pull request com suas sugestões.
