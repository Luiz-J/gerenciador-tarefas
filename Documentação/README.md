# Gerenciador de Tarefas

Este projeto é uma aplicação de gerenciamento de tarefas construída com **PHP (backend)** e **HTML, CSS, JavaScript (Vanilla) e Bootstrap (frontend)**. A aplicação roda em um ambiente **Docker** e permite criar, listar, atualizar e excluir tarefas por meio de uma API RESTful.

## 🚀 Tecnologias Utilizadas

- **Backend:** PHP 7.4+ (API RESTful)
- **Frontend:** HTML, CSS, JavaScript (Vanilla) e Bootstrap
- **Banco de Dados:** MySQL
- **Ambiente:** Docker + Docker Compose
- **Autenticação:** JWT (opcional, se implementado)
- **Testes:** Unitários para o backend (opcional)

---

## 🛠️ Como Rodar o Projeto

### 1️⃣ Pré-requisitos

Certifique-se de ter o **Docker** e **Docker Compose** instalados na sua máquina.

### 2️⃣ Clonar o Repositório
```sh
  git clone https://github.com/seu-usuario/gerenciador-tarefas.git
  cd gerenciador-tarefas
```

### 3️⃣ Subir os Containers
```sh
  docker-compose up -d
```
Isso irá iniciar os serviços necessários (PHP, MySQL e servidor web).

### 4️⃣ Acessar a Aplicação
- **Frontend:** `http://localhost:9000`
- **Backend (API):** `http://localhost:9000/api`

### 5️⃣ Rodar Migrações do Banco
Se necessário, execute o script de criação do banco:
```sh
  docker exec -it nome_do_container_mysql mysql -u root -p < database.sql
```

---

## 📌 Funcionalidades

✅ Criar tarefas
✅ Listar tarefas
✅ Atualizar status de tarefas
✅ Excluir tarefas
✅ Interface responsiva
✅ Comunicação com API via AJAX
✅ Persistência de dados no MySQL
✅ Segurança com sanitização de entrada de dados
✅ Autenticação com JWT (se implementado)

---

## 📜 Estrutura do Projeto
```
/
├── backend/      # Código do backend PHP
│   ├── api/      # Rotas da API RESTful
│   ├── db/       # Configuração do banco de dados
│   └── tests/    # Testes unitários (se aplicável)
│
├── frontend/     # Código do frontend
│   ├── index.html
│   ├── styles.css
│   ├── scripts.js
│
├── docker-compose.yml  # Configuração dos containers
└── README.md           # Documentação do projeto
```

---

## 🧪 Testes (Opcional)
Caso os testes estejam implementados, execute:
```sh
  docker exec -it nome_do_container_php vendor/bin/phpunit
```

---

## 📜 Licença
Este projeto é de uso livre para fins acadêmicos e profissionais.

