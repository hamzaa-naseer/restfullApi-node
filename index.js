// const { json } = require("express");
// const express = require("express");

// const mongoose = require("mongoose");
// const movieRoutes = require("./routes/movies");
// const app = express();
// app.use(express.json());

// app.get("/movies", movieRoutes);
// app.listen(8080, () => {
//   console.log("server started on port 8080");
// });

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
