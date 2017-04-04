import mongoose from 'mongoose'

const recipeSchema = mongoose.Schema({
  recipe: {type: String, required: true},
  rating: {type: Number, required: false}
});

module.exports = mongoose.model('Recipe', recipeSchema)
