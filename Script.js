const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const responses = {
  "html": "HTML is the structure of a webpage. It uses tags like <h1>, <p>, <div>, etc.",
  "css": "CSS styles the webpage. You can change colors, layouts, and fonts.",
  "javascript": "JavaScript adds interactivity. You can make things happen when users click buttons.",
  "react": "React is a JavaScript library for building user interfaces.",
  "help": "You can ask me about HTML, CSS, JavaScript, or React!"
};

sendBtn.addEventListener('click', () => {
  const input = userInput.value.trim().toLowerCase();
  if (input) {
    addMessage(input, 'user');
    respond(input);
    userInput.value = '';
  }
});

function addMessage(message, type) {
  const msg = document.createElement('div');
  msg.className = `${type}-message`;
  msg.textContent = message;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respond(input) {
  let reply = "Hmm, I'm not sure about that. Try asking me about HTML, CSS, or JS!";
  for (let key in responses) {
    if (input.includes(key)) {
      reply = responses[key];
      break;
    }
  }
  setTimeout(() => addMessage(reply, 'bot'), 500);
}

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
