var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var tvshowSchema = new Schema ({
    title: {type: String},
    year: {type: Number},
    country: {type: String},
    poster: {type: String},
    seasons: {type: String},
    genre: {type: String, enum:
        ['Drama', 'Fantasy', 'Sc-Fi', 'Thriller', 'Comedy']
    },
    sumary: {type: String}
});

module.exports = mongoose.model('TVShow', tvshowSchema);