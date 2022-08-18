const movieSchema = require("../modal/dbmodal");

const getAllMovies = async (req, res) => {
  const showMovies = await movieSchema.find();
  res.json(showMovies);
};
const postMovie = async (req, res) => {
  const newMovie = new movieSchema({
    title: req.body.title,
    genre: req.body.genre,
    rate: req.body.rate,
    stock: req.body.stock,
  });
  const movieCreated = await newMovie.save();
  res.status(200).json(movieCreated);
};

const deleteMovie = async (req, res) => {
  try {
    await movieSchema.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Movie doesn't exist!" });
  }
};

const updateMovie = async (req, res) => {
  try {
    const data = {};
    const id = req.params.id;
    if (req.body.title) {
      data.title = req.body.title;
    }
    if (req.body.genre) {
      data.genre = req.body.genre;
    }
    if (req.body.rate) {
      data.rate = req.body.rate;
    }
    if (req.body.stock) {
      data.stock = req.body.stock;
    }
    const updatedMovie = await movieSchema.findByIdAndUpdate(id, data, {
      runValidators: true,
      returnDocument: "after",
    });
    res.status(200).json({ message: "Movie Updated", ...updatedMovie._doc });
  } catch (error) {
    res.status(401).json(error);
  }
};
module.exports = { getAllMovies, postMovie, deleteMovie, updateMovie };
