const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');

const responses = {
  "html": "HTML is the structure of a webpage. It uses tags like <h1>, <p>, <div>, etc.",
  "css": "CSS styles the webpage. You can change colors, layouts, and fonts.",
  "javascript": "JavaScript adds interactivity. You can make things happen when users click buttons.",
  "react": "React is a JavaScript library for building user interfaces.",
  "python": "Python is a versatile programming language popular in web development, data science, and AI.",
  "sql": "SQL is a language used to communicate with and manage databases.",
  "nosql": "NoSQL databases are designed for flexible, scalable data storage, often for big data and real-time web apps.",
  "git": "Git is a version control system that helps developers track changes and collaborate.",
  "api": "APIs allow different software applications to communicate with each other.",
  "cybersecurity": "Cybersecurity involves protecting systems and data from digital attacks.",
  "help": "You can ask me about HTML, CSS, JavaScript, React, Python, SQL, NoSQL, Git, APIs, or Cybersecurity!"
};

sendBtn.addEventListener('click', () => {
  const input = userInput.value.trim().toLowerCase();
  if (input) {
    addMessage(userInput.value, 'user');
    respond(input);
    userInput.value = '';
  }
});

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});

function addMessage(message, type) {
  const messageEl = document.createElement('div');
  messageEl.className = `${type}-message`;
  messageEl.textContent = message;
  chatBox.appendChild(messageEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respond(input) {
  let reply = "Hmm, I'm not sure about that. Try asking me about HTML, CSS, JavaScript, Python, SQL, or Git!";
  for (let key in responses) {
    if (input.includes(key)) {
      reply = responses[key];
      break;
    }
  }
  setTimeout(() => addMessage(reply, 'bot'), 500);
}

// Dark Mode Toggle
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});
