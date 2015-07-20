var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SuggestionSchema = new Schema({
  post: String
});

var Suggestion = mongoose.model('Suggestion', SuggestionSchema);

module.exports = Suggestion;