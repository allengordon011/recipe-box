import mongoose from 'mongoose'

const recipeSchema = mongoose.Schema({
  recipe: {title: String, image: String, uri: String, url: String},
  rating: {type: Number}
});

module.exports = mongoose.model('Recipe', recipeSchema)
