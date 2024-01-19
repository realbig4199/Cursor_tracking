document.addEventListener("DOMContentLoaded", () => {
  const socket = io();
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  socket.on("connected", (data) => {
    console.log(data);
  });

  canvas.onmousemove = (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const messageBody = { x, y };
    socket.emit("mousemove", messageBody);

    // 캔버스에 마우스 위치를 그립니다.
    drawOnCanvas(ctx, x, y);
  };

  socket.on("message", (data) => {
    console.log("Message from server:", data);
  });
});

// function drawOnCanvas(ctx, x, y) {
//   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.arc(x, y, 10, 0, 2 * Math.PI);
//   ctx.fill();
// }

function drawOnCanvas(ctx, x, y) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "blue";
  ctx.font = "20px Arial";
  ctx.fillText("여기!", x, y);
}
