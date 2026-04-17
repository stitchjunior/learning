const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve everything in your folder (index.html, games, images, etc.)
app.use(express.static(__dirname));

// Main route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log("🔥 Server running at:");
  console.log(`👉 http://localhost:${PORT}`);
});