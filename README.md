# Gestaoparts Backend

## Tecnologias Usadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **NestJS**: Framework para construção de aplicações Node.js escaláveis e eficientes.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **Docker**: Plataforma para desenvolvimento, envio e execução de aplicações em containers.
- **Docker Compose**: Ferramenta para definir e gerenciar multi-containers Docker.

## Pré-requisitos

- Docker instalado: [Instruções de instalação](https://docs.docker.com/get-docker/)
- Docker Compose instalado: [Instruções de instalação](https://docs.docker.com/compose/install/)

## Passo a Passo para Executar a Aplicação

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/seu-usuario/gestaoparts.git
    cd gestaoparts/gestaoparts-backend
    ```

2. **Configure o arquivo `.env`**:
    Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias. Exemplo:
    ```env
    MONGO_URI=mongodb://mongo_db:27017/finances
    ```

3. **Construa e inicie os containers**:
    No diretório raiz do projeto, execute:
    ```bash
    docker-compose up --build
    ```

4. **Acesse a aplicação**:
    A aplicação estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

- **src/**: Contém o código fonte da aplicação.
  - **expenses/**: Módulo de despesas.
  - **category/**: Módulo de categorias.
  - **database/**: Configurações do banco de dados e schemas.
  - **domain/**: Entidades e interfaces de domínio.
  - **repositories/**: Repositórios para acesso aos dados.
  - **use-cases/**: Casos de uso da aplicação.
  - **app.module.ts**: Módulo principal da aplicação.

## Comandos Úteis

- **Parar os containers**:
    ```bash
    docker-compose down
    ```

- **Reiniciar os containers**:
    ```bash
    docker-compose restart
    ```

- **Verificar logs dos containers**:
    ```bash
    docker-compose logs -f
    ```

## Detalhes Técnicos

- **Porta da aplicação**: 3000
- **Porta do MongoDB**: 27017
- **Rede Docker**: `gestaoparts-network`
- **Volumes Docker**: `mongo_data` para persistência dos dados do MongoDB

