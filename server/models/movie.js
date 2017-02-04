const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Movie ID is required.'],
  },
  poster_path: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: [true, 'Movie title is required'],
  },
  vote_average: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('movie', movieSchema);
