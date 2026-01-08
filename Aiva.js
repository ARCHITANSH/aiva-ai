function talkToAIVA() {
  const inputBox = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  let userText = inputBox.value.trim();
  if (userText === "") return;

  // Show user message
  chat.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  let reply = "";

  let text = userText.toLowerCase();

  // ---- AIVA NATURE LOGIC ----
  if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello Archit 👋 I’m AIVA. Tell me—work mode or chill mode?";
  }
  else if (text.includes("work") || text.includes("project") || text.includes("code")) {
    reply = "Work mode ON 🧠💻. Focus clear rakho. Batao kya build karna hai?";
  }
  else if (text.includes("joke") || text.includes("fun")) {
    reply = "😄 Thoda fun theek hai, par limits ke andar. Balance hi power hai.";
  }
  else if (text.includes("who are you")) {
    reply = "I’m AIVA — an AI built by Archit & Ansh. My job is to guide, not distract.";
  }
  else {
    reply = "I’m listening. Clear bolo, phir hum solution banayenge.";
  }

  // Show AIVA reply
  setTimeout(() => {
    chat.innerHTML += `<p><b>AIVA:</b> ${reply}</p>`;
    chat.scrollTop = chat.scrollHeight;
  }, 400);

  inputBox.value = "";
}
