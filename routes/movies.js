const express = require("express");

const router = express.Router();

const movieController = require("../controller/movies");

router.get("/", movieController.getAllMovies);

router.post("/", movieController.postMovie);

router.patch("/", movieController.updateMovie);

router.delete("/:id", movieController.deleteMovie);

module.exports = router;
