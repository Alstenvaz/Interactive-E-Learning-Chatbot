const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const toggleThemeBtn = document.getElementById("toggle-theme");

sendBtn.addEventListener("click", () => {
  const input = userInput.value.trim();
  if (!input) return;

  addMessage("user", input);
  userInput.value = "";

  setTimeout(() => {
    generateResponse(input);
  }, 500);
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleThemeBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Simulated AI response (mock LLM)
function generateResponse(input) {
  const lower = input.toLowerCase();
  let response = "Hmm... I’m still learning! Try asking about AI, LLMs, or e-learning tools.";

  if (lower.includes("ai")) {
    response = "AI in education helps personalize learning through intelligent tutoring systems, adaptive content, and smart recommendations.";
  } else if (lower.includes("llm")) {
    response = "Large Language Models (LLMs) like ChatGPT or BERT are trained on massive datasets and help power chatbots, tutors, and virtual assistants.";
  } else if (lower.includes("course")) {
    response = "You can explore courses on IBM SkillsBuild, Coursera, or edX to learn about machine learning, data science, and more.";
  }

  addMessage("bot", response);
}
