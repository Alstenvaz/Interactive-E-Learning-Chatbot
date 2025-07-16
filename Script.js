const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');

sendBtn.addEventListener('click', async () => {
  const input = userInput.value.trim();
  if (!input) return;

  addMessage(input, 'user');
  userInput.value = '';

  try {
    const res = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    if (res.ok) {
      addMessage(data.reply, 'bot');
    } else {
      addMessage("Sorry, I couldn't process your request.", 'bot');
      console.error('Backend error:', data.error);
    }
  } catch (err) {
    addMessage("Network error. Please try again.", 'bot');
    console.error('Fetch error:', err);
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

// Dark Mode Toggle
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});
