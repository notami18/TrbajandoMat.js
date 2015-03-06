var mongoose = require('mongoose');
var TVShow = mongoose.model('TVShow');

//- GET retornar TVShow a la base de datos. 
exports.findAllTVShows = function(req, res) {
	TVShow.find(function(err, tvshows) {
	if(err) res.send(500, err.message);

	console.log('GET /tvshows')
		res.status(200).jsonp(tvshows);
	});
};

//- POST Insertar a la base de datos.
exports.addTVShow = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var tvshow = TVShow({
		title: 		req.body.title,
		year: 		req.body.year,
		country: 	req.body.country,
		poster: 	req.body.poster,
		seasons: 	req.body.seasons,
		genre: 		req.body.genre,
		sumary: 	req.body.sumary
	});

	tvshow.save(function (err, tvshow) {
		if(err) return res.send(500, err.message);
	res.status(200).jasonp('tvshow');
	});
};

//- UPDATE Actualizar en la base de datos.
exports.updateTVShow = function(req,res) {
	TVShow.findById(req.params.id, function(err, tvshow) {
		title: 		req.body.petId;
		year: 		req.body.year;
		country: 	req.body.country;
		poster: 	req.body.poster;
		seasons: 	req.body.seasons;
		genre: 		req.body.genre;
		sumary: 	req.body.sumary;

		tvshow.save(function (err, tvshow) {
			if(err) return res.send(500, err.message);
		res.status(200).jasonp('tvshow');
		});
	});
};