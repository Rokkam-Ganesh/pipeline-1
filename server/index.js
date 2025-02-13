const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "../client"))); // Serve frontend files

// API Route
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
