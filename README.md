# Cadastro de Tarefas - Back-end

API REST desenvolvida em Node.js e Express para gerenciamento de tarefas.

## Objetivo

Fornecer os serviços necessários para realizar operações CRUD (Create, Read, Update e Delete) consumidas pelo aplicativo mobile.

## Funcionalidades

* Criar tarefas
* Listar tarefas
* Atualizar tarefas
* Excluir tarefas

## Tecnologias Utilizadas

* Node.js
* Express
* CORS
* JavaScript

## Estrutura do Projeto

```text
controllers/
models/
routes/
server.js
package.json
```

## Rotas da API

### Listar tarefas

```http
GET /tarefas
```

### Cadastrar tarefa

```http
POST /tarefas
```

Exemplo:

```json
{
  "titulo": "Estudar React Native"
}
```

### Atualizar tarefa

```http
PUT /tarefas/:id
```

Exemplo:

```json
{
  "titulo": "Estudar React Native Avançado"
}
```

### Excluir tarefa

```http
DELETE /tarefas/:id
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/maricmoutinho/Cadastro-de-Tarefas-Back-end.git
```

2. Entre na pasta:

```bash
cd Cadastro-de-Tarefas-Back-end
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o servidor:

```bash
node server.js
```

ou

```bash
npm run dev
```

## Porta utilizada

```text
http://localhost:3000
```

## Autor

Maria Clara Moutinho
