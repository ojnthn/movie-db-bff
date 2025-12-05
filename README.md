# 🎬 Movie DB BFF

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11.0.1-red)](https://nestjs.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-blue)](https://docs.docker.com/compose/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-orange)](https://www.mysql.com/)

API Backend em **NestJS** para gerenciamento de filmes, com banco **MySQL** via **Docker**.

---

## 🚀 Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

## ⚡ Quick Start

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/movie-db-bff.git
cd movie-db-bff
```

2. Configure o .env:
```bash
cp .env.example .env
```

Exemplo:
```ini
BASE_URL=https://api.themoviedb.org/3/
API_KEY=sua_api_key_aqui

DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=movie_user
DB_PASSWORD=movie_password
DB_NAME=movie_db
```

3. Suba os containers Docker
```bash
docker-compose up -d
```
- MySQL: ```localhost:3306```
- PHPMyAdmin: ```http://localhost:8080``` (usuário: ```root```, senha: ```root```)

4. Instale as dependencias da aplicação
```bash
npm install
npm run start
```

---
## 📦 Scripts principais
| Script      | Descrição                    |
| ----------- | ---------------------------- |
| `start`     | Inicia aplicação             |
| `start:dev` | Modo desenvolvimento (watch) |
| `build`     | Compila o projeto            |
| `lint`      | Executa linting              |
| `format`    | Formata código com Prettier  |
| `test`      | Executa testes unitários     |
| `test:e2e`  | Testes end-to-end            |

---
## 🗄️ Banco de Dados
- Host: ```db```
- Usuário: ```movie_user```
- Senha: ```movie_password```
- DB: ```movie_db```

---
## 🔧 Dicas
- Para reiniciar containers
```bash
docker-compose down
docker-compose up -d
```
- PHPMyAdmin: ```http://localhost:8080``` (usuário: ```root``` / senha: ```root```)
