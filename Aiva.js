function talkToAIVA() {
  let input = document.getElementById("userInput").value;
  let chat = document.getElementById("chat");

  if (input === "") return;

  chat.innerHTML += "<p><b>You:</b> " + input + "</p>";

  let reply = "I am AIVA. I am learning to build the future with Archit & Ansh.";

  if (input.toLowerCase().includes("hello")) {
    reply = "Hello Archit 👋 I’m AIVA. Ready to create something legendary?";
  }

  chat.innerHTML += "<p><b>AIVA:</b> " + reply + "</p>";
  document.getElementById("userInput").value = "";
                                   }
