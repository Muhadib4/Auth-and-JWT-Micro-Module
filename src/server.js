const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Auth & JWT Micro-Module API is running"
  });
});

app.post("/echo", (req, res) => {
  res.status(200).json({
    message: "JSON berhasil diterima",
    receivedData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
