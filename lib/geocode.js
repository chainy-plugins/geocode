module.exports = function(next){
	var chain = this;
	this.create().require('set feed swap')
		.set("https://api.tiles.mapbox.com/v3/examples.map-zr0njcqy/geocode/"+this.data+".json")
		.feed()
		.swap(function(geo){
			debugger;
			var result = null
			if ( geo.results && geo.results[0] && geo.results[0][0] ) {
				result = geo.results[0][0]
				result = [result.lon, result.lat]
			}
			return result
		})
		.done(function(err, result){
			if (err)  return next(err)
			chain.data = result
			return next()
		})
}