const socket = new WebSocket("http://localhost:8082/ws");

socket.addEventListener("open", () => {
  console.log("Connected to server");
  socket.send("Hello, Server!");
});

socket.addEventListener("message", (event) => {
  console.log("Message from server:", event.data);
});
