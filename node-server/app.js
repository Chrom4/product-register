const express = require("express");
const app = express();
const apiRouter = require("./routes/api");

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
