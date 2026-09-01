const express = require("express");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
