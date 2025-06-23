import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://192.168.15.5:5000", {
  transports: ["polling", "websocket"]
});

function Chat({ username }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    socket.on("chat_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off("chat_message");
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit("chat_message", { user: username, message: input });
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.user === username ? "own" : "other"}`}
          >
            <span>
              <b>{msg.user}:</b> {msg.message}
            </span>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form className="chat-form" onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          autoFocus
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState("");
  const [inputName, setInputName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setUsername(inputName.trim());
    }
  };

  if (!username) {
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Bem-vindo ao Chat!</h2>
          <input
            type="text"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
            placeholder="Digite seu nome"
            autoFocus
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return <Chat username={username} />;
}

export default App;
