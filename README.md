# Chat BES - Aplicação de Bate-Papo em Tempo Real

## 📝 Descrição

Este projeto é uma aplicação de chat em tempo real que permite que múltiplos usuários se comuniquem em uma sala de bate-papo compartilhada. Os usuários primeiro inserem um nome de usuário para se identificarem e, em seguida, podem enviar e receber mensagens instantaneamente.

A aplicação utiliza uma arquitetura cliente-servidor, com um backend em Python (usando Flask e Flask-SocketIO) e um frontend em React. A comunicação bidirecional é estabelecida através de WebSockets.

## 🎥 Vídeo de Apresentação

Para uma demonstração visual do projeto e uma explicação detalhada, assista ao nosso vídeo no YouTube:

[https://www.youtube.com/watch?v=zNfCO68Jbbc](https://www.youtube.com/watch?v=zNfCO68Jbbc)

## ✨ Funcionalidades

* *Login por Nome de Usuário:* Sistema simples de identificação para entrar no chat.
* *Comunicação em Tempo Real:* As mensagens são enviadas e recebidas instantaneamente por todos os usuários conectados usando WebSockets.
* *Interface Distinta:* Mensagens enviadas pelo usuário atual são alinhadas à direita, enquanto as mensagens de outros participantes ficam à esquerda, facilitando a leitura.
* *Backend Concorrente:* O servidor utiliza eventlet para lidar com múltiplas conexões de clientes de forma assíncrona.

## 🛠️ Tecnologias Utilizadas

#### *Backend*
* *Python*
* *Flask:* Micro-framework web.
* *Flask-SocketIO:* Para comunicação WebSocket entre o servidor e os clientes.
* *Eventlet:* Biblioteca de rede concorrente.

#### *Frontend*
* *React:* Biblioteca para construção da interface de usuário.
* *Socket.IO Client:* Para estabelecer a conexão WebSocket com o servidor.
* *CSS:* Para estilização da interface.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados:
* Python 3.x
* Node.js e npm

## 🚀 Como Executar o Projeto

Siga os passos abaixo para executar a aplicação em seu ambiente de desenvolvimento.

### 1. Backend (Servidor)

bash
# 1. Navegue para a pasta do backend
cd backend

# 2. Instale as dependências do Python
pip install flask flask-socketio eventlet

# 3. Execute o servidor
python server.py

O servidor estará em execução no endereço http://0.0.0.0:5000.

### 2. Frontend (Cliente)

bash
# 1. Abra um novo terminal e navegue para a pasta do frontend
cd frontend

# 2. IMPORTANTE: Configure o IP do servidor
- Abra o arquivo 'src/App.js' e altere o endereço IP na linha abaixo
- para o IP da máquina onde o backend está rodando.
- Para testes locais, você pode usar 'localhost'.
- const socket = io("http://SEU_IP_AQUI:5000", { ... });

# 3. Instale as dependências do Node.js
npm install

# 4. Inicie a aplicação React
npm start

A aplicação será aberta em seu navegador no endereço http://localhost:3000.

## 📄 Manual do Usuário

Para instruções mais detalhadas sobre o uso da aplicação, requisitos e estrutura, consulte o arquivo *Chat BES.pdf* incluído neste repositório.

## 👥 Autores

* Alan Andrade Vasconi de Souza
* Ana Livia Turazzi
* Antonio Augusto de Campos
* Pedro Candido Salvio
