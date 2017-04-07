import mongoose from 'mongoose'

const recipeSchema = mongoose.Schema({
  recipe: {title: String, image: String, uri: String, url: String},
  rating: {type: Number, default: 0}
});

module.exports = mongoose.model('Recipe', recipeSchema)
