"use strict";
module.exports = function(value, next){
	require('chainy-core').create().require('set feed')
		.set("https://api.tiles.mapbox.com/v3/examples.map-zr0njcqy/geocode/"+value+".json")
		.feed()
		.action(function(geo){
			var result = null
			if ( geo.results && geo.results[0] && geo.results[0][0] ) {
				result = geo.results[0][0]
				result = [result.lon, result.lat]
			}
			return result
		})
		.done(next)
}
module.exports.extensionType = 'action'