const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');

sendBtn.addEventListener('click', () => {
  const input = userInput.value.trim();
  if (input) {
    addMessage(input, 'user');
    getAIResponse(input);
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

async function getAIResponse(input) {
  addMessage("Thinking...", "bot");
  const lastBotMsg = document.querySelector(".bot-message:last-child");

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are LearnBot, an educational AI that explains tech topics simply." },
          { role: "user", content: input }
        ]
      })
    });

    const data = await res.json();
    lastBotMsg.remove();
    const reply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I didn't understand that.";
    addMessage(reply, 'bot');

  } catch (error) {
    lastBotMsg.remove();
    console.error(error);
    addMessage("Oops! Something went wrong while reaching the AI.", "bot");
  }
}

// Dark Mode Toggle
darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});
