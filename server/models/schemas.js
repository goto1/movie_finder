const Schema = require('mongoose').Schema;

const MovieSchema = new Schema({
  _id: { type: Number, required: true, unique: true },
  poster_path: { type: String, default: '' },
  title: { type: String, required: true },
  vote_average: { type: String, default: 0 },
});

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 12,
    maxlength: 50,
  },
  movies: {
    favorites: [MovieSchema],
    bookmarked: [MovieSchema],
  },
});

module.exports = { MovieSchema, UserSchema };
