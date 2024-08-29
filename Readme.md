# Projeto de Testes de Performance com k6

Este projeto utiliza o [k6](https://k6.io/) para realizar testes de performance em APIs. Ele é organizado em diferentes cenários de teste, incluindo smoke, load, pico, e stress.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

├── .github/workflows
│ └── smoke-test.yml # Configuração do GitHub Actions para testes automatizados
├── scripts
│ └── tests
│ ├── load
│ │ └── users.load.js # Testes de carga
│ ├── pico
│ │ └── users.pico.js # Testes de pico
│ ├── scenarios
│ │ └── iteracao-users.scenarios.js # Cenários de iteração de usuários
│ ├── smoke
│ │ └── users.smoke.js # Testes de fumaça (smoke tests)
│ ├── stress │ │ └── users.stress.js # Testes de stress
│ ├── payload.js # Geração de payloads para as requisições
│ └── utils.js # Funções utilitárias (e.g., headers, geração de dados aleatórios)

## Requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [k6](https://k6.io/docs/getting-started/installation/) (versão mais recente)
- Uma conexão ativa com a internet para importar pacotes e executar os testes.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://seu-repositorio.git
   cd seu-repositorio

   ```

2. Instale as dependências do Node.js (se necessário):

   ```bash
       npm install

   ```

## Scripts

Este projeto contém diversos scripts de teste que podem ser executados utilizando o k6. Cada script está localizado em pastas específicas, de acordo com o tipo de teste:

# 1. Testes de Fumaça (Smoke Tests)

Arquivo: users.smoke.js

Descrição: Executa testes de fumaça para verificar rapidamente a saúde da API.

Comando:

    ```bash
        k6 run scripts/tests/smoke/users.smoke.js

    ```

# 2. Testes de Carga

Arquivo: users.load.js

Descrição: Avalia o desempenho da API sob uma carga constante.

Comando:

    ```bash
        k6 run scripts/tests/load/users.load.js

    ```

# 3. Testes de Pico

Arquivo: users.pico.js

Descrição: Testa a API sob picos de carga.

Comando:

    ```bash
        k6 run scripts/tests/pico/users.pico.js

    ```

# 4. Testes de Stress

Arquivo: users.stress.js

Descrição: Verifica o comportamento da API sob condições extremas de carga.

Comando:

    ```bash
        k6 run scripts/tests/stress/users.stress.js


    ```

# 5. Testes com iteração de scenarios

Arquivo: iteracao-users.scenarios.js

Descrição: Este cenário realiza testes de carga com duas estratégias diferentes para avaliar o comportamento da aplicação sob diferentes condições de carga, enquanto verifica se a resposta do servidor é a esperada

Comando:

    ```bash
        k6 run scripts/tests/scenarios/iteracao-users.scenarios.js

    ```

## Relatórios

O relatório de execução dos testes é gerado automaticamente utilizando o k6 HTML Reporter. Após a execução dos testes, um arquivo index.html será gerado no diretório atual, contendo o resumo dos resultados.

# Como gerar um relatório:

Execute qualquer um dos testes mencionados acima.
Após a execução, o arquivo index.html será gerado no diretório raiz do projeto.
Abra o arquivo index.html no seu navegador para visualizar o relatório.

# GitHub Actions

Este projeto está configurado para rodar automaticamente os testes de fumaça (smoke tests) no GitHub Actions sempre que um commit é feito no repositório. A configuração está localizada em .github/workflows/smoke-test.yml.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias, correções ou novas funcionalidades.
