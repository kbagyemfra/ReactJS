// Make connection
var socket = io();

// Query DOM
var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");

// Emit Events
btn.addEventListener("click", (e) => {
  e.preventDefault();

  //   console.log("clicked");
  //   console.log(message.value);

  if (message.value) {
    socket.emit("chat message", {
      message: message.value,
      handle: handle.value,
    });
    message.value = "";
    // handle.value = "";
  }
});

message.addEventListener("keypress", (e) => {
  //   e.preventDefault();
  if (message.value) {
    socket.emit("typing", handle.value);
  }
});

// Listen for events
socket.on("chat message", (data) => {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on("typing", (data) => {
  feedback.innerHTML = `<p><em> ${data} is typing a message...</em></p>`;
});
