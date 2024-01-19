document.addEventListener("DOMContentLoaded", () => {
  const socket = io();

  socket.on("connected", (data) => {
    console.log(data);
  });

  //   // HTML 요소 내부에서의 움직임을 감지함
  //   document.body.onmousemove = (event) => {
  //     const messageBody = {
  //       x: event.clientX,
  //       y: event.clientY,
  //     };
  //     socket.emit("mousemove", messageBody);
  //   };

  // 화면 전체에서의 움직임을 감지함
  document.addEventListener("mousemove", function (event) {
    const messageBody = {
      x: event.clientX,
      y: event.clientY,
    };
    socket.emit("mousemove", messageBody);
  });

  socket.on("message", (data) => {
    console.log("Message from server:", data);
  });
});
