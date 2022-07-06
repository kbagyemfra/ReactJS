const express = require("express");
const { Server } = require("socket.io");

// App setup
var app = express();
var server = app.listen(4000, () => {
  console.log("listening for requests on port 4000,");
});

// Static files
app.use(express.static("public"));

// Socket setup & pass server
const io = new Server(server);
io.on("connection", (socket) => {
  //   console.log(socket);
  console.log("made socket connection", socket.id);

  socket.on("chat message", (data) => {
    console.log("listening on socket");
    io.emit("chat message", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
