const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
// If you can use request.body then you use middleware (app.use)

app.use(express.json());

// Available Routes
// Both are End Points.
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Syed Maaz Saeed!");
});

//

app.listen(port, () => {
  console.log(`iNotebook backend  listening on port ${port}`);
});
