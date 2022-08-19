//setup server
const express = require("express");

const moviesRoute = require("./routes/movies");

const connectDB = require("./database/server");
const app = express();

// connectDB();
app.use(express.json());
app.use("/movies", moviesRoute);

app.listen(8080, () => {
  console.log("server running");
});
