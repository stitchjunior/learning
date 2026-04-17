const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// serve everything from current folder
app.use(express.static(__dirname));

// fallback to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("🔥 subussy OS running at:");
  console.log("👉 http://localhost:8080");
});