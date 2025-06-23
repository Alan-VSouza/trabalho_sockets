import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000"); 

function ChatPanel({ user, messages, onSend }) {
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="chat-panel">
      <header className="chat-header">{user}</header>
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.user === user ? "own" : "other"}`}
          >
            <span><b>{msg.user}:</b> {msg.message}</span>
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
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("chat_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off("chat_message");
  }, []);

  const sendA = (message) => {
    socket.emit("chat_message", { user: "Usuário A", message });
  };
  const sendB = (message) => {
    socket.emit("chat_message", { user: "Usuário B", message });
  };

  return (
    <div className="main-container">
      <ChatPanel user="Usuário A" messages={messages} onSend={sendA} />
      <ChatPanel user="Usuário B" messages={messages} onSend={sendB} />
    </div>
  );
}

export default App;
