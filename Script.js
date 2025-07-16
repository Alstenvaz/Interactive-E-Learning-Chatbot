body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #000;
  transition: background 0.3s, color 0.3s;
  margin: 0;
}

body.dark {
  background-color: #121212;
  color: #eee;
}

.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#chat-window {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  background: inherit;
  margin-top: 10px;
  border-radius: 8px;
}

.message {
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;
  word-wrap: break-word;
}

.message.user {
  background-color: #b3e5fc;
  align-self: flex-end;
  text-align: right;
}

.message.bot {
  background-color: #e0e0e0;
  text-align: left;
}

body.dark .message.user {
  background-color: #0277bd;
  color: white;
}

body.dark .message.bot {
  background-color: #333;
}

footer {
  display: flex;
  margin-top: 10px;
}

input[type="text"] {
  flex-grow: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}

button {
  padding: 10px;
  font-size: 1rem;
  margin-left: 5px;
  cursor: pointer;
  border-radius: 8px;
}
