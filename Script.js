const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") handleUserInput();
});

function handleUserInput() {
  const input = userInput.value.trim();
  if (!input) return;

  addMessage("user", input);
  userInput.value = "";

  setTimeout(() => {
    generateResponse(input);
  }, 600);
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function generateResponse(input) {
  const lower = input.toLowerCase();
  let response = "I'm still learning! Try asking about JavaScript, AI, or LLMs.";

  if (lower.includes("javascript") && lower.includes("variable")) {
    response = `Awesome! In JavaScript, you can declare variables using var, let, or const:\n\nlet name = 'Alsten';\nconst age = 25;\n\nDo you want to try creating your own variable?`;
  } else if (lower.includes("llm") || lower.includes("ai")) {
    response = `LLMs (Large Language Models) like GPT help LearnBot understand and generate responses. They're trained on massive datasets to answer intelligently!`;
  } else if (lower.includes("hello")) {
    response = "Hello! What topic would you like to explore today?";
  }

  addMessage("bot", response);
}
