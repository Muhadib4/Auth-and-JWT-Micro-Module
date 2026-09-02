const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDatabase = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(apiRoutes);
app.use("/api/auth", authRoutes);

async function startServer() {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

startServer();
