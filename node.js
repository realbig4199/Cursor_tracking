const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("public")); // 'public' 폴더에서 정적 파일 제공

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.emit("connected", "You are connected");

  socket.on("mousemove", (data) => {
    console.log("Mouse move:", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(7071, () => {
  console.log("Listening on *:7071");
});
