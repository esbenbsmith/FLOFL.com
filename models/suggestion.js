var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SuggestionSchema = new Schema({
  text: { type: String, required: true}
})

var Suggestion = mongoose.model('Suggestion', SuggestionSchema);

module.exports = Suggestion;