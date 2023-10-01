const io = require("socket.io-client");
const express = require("express");
const app = express();

function hitURL() {
  const socket = io.connect("https://onlinetictactoe-server.onrender.com/");
  console.log(socket);
}

app.get("/", (req, res) => {
  res.send(`${hitURL && "Cron Running!"}`);
});
app.listen("2005", () => {
  console.log("server started");
  setInterval(hitURL, 20000);
});
